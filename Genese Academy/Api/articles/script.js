

// api url
// https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=2763ee2fc0524e36a65fc507c1db186a


let API_URL = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=2763ee2fc0524e36a65fc507c1db186a";


window.onload = () => {
    onGetNews();
}

function onGetNews(){
    document.getElementById('news').innerHTML = "<div> loading..... </div>"
    // document.getElementById('news').innerHTML = "<h5> Loading.... </h6>";
    fetch(API_URL).then (response => response.json())
    .then((data) => displayNews(data.articles))
    .catch(function error(){
            document.getElementById('news').innerHTML = onGetErrorDiv()
        })
}

// function that will display

function displayNews(news) {
    let news_html = '';
    news.forEach(function (value){
        news_html = news_html + 
        `
        <div>
        <h1 > ${value.title}</h1>
        <div style="font-family: sans-serif; letter-spacing: 1px; line-height: 25px;">
        <p>"${value.source.name}</p>
        <img src="${value.urlToImage}" alt="" style="max-width: 100%"> <br>
        <p> ${value.content} </p> 
        <p> ${fullFormatDate(value.publishedAt)} </p> 
        <a href="${value.url}" target="_blank" > Read More ...... </a>
        </div>
        </div>
        `
        console.log(news_html)
        console.log(value)
        document.getElementById('news').innerHTML = news_html;
    })
}

function fullFormatDate() {
    let d = new Date();
    let date = d;
    return date.toDateString();
    
}

function onGetErrorDiv() {
    return `
    <div>
    <p>    Something Went Wrong! </p>
    <button onclick="onGetNews()"> Retry </button>
    </div>
    `
}