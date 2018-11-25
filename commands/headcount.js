const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.roles.some(r=>["GiMA Manager", "Administrator"].includes(r.name)) )
  return message.reply("Sorry, you don't have permissions to use this!");
  let sicon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setTitle("Headcount")
  .setDescription("An official broadcast headcount for a giveaway!")
  .setFooter("React below with +1 to enter!")
  .setColor("#7742f4")
  .setThumbnail(sicon)
  .addField("Giveaway Prize:", args.join(" "))
  .addField("Type:", "Custom")
  .addField("Hosted by:", `${message.author}`)
  .addField("Heads needed:", "5")
  .addField("Time left:", "15m /FTTIS");

  message.channel.send(serverembed);
}

module.exports.help = {
  name:"headcount"
}
