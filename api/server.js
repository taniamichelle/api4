const express = require('express');
const helmet = require('helmet');

// prints all node environment details specific to your comp
// console.log('environment', process.env);
// if prints undefined here should show up in Heroku
console.log('environment', process.env.NODE_ENV);

const apiRouter = require('./api-router.js');

const server = express();

server.use(helmet());

server.use('/api', apiRouter);

module.exports = server;
