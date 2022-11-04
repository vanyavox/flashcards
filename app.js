require('@babel/register');

const PORT = 3000;

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const ssr = require('./middleware/ssr');

const mainRoute = require('./routes/mainRoute');
const topicRoute = require('./routes/topicRoute');
const resultsRoute = require('./routes/resultsRoute');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use(ssr);
app.use('/', mainRoute);
app.use('/quiz', topicRoute);
app.use('/results', resultsRoute);

app.listen(PORT, () => {
  console.log(`Started server at ${PORT} port`);
});
