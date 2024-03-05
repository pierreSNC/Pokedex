export default function getStats(name, val) {
    switch (name){
        case 'hp' :
            let hp__width = (val * 100) / 100;
            return hp__width;
        case 'attack' :
            let atk__width = (val * 100) / 100;
            return atk__width;
        case 'defense' :
            let def__width = (val * 100) / 100;
            return def__width;
        case 'special-attack' :
            let spe__atk__width = (val * 100) / 100;
            return spe__atk__width;
        case 'special-defense' :
            let spe__def__width = (val * 100) / 100;
            return spe__def__width;
        case 'speed' :
            let speed__width = (val * 100) / 100;
            return speed__width;

    }
}