export default function getBackground(type){
    switch (type){
        case 'grass':
            return 'rgba(122, 199, 76, 0.8)';
        case 'fire':
            return 'rgba(238, 129, 48, 0.8)';
        case 'water':
            return 'rgba(99, 144, 240, 0.8)';
        case 'normal':
            return 'rgba(168, 167, 122, 0.8)';
        case 'fighting':
            return 'rgba(194, 46, 40, 0.8)';
        case 'flying':
            return 'rgba(169, 143, 243, 0.8)';
        case 'poison':
            return 'rgba(163, 62, 161, 0.8)';
        case 'electric':
            return 'rgba(247, 208, 44, 0.8)';
        case 'ground':
            return 'rgba(226, 191, 101, 0.8)';
        case 'psychic':
            return 'rgba(249, 85, 135, 0.8)';
        case 'rock':
            return 'rgba(182, 161, 54, 0.8)';
        case 'ice':
            return 'rgba(150, 217, 214, 0.8)';
        case 'bug':
            return 'rgba(166, 185, 26, 0.8)';
        case 'dragon':
            return 'rgba(111, 53, 252, 0.8)';
        case 'ghost':
            return 'rgba(115, 87, 151, 0.8)';
        case 'dark':
            return 'rgba(112, 87, 70, 0.8)';
        case 'steel':
            return 'rgba(183, 183, 206, 0.8)';
        case 'fairy':
            return 'rgba(214, 133, 173, 0.8)';
        default:
            return 'grey'
    }
}
