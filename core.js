const axios = require('axios');
const cheerio = require('cheerio');
const url = 'https://news.ycombinator.com'

axios.get(url)
    .then(responce => {
        console.log(responce.data);
    })
    .catch(error => {
        console.log(error);
    })