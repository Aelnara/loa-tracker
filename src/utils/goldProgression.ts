import { Character } from '../types/Character';

export const getPossibleRawGoldForChar = (char: Character): number => {
    let possibleRawGold = 0;
    if (char.ilvl >= 1370 && char.ilvl < 1475) possibleRawGold = possibleRawGold + 2700;
    if (char.ilvl >= 1415 && char.ilvl < 1445) possibleRawGold = possibleRawGold + 3300;
    if (char.ilvl >= 1430 && char.ilvl < 1460) possibleRawGold = possibleRawGold + 3300;
    if (char.ilvl >= 1445) possibleRawGold = possibleRawGold + 4500;
    if (char.ilvl >= 1460) possibleRawGold = possibleRawGold + 4500;
    if (char.ilvl >= 1475) possibleRawGold = possibleRawGold + 4500;

    return possibleRawGold;
};

export const getPossibleRawGoldForRoster = (roster: Character[]): number => {
    let possibleRawGold = 0;
    const goldEarningChars = roster.filter((char) => char.gold_earning);
    goldEarningChars.map((char) => (possibleRawGold = possibleRawGold + getPossibleRawGoldForChar(char)));

    return possibleRawGold;
};

export const getGoldForChar = (char: Character): number => {
    let gold = 0;

    const getArgosGold = (): number => {
        let gold = 0;
        if (char.ilvl >= 1370 && char.ilvl < 1475) gold = gold + 2700;

        return gold;
    };

    const getLegionRaidGold = (raid: 'valtan' | 'vykas'): number => {
        let gold = 0;
        if (raid === 'valtan') {
            if (char.ilvl >= 1445) {
                gold = gold + 4500;
            } else {
                gold = gold + 3300;
            }
        }
        if (raid === 'vykas') {
            if (char.ilvl >= 1460) {
                gold = gold + 4500;
            } else {
                gold = gold + 3300;
            }
        }
        return gold;
    };

    const getKakulGold = (): number => {
        let gold = 0;
        if (char.ilvl >= 1475) gold = gold + 4500;

        return gold;
    };

    if (char.progress.argos) gold = gold + getArgosGold();
    if (char.progress.valtan) gold = gold + getLegionRaidGold('valtan');
    if (char.progress.vykas) gold = gold + getLegionRaidGold('vykas');
    if (char.progress.kakul) gold = gold + getKakulGold();

    return gold;
};

export const getGoldForRoster = (roster: Character[]): number => {
    let gold = 0;
    const goldEarningChars = roster.filter((char) => char.gold_earning);
    goldEarningChars.map((char) => (gold = gold + getGoldForChar(char)));

    return gold;
};
