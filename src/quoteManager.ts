import { characterExists, getCharacters } from './characters';

export default class QuoteManager {
    
    loadedQuotes: {[key: string]: Array<string>} = {};
    
    constructor() {
        getCharacters().forEach(async (charName: string) => {
            try {
                // const charQuotes = jsonReq(`./${charName}.json`) as Array<string>;
                const charQuotes = await import(`../quotes/${charName}.json`);
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
