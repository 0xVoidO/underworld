const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Withdraw")
    .setColor("#e07a0d")
    .setThumbnail(sicon)
    .addField("Item to withdraw:", args.join(" "))
    .addField("Request by:", `${message.author}`);

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"withdraw"
}
