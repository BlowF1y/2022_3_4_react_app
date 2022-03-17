import faker from '@faker-js/faker';
import faker_ko from '@faker-js/faker/locale/ko';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './App.css';

function App() {
  const userDatas = [];
  
  while(userDatas.length < 70) {
    userDatas.push({
      avatar: faker.image.avatar(),
      name: `${faker_ko.name.lastName()}${faker_ko.name.firstName()}`,
      email: faker.internet.email(),
      jobTitle: faker.name.jobTitle(),
      phoneNo: faker_ko.phone.phoneNumber()
    })
  }


  const userCards = userDatas.map((userData, idx) => {
    return <div key={idx}>
      <Card sx={{ maxWidth: 500 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={userData.avatar }
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
      </Card>
    </div>
    
    
  })

  console.log(userDatas)
  return (
    <div className="App">
      {userCards}
    </div>
  );
}

export default App;