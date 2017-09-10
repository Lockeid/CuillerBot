import { Client, TextChannel, Message } from 'discord.js';
import { getCharacters } from './characters';
import QuoteManager from './quoteManager';
const client = new Client();

let quoteManager: QuoteManager;

const helpCommand = '!cuiller-commands';

client.on('ready', () => {
    quoteManager = new QuoteManager();
    client.user.setGame(helpCommand);
    console.log('Ready!');
});
  
client.on('message', (msg: Message) => {
    if (msg.author.bot || !quoteManager) return;

    if (msg.content.startsWith(helpCommand)) {
        const chars = getCharacters();
        msg.channel.send(`\`${chars.map(char => `!${char}`)}\``)
        return;
    }

    if (msg.content.startsWith('!')) {
        const quote = quoteManager.getRandomQuote(msg.content.slice(1));
        if (quote) msg.channel.send(quote);
    }
});

console.log("Starting");
client.login('MzU2MDgzNDI0NDMzNTM3MDI0.DJWOFQ.CGcTApLhCyT0gzHYMGIPLPvu1Kk');