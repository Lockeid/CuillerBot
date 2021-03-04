import { Client, Message } from 'discord.js';
import { getCharacters } from './characters';
import QuoteManager from './quoteManager';
import config = require('../config.json');

const client = new Client();


let quoteManager: QuoteManager;

const helpCommand = '!cuiller-commands';

client.on('ready', () => {
    quoteManager = new QuoteManager();
    client.user.setActivity(helpCommand);
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
client.login(config.token);