const polyfill = require('babel-polyfill');
const register = require('babel-register');
const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3002;
const postRouter = require('./src/routes/PostRouter');

app.use('/posts', postRouter);

/*
app.get('/posts', (req, res, next) => {
    let promise = new Promise((resolve, reject) => {
        axios.get('http://jsonplaceholder.typicode.com/posts/1')
        .then(res => {
            //console.log(`data: ${res}`);
            console.log(res.data);
            resolve(res);
        })
        .catch(err => {
            reject(err);
        })
    })
    return promise;
    next();
});
*/
app.listen(port);

console.log(`Express server listening at port ${port}`);
