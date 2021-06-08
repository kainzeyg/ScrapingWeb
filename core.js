var request = require('request');

var URL = 'https://www.uralchem.ru/press/news/';

request(URL, function(err, res, body) {
    if (err) throw err;
    console.log(body);
    console.log(res.statusCode);
});