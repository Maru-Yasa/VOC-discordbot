const {sendEmbedWelcome,sendEmbedWelcome2} = require('../utils/utils.js')

async function guildMemberAdd(member, bot) {
    //Log the newly joined member to console
    console.log('User ' + member.user.tag + ' has joined the server!');

    //Find a channel named welcome and send a Welcome message
    const newEmbed = await sendEmbedWelcome(bot,member)
    const newEmbed2 = await sendEmbedWelcome2(bot,member)
    bot.channels.cache.find(c => c.id === "834302027105435689").send("<@" + member.user.id + ">")
    bot.channels.cache.find(c => c.id === "834302027105435689").send({embed:newEmbed2})
    bot.channels.cache.find(c => c.id === "728580912790372365").send("<@" + member.user.id + ">")
    bot.channels.cache.find(c => c.id === "728580912790372365").send({embed:newEmbed})
}

module.exports = {
    name: 'guildMemberAdd',
    execute(member, bot) {
        guildMemberAdd(member,bot)
    }
}