const { MessageEmbed } = require('discord.js');

const color = {
    primary : "#0099ff",
    danger : "#ff4c4c"
}

const roles = {
    admin : "728761025339457546",
    moderator : "925020983251857428",
}

const gif = {
    garis : "https://cdn.discordapp.com/attachments/838318045532258314/905832038072983552/2.gif"
}

function getTime() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  return h + ":" + m;
}


module.exports = {
    isAdmin : (msg) => {
        const adminRole = roles.admin
        if (msg.member.roles.cache.has(adminRole) || msg.member.roles.cache.has(roles.moderator)){
            return true
        }else{
            return false
        }
    },
    sendEmbedMute : (msg, text, user) => { 
        let img = "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1485780423/59c00337c0b0a3d3d99a20e7a1a152d6_XL_yvv5q5.jpg"
        const embed = new MessageEmbed()
            .setColor(color.danger)
            .setTitle(user + " has beed muted")
            .setImage(img)
            .setFooter("Virtual On Comunity | " + getTime())
            .setDescription("reason : " + text)
        return embed
    },
    sendEmbedWelcome : async (msg,user) => {
        // <#channelID>
        let desc = `
Hey pribumi baru!! Selamat datang di VOC. 
Harap membaca <#811955187554975794> dan juga membaca <#905813596817195029>
        `;

        let profile_pict = await user.user.avatarURL == null ? user.user.avatarURL() : user.user.avatarURL
        const embed = new MessageEmbed()
            .setColor(color.primary)
            .setTitle("Selamat datang di VOC " + user.user.username)
            .setDescription(desc)
        return embed
    },
    sendEmbedWelcome2 : async (msg,user,bot) => {
        // <#channelID>
        let img = "https://cdn.discordapp.com/attachments/811955187554975795/928277893132484648/welcome_to_voc.png"
        let desc = `
Harap membaca <#811955187554975794> sebelum memulai pembicaraan!

1. Perkenalan <#824920082667929640>
2. Ambil role <#830693859079487488>

VOC's Channels
<#728580912790372365> : Berbicara tentang apapun
<#825965256281948170> : Berbicara tentang game
        `;

        let profile_pict = await bot.users.fetch(user.user.id).then(user => {
            return user.avatarURL()
        })        
        const embed = new MessageEmbed()
            .setColor(color.primary)
            .setTitle("Selamat datang di VOC " + user.user.username)
            .setDescription(desc)
            .setThumbnail(profile_pict)
            .setFooter("Virtual On Comunity | " + getTime())
            .setImage(img)
        return embed
    },

    sendEmbedPict : (msg, img_url) => { 
        let img = img_url
        const embed = new MessageEmbed()
            .setColor(color.primary)
            .setImage(img)
            .setFooter("Virtual On Comunity | " + getTime())
        return embed
    },

    sendEmbedError : (msg, error) => { 
        let desc = `
Please contact <@&${roles.admin}>
Errors : ${error}
`
        const embed = new MessageEmbed()
            .setColor(color.danger)
            .setTitle("Bot Error")
            .setDescription(desc)
            .setThumbnail("https://thumbs.dreamstime.com/z/warning-sign-danger-icon-rectangle-triangle-frame-yellow-black-color-background-153908978.jpg")
            .setImage(gif.garis)
            .setFooter("Virtual On Comunity | " + getTime())
        return embed
    },

    sendEmbedText : (msg, text) => { 
        const embed = new MessageEmbed()
            .setColor(color.primary)
            .setDescription(text)
            .setFooter("Virtual On Comunity | " + getTime())
        return embed
    },

    sendEmbedBye : async (msg,user,bot) => {
        // <#channelID>
        let img = "https://cdn.discordapp.com/attachments/838318045532258314/928604870875951124/good_bye_voc.png"
        let desc = `
Pribumi ${user.user.username} telah meninggal :Menghadeh: 
        `;

        let profile_pict = await bot.users.fetch(user.user.id).then(user => {
            return user.avatarURL()
        })
        const embed = new MessageEmbed()
            .setColor(color.danger)
            .setTitle("Selamat tinggal " + user.user.username)
            .setDescription(desc)
            .setThumbnail(profile_pict)
            .setFooter("Virtual On Comunity | " + getTime())
            .setImage(img)
        return embed
    },

    getAvatarUrl : async (bot,userId) => {
        let user = await bot.fetchUser(userId)
        return user.avatarURL
    },



}