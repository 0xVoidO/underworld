const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.roles.some(r=>["GiMA Manager", "Administrator"].includes(r.name)) )
    return message.reply("Sorry, you don't have permissions to use this!");
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setTitle("Giveaway")
    .setDescription("The official giveaway has started!")
    .setFooter("Use the link listed to earn the prize. Goodluck!")
    .setColor("#7742f4")
    .setThumbnail(sicon)
    .addField("Link listed:", args.join(" "))
    .addField("Type:", "Custom")
    .addField("Time limit:", "(N/A)");
  
    message.channel.send(serverembed);
}

module.exports.help = {
  name:"giveaway"
}
