

import React from "react";
import axios from "axios";


export default function AnimeAPI(){
const axios = require("axios");

const encodedParams = new URLSearchParams();
encodedParams.append("body", "<REQUIRED>");
encodedParams.append("accessToken", "<REQUIRED>");
encodedParams.append("title", "<REQUIRED>");

const options = {
  method: 'POST',
  url: 'https://anilistmikilior1v1.p.rapidapi.com/createThread',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Host': 'Anilistmikilior1V1.p.rapidapi.com',
    'X-RapidAPI-Key': 'd9a42d7ae1mshb3a3063221184b5p1e87e2jsnb00cc11fdfa4'
  },
  data: encodedParams
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

return(
    <div>
        <h5> This is Anime Api</h5>
    </div>
)
}