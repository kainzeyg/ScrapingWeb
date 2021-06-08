const axios = require('axios');
const cheerio = require('cheerio');
const url = 'https://www.uralchem.ru/press/news/'

axios.get(url)
    .then(responce => {
        console.log(responce.data);
    })
    .catch(error => {
        console.log(error);
    })