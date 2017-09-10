import { Characters, characterExists, getCharacters } from './characters';

const loadedQuotes: {[key: string]: Array<string>} = {};

const jsonReq = require.context("../quotes", false, /^\.\/.*\.json$/);

export const loadQuotes = () => {
    getCharacters().forEach((charName: string) => {
        try {
            const charQuotes = jsonReq(`./${charName}.json`) as Array<string>;
            loadedQuotes[charName] = charQuotes;
        } catch {
            console.log(`Couldn't load file ${charName}.json`);
        }
    });
}

export const getRandomQuote = (charName: string): string => {
    if (!characterExists(charName)) return;
    const charQuotes = loadedQuotes[charName.toUpperCase()];
    const randomIndex = Math.floor(charQuotes.length * Math.random());

    return charQuotes[randomIndex];
}
