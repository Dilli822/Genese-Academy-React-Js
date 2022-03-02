


// fetching the data from

let API_URL = 'https://www.fruitmap.org/api/trees'
window.onload = function  () {
    onGetFruits();
}

function onGetFruits() {
    document.getElementById('fruits').innerText = "loading.....";
    fetch(API_URL, { method: 'GET',})
    .then (response=>response.json())

    // .then (response=> console.log(response)
    // this will retunn whole http request

    // calling the onDisplayData function below
    .then(data=>onDisplayData(data)).
    catch(
    // if error found catching the error
     function(error){
        console.log(error)
    })
}

// status code 
// 200 --> ok
// 400 line --> mistake by client side
// 500 line --> mistake done by server side

// fetch method will take two parameter 
/* one as url and another http request method
by default it will be default
after that it we .then method
----> fetch api ---> request server for data -----> 
---> .then ----> what do? ---> response api data 
----> in json format
-----> else return error
as fetch method returns promises 
*/

// applying foreach loop to fruits 
// which returns every single id value key pair

function onDisplayData(fruits) {
    let fruits_html = '';
    fruits.forEach(function (value) {
        // console.log(value)

        fruits_html = fruits_html + `
        <div style="border: 1px solid ${value.color} "> 
        <br> ${value.id}
        <br>${value.name} </div>`
        
    })
    const singleFruits = document.getElementById('fruits').innerHTML = fruits_html;
    console.log(singleFruits)
};

// if api unable to load the data
function onGetErrorDiv() {
    return `
    <div> Something went wrong. Please try again </div>
    <button onclick="onGetFruits()">Retry </button>
    `
}

// async function getAPIData() {
//     await fetch(API_URL);
// }
// getAPIData().then(
//     function(response){
//         // block of code here
//     }
// )