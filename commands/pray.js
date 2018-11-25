const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let dicon = ("http://chemindivin.c.h.pic.centerblog.net/o/66b0a7d1.png");
    let serverembed = new Discord.RichEmbed()
    .setDescription("Prayer")
    .setColor("#e07a0d")
    .setThumbnail(dicon)
    .addField("Thank you for praying, kind soul", "+1 prayer added")

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"pray"
}
