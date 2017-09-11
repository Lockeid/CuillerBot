export enum Characters {
    KADOC,
    LEODAGAN,
    LOTH,
    PERCEVAL,
    GAUVAIN,
    BURGONDE,
    MERLIN,
    ARTHUR,
    BOHORT,
    MA,
    KARADOC,
    GUENIEVRE,
    VENEC,
    BLAISE,
    YVAIN,
    AUTRES,
};

export const characterExists = (charName: string): boolean => charName.toUpperCase() in Characters;

export const getCharacters = (): Array<string> =>
    Object.keys(Characters)
        .filter(charName => Number.isNaN(Number.parseInt(charName, 10)))
        .map(charName => charName.toLowerCase());
