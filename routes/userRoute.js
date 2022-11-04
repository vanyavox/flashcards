const express = require('express');
const Main = require('../view/Main');

const router = express.Router();
const { Topic, Card, Result } = require('../db/models');
const Results = require('../view/Results');

router.post('/', async (req, res) => {
  const { userName } = req.body;
  res.app.locals.username = userName;
  res.json(res.app.locals.username);
  // res.renderComponent(Results, { answers, count }, { doctype: false });
});

module.exports = router;
