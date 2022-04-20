import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import UmbrellaOutlinedIcon from '@mui/icons-material/UmbrellaOutlined';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import BlurCircularIcon from '@mui/icons-material/BlurCircular';          

export const cityLatLon =[                                                
    { name: "서울", lat: 37.5665, lon: 127.9780},
    { name: "안양", lat: 37.3943, lon: 126.9568},
    { name: "부산", lat: 35.1796, lon: 129.0756},
    { name: "대전", lat: 36.3504, lon: 127.3845},
    { name: "광주", lat: 35.1595, lon: 126.8526},
    { name: "울산", lat: 35.5384, lon: 129.3114},
    { name: "시흥", lat: 37.3799, lon: 126.8031},
    { name: "파리", lat: 48.8566, lon: 2.3522}
]

export const weather_mapping_data = {                                  
    Thunderstorm : {
        name: "폭우",
        icon: ThunderstormIcon
    }, 

    Rain : {
        name: "비",
        icon: BeachAccessIcon
    }, 
    Clear : {
        name: "맑음",
        icon: WbSunnyIcon
    },
    Clouds : {
        name: "흐림",
        icon: CloudIcon
    },
    Mist : {
        name: "안개",
        icon: BlurCircularIcon
    },
    Drizzle : {
        name: "이슬비",
        icon: UmbrellaOutlinedIcon
    },
    Snow : {
        name: "눈",
        icon: AcUnitIcon
    }
}