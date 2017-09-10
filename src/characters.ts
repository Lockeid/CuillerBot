export enum Characters {
    KADOC,
    LEODAGAN,
    LOTH,
    PERCEVAL,
    GAUVAIN,
    BURGONDE,
};

export const characterExists = (charName: string): boolean => charName.toUpperCase() in Characters;
