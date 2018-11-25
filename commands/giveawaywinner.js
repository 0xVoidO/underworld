const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let sicon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setTitle("Giveaway Winner")
  .setDescription("This command will be changed, so dont think you can abuse it!")
  .setFooter("Winner winner, chicken dinner")
  .setColor("#e07a0d")
  .setThumbnail(sicon)
  .addField("Thank you for participating & winning!", "A moderator has been alerted, a prize will come soon."); //t

  message.channel.send(serverembed);
}

module.exports.help = {
  name:"giveawaywinner"
}
