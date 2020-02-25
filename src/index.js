import fetch from 'node-fetch'

const toJson = response => response.json()

const url = encodeURI(
    `http://newsapi.org/v2/everything?sources=Lenta&qInTitle="+умер"&sortBy=publishedAt&apiKey=${process.env.NEWS_TOKEN}`
)

fetch(url)
    .then(toJson)
    .then(d => {
        console.log(d)
        return d
    })
    .then(({ articles }) => {
        articles.forEach(x => console.log(x.title))
    })
