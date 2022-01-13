

// api url
// https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=2763ee2fc0524e36a65fc507c1db186a


let API_URL = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=2763ee2fc0524e36a65fc507c1db186a";
window.onload = () => {
    onGetNews();
}

function onGetNews(){
    document.getElementById('news').innerText = "loading..";
    
    fetch(API_URL).then (response => response.json())
    .then(data => onDisplayData(data))
    .catch(
        function error(){
            console.log(error);
        }
    )
}