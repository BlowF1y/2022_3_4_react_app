import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import UserCard from './userCard';
import { paginate } from '../Utils';

function UserCardList(props) {
    const pageContentsCount = 6
    const [pageNo, setpageNo] = useState(1);
    const [currentUserData, setCurrentuserData] = useState(paginate(props.userDatas, pageContentsCount, pageNo));
    
    
    const handleChangePageNo = (event, value) => {
        setpageNo(value)
        setCurrentuserData(paginate(props.userDatas, pageContentsCount, value));
      }
    

    const userCards = currentUserData.map((userDatas, idx) => {
        return <Grid item xs={1} sm={2} md={4} key={idx}>
            <UserCard userData = { userDatas }/>
        </Grid>
    })

    return[
        <Grid container spacing={{ xs : 2, md: 3}} columns={{ xs:4, sm: 4, md: 12 }}>
            {userCards}
        </Grid>,
        <Pagination 
        count={Math.ceil(props.userDatas.length / pageContentsCount)}
        page={pageNo}
        onChange={handleChangePageNo}/>
    ]
}



export default UserCardList;