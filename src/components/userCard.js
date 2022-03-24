import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material';


function UserCard(props){

    const userData = props.userData;

    return <Card sx={{ maxWidth: 500 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="300"
                    image={ userData.avatar }
                    alt="avartar"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            이름 : {userData.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            직업 : { userData.jobTitle }<br />
                            이메일 : { userData.email }<br />
                            전화번호 : { userData.phoneNo}<br /> 
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>;

}

export default UserCard;

