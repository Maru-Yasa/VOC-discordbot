const {sendEmbedBye} = require('../utils/utils.js')

async function guildMemberRemove(member, bot) {
    //Log the newly joined member to console
    console.log('User ' + member.user.tag + ' has joined the server!');

    //Find a channel named welcome and send a Welcome message
    const newEmbed = await sendEmbedBye(bot,member,bot)
    bot.channels.cache.find(c => c.id === "928607228632662036").send({embed:newEmbed})
}

module.exports = {
    name: 'guildMemberRemove',
    execute(member, bot) {
        guildMemberRemove(member,bot)
    }
}