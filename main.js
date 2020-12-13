const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Connecté a ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '$creator') {
    msg.reply('JonathanGD, JustL30');
  }
});

client.on('message', msg => {
  if (msg.content === '$creator JustL30') {
    msg.reply('Phenomena');
  }
});

client.on('message', msg => {
  if (msg.content === '$creator JustL30 Phenomena') {
    msg.reply('55149133');
  }
});

client.on('message', msg => {
  if (msg.content === '$creator JonathanGD') {
    msg.reply('Future Fuck II, BuTiTi II');
  }
});

client.on('message', msg => {
  if (msg.content === '$creator JonathanGD Future Fuck II') {
    msg.reply('59626284');
  }
});

client.on('message', msg => {
  if (msg.content === '$creator JonathanGD BuTiTi III') {
    msg.reply('57433866');
  }
});

client.login('NzcwNjc2NzA4NjA4NTczNDQw.X5hCnQ.lEx4HRAV7ZMEBvnaUqgjfqf-1GQ');