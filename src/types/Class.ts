const names = [
    'Arcanist',
    'Artillerist',
    'Artist',
    'Bard',
    'Berserker',
    'Deadeye',
    'Deathblade',
    'Destroyer',
    'Glaivier',
    'Gunlancer',
    'Gunslinger',
    'Machinist',
    'Paladin',
    'Reaper',
    'Scrapper',
    'Shadowhunter',
    'Sharpshooter',
    'Sorceress',
    'Soulfist',
    'Striker',
    'Summoner',
    'Wardancer',
] as const;
type ClassName = typeof names[number];

export type Class = {
    name: ClassName;
    icon: string;
};
