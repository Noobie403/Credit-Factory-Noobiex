const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("543752674055553029")
setInterval(function() {
channel.send(`I Need Credit please give me i am noobiex 302 hello ever one`);
}, 30)
})

client.login(process.env.BOT_TOKEN);