
import React,{useEffect, useState} from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from "@material-ui/core/Grid/Grid";
import {CircularProgress} from "@material-ui/core";

export default function ApiCallExampleHook() {

    // state hooks
    const [newsData, setNewsData] = useState();
    const [pageState, setPageState] = useState(
        {
            loading: true,
            error: false
        }
    )

    // useEffect Hook for APi CALL
    // dependices will be true for calling api once

    useEffect(()=> {
        getNewsDataFromAPI();
    }, [true])


    function getNewsDataFromAPI() {
        axios.get('http://newsapi.org/v2/everything?domains=wsj.com&apiKey=2763ee2fc0524e36a65fc507c1db186a')
        .then(function(response){
            console.log(response.data.articles);
            setNewsData(response.data.articles);
            pageState.loading = false;
            setPageState({...pageState, pageState});
        })
        .catch(function(error){
            pageState.error=true;
            setPageState({...pageState, pageState});
        })
    }
    return(
        <div>
        <h3> Api Call Example in React Hook! </h3>
        
        <div>
            {pageState.loading? <CircularProgress /> :
            <Grid container spacing={2}>
                {newsData.map((item)=>
                        <Grid item xs="12" sm="4">
                            <Card sx={{ padding: 3, margin: 1 }}>
                                <CardHeader
                                // avatar={
                                //      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"> R
                                //      </Avatar>}
                                     title={item.title}
                                     subheader={new Date (item.publishedAt).toLocaleString}
                                />
                                
                                <CardMedia
                                 component="img"
                                  height="194" image={item.urlToImage} alt="news-banner"
                                />
                                
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.description}
                                    </Typography>

                                <a target="_blank" href={item.url} style={{textDecoration: "underline"}}> Click Here to Read More </a>
                                </CardContent>
                            </Card>
                        </Grid>
                )}
            </Grid>
            }
            </div>
    </div>
    )
}