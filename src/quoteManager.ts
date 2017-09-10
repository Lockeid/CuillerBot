import { Characters, characterExists } from './characters';

const loadedQuotes: {[key: string]: Array<string>} = {};

const jsonReq = require.context("../quotes", false, /^\.\/.*\.json$/);

export const loadQuotes = () => {
    Object.keys(Characters).forEach((charName: string) => {
        if (!Number.isNaN(Number.parseInt(charName, 10))) return;
        try {
            const charQuotes = jsonReq(`./${charName.toLowerCase()}.json`) as Array<string>;
            loadedQuotes[charName] = charQuotes;
        } catch {
            console.log(`Couldn't load file ${charName.toLowerCase()}.json`);
        }
    });
}

export const getRandomQuote = (charName: string): string => {
    if (!characterExists(charName)) return;
    const charQuotes = loadedQuotes[charName.toUpperCase()];
    const randomIndex = Math.floor(charQuotes.length * Math.random());

    return charQuotes[randomIndex];
}
