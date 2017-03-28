import { Client, TextChannel } from 'discord.js';
const client = new Client();

client.on('ready', () => console.log('Ready!'));

client.on('message', (msg) => {
    if (msg.author.bot) return;

    if (msg.content.startsWith('!perceval')) {
        msg.channel.send('C\'est pas faux');
    }
    if (msg.content.startsWith('!burgonde')) {
        msg.channel.send('J\'aime les fruits au sirop');
    }
    if (msg.content.startsWith('!kadoc')) {
        msg.channel.send('Elle est où la poulette ?');
    }
});

console.log("Starting");
client.login('MzU2MDgzNDI0NDMzNTM3MDI0.DJWOFQ.CGcTApLhCyT0gzHYMGIPLPvu1Kk');