require('http').createServer((req, res) => res.end('Bot is alive!')).listen(3000)
const config = require("./config.json");
require('dotenv').config()
const token = process.env.TOKEN
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"] });
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(f => f.endsWith('.js'))
for (const file of commandFiles) {
    const props = require(`./commands/${file}`)
    console.log(`${file} loaded`)
    bot.commands.set(props.help.name, props)
}

// Load Event files from events folder
const eventFiles = fs.readdirSync('./events/').filter(f => f.endsWith('.js'))

for (const file of eventFiles) {
    const event = require(`./events/${file}`)
    if(event.once) {
        bot.once(event.name, (...args) => event.execute(...args, bot))
    } else {
        bot.on(event.name, (...args) => event.execute(...args, bot))
    }
}

//Command Manager
bot.on("message", async message => {
    //Check if author is a bot or the message was sent in dms and return
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    //get prefix from config and prepare message so it can be read as a command
    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let pfx = messageArray[0].toLowerCase()
    let cmd = messageArray[1];
    let args = messageArray.slice(2);

    //Check for prefix
    if(!pfx.startsWith(config.prefix)) return;

    //Get the command from the commands collection and then if the command is found run the command file
    console.log(cmd, args)
    let commandfile = bot.commands.get(cmd);
    if(commandfile) commandfile.run(bot,message,args);

});

//Token needed in .env
bot.login(token);
