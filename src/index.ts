import { Client, TextChannel, Message } from 'discord.js';
import { loadQuotes, getRandomQuote } from './quoteManager';
const client = new Client();

client.on('ready', () => {
    loadQuotes();
    console.log('Ready!');
});
  
client.on('message', (msg: Message) => {
    if (msg.author.bot) return;

    if (msg.content.startsWith('!')) {
        const quote = getRandomQuote(msg.content.slice(1));
        if (quote) msg.channel.send(quote);
    }
});

console.log("Starting");
client.login('MzU2MDgzNDI0NDMzNTM3MDI0.DJWOFQ.CGcTApLhCyT0gzHYMGIPLPvu1Kk');