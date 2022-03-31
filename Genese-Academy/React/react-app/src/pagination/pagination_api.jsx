
import React, {useEffect, useState} from "react";
// here lab is different module which we need to install
import Pagination from '@mui/material/Pagination';
import axios from 'axios';
import Card from "@material-ui/core/Card/Card";
import Grid from '@mui/material/Grid';
import {CircularProgress} from "@material-ui/core";
import CardHeader from '@mui/material/CardHeader';

export default function Pagination_number(){
    // lets make the state hoook for page which is called pageState 
    // and it needs following state like pageNumber
    const [pageState, setPageState] = useState({
        isLoading: true,
        isError: false,
        pageData: [],
        totalPage: 0
        })

    // function for handleChangePage which handles the which page number at where we are
    const handleChangePage = (event, newPage)=> {
        console.log(newPage)
    }


    // let's use the effectHook here to call our api 
    // keeping dependices true here
    useEffect(()=>{
        getData();
    }, [true])


    // function to fetch the api with axios 
    const getData = ()=> {
        axios.get('https://api.instantwebtools.net/v1/passenger?page=0&size=10')
        .then( function (response) {
            pageState.isLoading = false;

            // capturing the apis/setting the apis data here 
            pageState.pageData = response.data.data;
            pageState.totalPage = response.data.totalPages;


            // spread operator to copy the object and lettinh the setPgeState to know the changes occurred
            // put curly braces for iteration method
            setPageState({...pageState, pageState});
            // checking the response here
            console.log(response)
        })
    }
    return(
          

        <div style={{maxWidth: 700, margin: 'auto'}}>
                
                <h2> React Page/API Page Numbering. </h2>

            <div>
                {pageState.isLoading ? <CircularProgress/> :

                pageState.pageData.map((item) => 

                    <Card style={{color: "green"}}>

                    <CardHeader
                    title={item.name}
                    subheader = {"Trip: "+ item.trips}
                    />

                    </Card>
                   )
                }
                
            <div style={{margin: '20px 0px'}}>
                <Pagination count={10}
                onChange={handleChangePage} 
                variant="outlined" />
            </div>

        </div>
    </div>



    )
}