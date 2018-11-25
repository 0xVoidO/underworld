const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let sicon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setTitle("Commands")
  .setDescription("All of the servers commands!")
  .setFooter("If it is listed with a *, only staff have access to said command.")
  .setColor("#e07a0d")
  .setThumbnail(sicon)
  .addField("!giveaway <link to giveaway page> *", "Use this to start the giveaway once the headcount has ended!") //t
  .addField("!headcount <item(s)> *", "Use this to start a headcount which may lead into a giveaway status.") //t
  .addField("!broadcast *", "Use this to tell the server the most important messages, this does ping!") //t
  .addField("!balance", "Use this to check how many Giveaway Hub Tokens you have.") //t
  .addField("!withdraw", "Use this to notify a member of staff to prepare your items, misuse is not tolerated.") //t
  .addField("!pray", "Use this to spread the word of God.") //t
  .addField("!cmds", "Use this to check all of the commands (duh)!") //t
  .addField("!myinfo", "Use this to show your info that is available to the bot!"); //t

  message.channel.send(serverembed);
}

module.exports.help = {
  name:"cmds"
}
