const { sendEmbedPict,sendEmbedError} = require('../utils/utils')

module.exports.run = async (bot, message, args) => {
    try {

        let user = await message.author
        if(args.length > 0){
            user = await message.mentions.members.first()
            user = user.user
        }
        let userAvatarUrl = await bot.users.fetch(user.id).then(user => {
            return user.avatarURL()
        })
        const newEmbed = await sendEmbedPict(message,userAvatarUrl)
        message.channel.send({embed:newEmbed})

    } catch (error) {
        const error_embed = await sendEmbedError(message,error)
        message.channel.send({embed:error_embed})
        throw error
    }
}

module.exports.help = {
    name:"pict"
}
