import { ClassName } from '../types/ClassName';
import class_arcanist from '../assets/icons/class_icons/class_arcanist.png';
import class_artillerist from '../assets/icons/class_icons/class_artillerist.png';
import class_artist from '../assets/icons/class_icons/class_artist.png';
import class_bard from '../assets/icons/class_icons/class_bard.png';
import class_berserker from '../assets/icons/class_icons/class_berserker.png';
import class_deadeye from '../assets/icons/class_icons/class_deadeye.png';
import class_deathblade from '../assets/icons/class_icons/class_deathblade.png';
import class_destroyer from '../assets/icons/class_icons/class_destroyer.png';
import class_glaivier from '../assets/icons/class_icons/class_glaivier.png';
import class_gunlancer from '../assets/icons/class_icons/class_gunlancer.png';
import class_gunslinger from '../assets/icons/class_icons/class_gunslinger.png';
import class_machinist from '../assets/icons/class_icons/class_machinist.png';
import class_paladin from '../assets/icons/class_icons/class_paladin.png';
import class_reaper from '../assets/icons/class_icons/class_reaper.png';
import class_scrapper from '../assets/icons/class_icons/class_scrapper.png';
import class_shadowhunter from '../assets/icons/class_icons/class_shadowhunter.png';
import class_sharpshooter from '../assets/icons/class_icons/class_sharpshooter.png';
import class_sorceress from '../assets/icons/class_icons/class_sorceress.png';
import class_soulfist from '../assets/icons/class_icons/class_soulfist.png';
import class_striker from '../assets/icons/class_icons/class_striker.png';
import class_summoner from '../assets/icons/class_icons/class_summoner.png';
import class_wardancer from '../assets/icons/class_icons/class_wardancer.png';

const getClassIcon = (className: ClassName): string => {
    switch (className) {
        case 'Arcanist':
            return class_arcanist;
        case 'Artillerist':
            return class_artillerist;
        case 'Artist':
            return class_artist;
        case 'Bard':
            return class_bard;
        case 'Berserker':
            return class_berserker;
        case 'Deadeye':
            return class_deadeye;
        case 'Deathblade':
            return class_deathblade;
        case 'Destroyer':
            return class_destroyer;
        case 'Glaivier':
            return class_glaivier;
        case 'Gunlancer':
            return class_gunlancer;
        case 'Gunslinger':
            return class_gunslinger;
        case 'Machinist':
            return class_machinist;
        case 'Paladin':
            return class_paladin;
        case 'Reaper':
            return class_reaper;
        case 'Scrapper':
            return class_scrapper;
        case 'Shadowhunter':
            return class_shadowhunter;
        case 'Sharpshooter':
            return class_sharpshooter;
        case 'Sorceress':
            return class_sorceress;
        case 'Soulfist':
            return class_soulfist;
        case 'Striker':
            return class_striker;
        case 'Summoner':
            return class_summoner;
        case 'Wardancer':
            return class_wardancer;
    }
};

export default getClassIcon;
