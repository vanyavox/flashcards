require('@babel/register');

const PORT = 3000;

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const ssr = require('./middleware/ssr');

const mainRoute = require('./routes/mainRoute.js');
const topicRoute = require('./routes/topicRoute.js');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(ssr);
app.use('/', mainRoute);
app.use('/quiz', topicRoute);

app.listen(PORT, () => {
  console.log(`Started server at ${PORT} port`)
});
