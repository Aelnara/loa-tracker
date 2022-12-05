import { ClassName } from '../types/ClassName';
import arcanist from '../assets/icons/class/arcanist.png';
import artillerist from '../assets/icons/class/artillerist.png';
import artist from '../assets/icons/class/artist.png';
import bard from '../assets/icons/class/bard.png';
import berserker from '../assets/icons/class/berserker.png';
import deadeye from '../assets/icons/class/deadeye.png';
import deathblade from '../assets/icons/class/deathblade.png';
import destroyer from '../assets/icons/class/destroyer.png';
import glaivier from '../assets/icons/class/glaivier.png';
import gunlancer from '../assets/icons/class/gunlancer.png';
import gunslinger from '../assets/icons/class/gunslinger.png';
import machinist from '../assets/icons/class/machinist.png';
import paladin from '../assets/icons/class/paladin.png';
import reaper from '../assets/icons/class/reaper.png';
import scrapper from '../assets/icons/class/scrapper.png';
import shadowhunter from '../assets/icons/class/shadowhunter.png';
import sharpshooter from '../assets/icons/class/sharpshooter.png';
import sorceress from '../assets/icons/class/sorceress.png';
import soulfist from '../assets/icons/class/soulfist.png';
import striker from '../assets/icons/class/striker.png';
import summoner from '../assets/icons/class/summoner.png';
import wardancer from '../assets/icons/class/wardancer.png';

const getClassIcon = (className: ClassName): string => {
    switch (className) {
        case 'Arcanist':
            return arcanist;
        case 'Artillerist':
            return artillerist;
        case 'Artist':
            return artist;
        case 'Bard':
            return bard;
        case 'Berserker':
            return berserker;
        case 'Deadeye':
            return deadeye;
        case 'Deathblade':
            return deathblade;
        case 'Destroyer':
            return destroyer;
        case 'Glaivier':
            return glaivier;
        case 'Gunlancer':
            return gunlancer;
        case 'Gunslinger':
            return gunslinger;
        case 'Machinist':
            return machinist;
        case 'Paladin':
            return paladin;
        case 'Reaper':
            return reaper;
        case 'Scrapper':
            return scrapper;
        case 'Shadowhunter':
            return shadowhunter;
        case 'Sharpshooter':
            return sharpshooter;
        case 'Sorceress':
            return sorceress;
        case 'Soulfist':
            return soulfist;
        case 'Striker':
            return striker;
        case 'Summoner':
            return summoner;
        case 'Wardancer':
            return wardancer;
    }
};

export default getClassIcon;
