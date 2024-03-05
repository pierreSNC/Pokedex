export default function getStatsBackground(val) {
    if (val <= 50){
        return '#d90303';
    }
    if(val > 50 && val < 90){
        return 'orange'
    }
    if(val >= 90){
        return '#7AC74C';
    }
}