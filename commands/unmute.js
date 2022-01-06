const { isAdmin,sendEmbedMute,sendEmbedError,sendEmbedText } = require('../utils/utils')

module.exports.run = async (bot, message, args) => {
    try {
        if(args.length <= 0) return; // check if args more tahen one
        if(!isAdmin(message)) return; // check if admin
        
        let mutedRole = message.guild.roles.cache.find(role => role.name == "Muted");
        const user = message.mentions.members.first()
        let server = message.guild
        const guild = bot.guilds.cache.get(server.id);
        let member = guild.members.cache.get(user.user.id)
        await member.roles.remove(mutedRole)
        const newEmbed = sendEmbedText(message,`${user.user.username} has been unmute`)
        await message.channel.send({embed:newEmbed})

    } catch (error) {
        const error_embed = await sendEmbedError(message,error)
        message.channel.send({embed:error_embed})
        throw error
    }
}

module.exports.help = {
    name:"unmute"
}
