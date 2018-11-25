const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.roles.some(r=>["AnMG Manager", "Administrator"].includes(r.name)) )
    return message.reply("Sorry, you don't have permissions to use this!");
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setTitle("Broadcast")
    .setDescription("Please pay attention to this message, it may include you.")
    .setFooter("If you are mentioned, please contact a member of staff immidiately.")
    .setColor("#e00d0d")
    .setThumbnail(sicon)
    .addField("Broadcasted Message:", args.join(" "))
    .addField("Broadcast by:", `${message.author}`);
  
    message.channel.send(serverembed);
}

module.exports.help = {
  name:"broadcast"
}
