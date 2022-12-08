

// know your API Nature and Structure Api
import React, {useEffect, useState} from "react";
// here lab is different module which we need to install
import Pagination from '@mui/material/Pagination';
import axios from 'axios';
import Card from "@material-ui/core/Card/Card";
import {CircularProgress} from "@material-ui/core";
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Pagination_number(){
    // lets make the state hoook for page which is called pageState 
    // and it needs following state like pageNumber
    const [pageState, setPageState] = useState({
        isLoading: true,
        isError: false,
        pageData: [],
        totalPage: 0,
        indexPage: 10,
        })

    // function for handleChangePage which handles the which page number at where we are
    const handleChangePage = (event, newPage)=> {
        // let's set the pageNumber here too
        // minus because our pagination_api component indexing starts with 0
        pageState.pageNumber = newPage - 1;
        setPageState({...pageState,pageState})
        console.log(newPage);
    }


    // let's use the effectHook here to call our api 
    // keeping dependices true here 
    // we keept pageState.pageNumber for page numbering
    useEffect(()=>{
        getData();
    }, [pageState.pageNumber])

    const handleChange = (event) => {
        pageState.indexPage = event.target.value;
        setPageState({...pageState, pageState});
        getData();
      };


    // function to fetch the api with axios 
    const getData = ()=> {
        axios.get('https://api.instantwebtools.net/v1/passenger?page='+ pageState.pageNumber+' &size='+pageState.indexPage)
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
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">PaAGE NUMBER</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={pageState.indexPage}
                        label="Page Indexing"
                        onChange={handleChange}
                        >                                           
                        
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={50}>50</MenuItem>
                        <MenuItem value={100}>100</MenuItem>

        </Select>
      </FormControl>
    </Box>


                </div>

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
                <Pagination count={pageState.totalPage}
                onChange={handleChangePage} 
                variant="outlined" />
            </div>

        </div>
    </div>



    )
}