const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client();

client.once('ready', () => {
    console.log('🤖 VöcklaBrawlersBot is ready!!');
});

client.login(process.env.BOT_TOKEN);

client.on('message', async msg => {
    if (msg.content.toLowerCase() === 'ping') {
        await msg.reply('pong!')
        console.log('Ping Pong! (sent)');
    }
});