const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("My Information")
    .setColor("#e07a0d")
    .setThumbnail(sicon)
    .addField("You Joined:", message.member.joinedAt)
    .addField("Your Guild:", message.member.guild)
    .addField("Your Name:", message.member.name);

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"myinfo"
}
