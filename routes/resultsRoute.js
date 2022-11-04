const express = require('express');
const Main = require('../view/Main');

const router = express.Router();
const { Topic, Card } = require('../db/models');
const Results = require('../view/Results');

router.post('/', async (req, res) => {
  const { arr } = req.body;
  const answers = [];
  let count = 0;
  for (const item of arr) {
    const { answer, name } = await Card.findByPk(item.id);
    answers.push({
      name,
      userAnswer: item.text,
      answer,
    });
    if (answer.toLowerCase() === item.text.toLowerCase()) {
      count++;
    }
  }
  // console.log(answers);

  res.renderComponent(Results, { answers, count }, { doctype: false });
});

module.exports = router;
