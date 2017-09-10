import { Characters, characterExists, getCharacters } from './characters';


const jsonReq = require.context("../quotes", false, /^\.\/.*\.json$/);

export default class QuoteManager {
    
    loadedQuotes: {[key: string]: Array<string>} = {};
    
    constructor() {
        getCharacters().forEach((charName: string) => {
            try {
                const charQuotes = jsonReq(`./${charName}.json`) as Array<string>;
                this.loadedQuotes[charName] = charQuotes;
            } catch {
                console.log(`Couldn't load file ${charName}.json`);
            }
        });
    }
    
    getRandomQuote = (charName: string): string => {
        const caseInsensitiveCharName = charName.toLocaleLowerCase();
        if (!characterExists(caseInsensitiveCharName)) return;
        const charQuotes = this.loadedQuotes[caseInsensitiveCharName];
        const randomIndex = Math.floor(charQuotes.length * Math.random());
    
        return charQuotes[randomIndex];
    }
}
