


// fetching the data from

let API_URL = 'https://www.fruitmap.org/api/trees'
window.onload = function  () {
    onGetFruits();
}

function onGetFruits() {
    fetch(API_URL, { method: 'GET',})
    .then (response=>response.json())

    // if error found catching the error
    .then(function(error){
        console.log(error)
    })
}