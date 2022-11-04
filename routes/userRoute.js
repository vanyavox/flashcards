const express = require('express');
const Main = require('../view/Main');

const router = express.Router();
const {
  Topic, Card, Result, User,
} = require('../db/models');
const Results = require('../view/Results');

router.post('/', async (req, res) => {
  const { userName } = req.body;
  res.app.locals.username = userName;
  const data = await User.findOne({ where: { name: userName } });
  if (!data) {
    const newUser = await User.create({
      name: userName,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.app.locals.userId = newUser.id;
  } else {
    res.app.locals.userId = data.id;
  }
  res.json(res.app.locals.username);
});

module.exports = router;
