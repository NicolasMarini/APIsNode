const express = require('express');
const app = express();
const post = require('../models/Post');

module.exports.getPosts = () => {
    console.log(post.getPosts());
    return post.getPosts();
}