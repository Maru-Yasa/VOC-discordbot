const { isAdmin,sendEmbedMute,sendEmbedError } = require('../utils/utils')

module.exports.run = async (bot, message, args) => {
    try {
        // if(args.length < 1) return; // check if args more tahen one
        if(!isAdmin(message)) return; // check if admin
        
        let mutedRole = message.guild.roles.cache.find(role => role.name == "Muted");
        const user = message.mentions.members.first()
        const reason = args[1] === undefined ? 'null' : args[1]
        await user.roles.add(mutedRole.id)
        console.log(mutedRole.id)
        message.channel.send({ embeds:[sendEmbedWarn(message, reason, user.user.username)]})

    } catch (error) {
        const error_embed = await sendEmbedError(message,error)
        message.channel.send({embeds:[error_embed]})
        throw error
    }
}

module.exports.help = {
    name:"mute"
}
