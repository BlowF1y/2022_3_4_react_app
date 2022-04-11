import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import CloudIcon from '@mui/icons-material/Cloud';

export const cityLatLon = [
    {name : "안양", lat: 37.3943, lon: 126.9568},
    {name : "서울", lat: 37.5665, lon: 126.9780},
]

export const weather_mapping_data = {
    ThunderStorm : {
        name : "폭우",
        icon : ThunderstormIcon
    },
    Mist : {
        name : "안개",
        icon : CloudIcon
    }
}