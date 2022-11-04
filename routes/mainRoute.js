const express = require('express');
const Main = require('../view/Main');
const router = express.Router();
const { Topic, Card } = require('../db/models');

router.get('/', async (req, res) => {
  const topicList = await Topic.findAll({raw: true});
  res.renderComponent(Main, { title: 'Queezy', topicList}, { doctype: false });
});


module.exports = router;