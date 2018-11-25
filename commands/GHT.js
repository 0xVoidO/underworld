const Discord = require("discord.js");
let GHT = require("../GHT.json");

module.exports.run = async (bot, message, args) => {
  //!GHT
  if(!GHT[message.author.id]){
    GHT[message.author.id] = {
      GHT: 0
    };
  }

  let uGHT = GHT[message.author.id].GHT;


  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#00FF00")
  .addField(`You currently own ${uGHT} tokens.`)
  .setFooter("Use this to check your Giveaway Hub Token amount.");

  message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});

}

module.exports.help = {
  name: "balance"
}
