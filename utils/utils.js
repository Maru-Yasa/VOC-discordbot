const { MessageEmbed } = require('discord.js');
const primary = "#0099ff"
const color = {
    primary : "#0099ff",
    danger : "#ff4c4c"
}

module.exports = {
    isAdmin : (msg) => {
        const adminRole = "728761025339457546"
        if (msg.member.roles.cache.has(adminRole)){
            return true
        }else{
            return false
        }
    },
    sendEmbedWarn : (msg, text, user) => { 
        let img = "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1485780423/59c00337c0b0a3d3d99a20e7a1a152d6_XL_yvv5q5.jpg"
        const embed = new MessageEmbed()
            .setColor(color.danger)
            .setTitle(user + " has beed muted")
            .setImage(img)
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
    sendEmbedWelcome2 : async (msg,user) => {
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

        let profile_pict = await user.user.avatarURL == null ? user.user.avatarURL() : user.user.avatarURL
        const embed = new MessageEmbed()
            .setColor(color.primary)
            .setTitle("Selamat datang di VOC" + user.user.username)
            .setDescription(desc)
            .setThumbnail(profile_pict)
            .setImage(img)
        return embed
    }
}