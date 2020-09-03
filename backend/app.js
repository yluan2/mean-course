const express = require('express');
const bodyParser = require('body-parser');
const { AbstractExtendedWebDriver } = require('protractor/built/browser');

const app = express();

app.use(bodyParser.json());


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
})

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added Successfully'
  });
});

app.get('/api/posts',(req, res, next) => {
  const posts = [
    {
      id: 'wefaqwerf',
      title: 'First server-side post',
      content: 'This is coming from the server'
    },
    {
      id: 'weysert',
      title: 'Second server-side post',
      content: 'This is coming from the server!'
    },

  ];
  res.status(200).json({
    message: 'posts fetched successfully',
    posts: posts
  });
});

module.exports = app;
