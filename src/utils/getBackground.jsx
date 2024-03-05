export default function getBackground(type){
    switch (type){
        case 'grass':
            return '#7AC74C';
        case 'fire':
            return '#EE8130';
        case 'water':
            return '#6390F0';
        case 'normal':
            return '#A8A77A';
        case 'fighting':
            return '#C22E28';
        case 'flying':
            return '#A98FF3';
        case 'poison':
            return '#A33EA1';
        case 'electric':
            return '#F7D02C';
        case 'ground':
            return '#E2BF65';
        case 'psychic':
            return '#F95587';
        case 'rock':
            return '#B6A136';
        case 'ice':
            return '#96D9D6';
        case 'bug':
            return '#A6B91A';
        case 'dragon':
            return '#6F35FC';
        case 'ghost':
            return '#735797';
        case 'dark':
            return '#705746';
        case 'steel':
            return '#B7B7CE';
        case 'fairy':
            return '#D685AD';
        default:
            return 'grey'
    }
}
