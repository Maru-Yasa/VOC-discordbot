const { isAdmin,sendEmbedWarn } = require('../utils/utils')

module.exports.run = async (bot, message, args) => {
    try {
        // if(args.length < 1) return; // check if args more tahen one
        if(!isAdmin(message)) return; // check if admin
        
        let mutedRole = message.guild.roles.cache.find(role => role.name == "Muted");
        const user = message.mentions.members.first()
        let server = message.guild
        const guild = bot.guilds.cache.get(server.id);
        let member = guild.members.cache.get(user.user.id)
        await member.roles.remove(mutedRole)
        await message.channel.send( user.user.username + " has been unmuted")

    } catch (error) {
        message.channel.send("Error found, please contact Admin : " + error)
        throw error
    }
}

module.exports.help = {
    name:"unmute"
}
