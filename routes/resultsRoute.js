const express = require('express');
const Main = require('../view/Main');

const router = express.Router();
const { Topic, Card, Result } = require('../db/models');
const Results = require('../view/Results');

router.post('/', async (req, res) => {
  const { arr } = req.body;
  const answers = [];
  let count = 0;
  for (const item of arr) {
    const { answer, name, topicId } = await Card.findByPk(item.id);
    answers.push({
      name,
      userAnswer: item.text,
      answer,
      topicId,
    });
    if (answer.toLowerCase() === item.text.toLowerCase()) {
      count++;
    }
  }
  // console.log(answers);
  const data = await Result.create({
    userId: 1,
    topicId: answers[0].topicId,
    points: count,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  res.renderComponent(Results, { answers, count }, { doctype: false });
});

module.exports = router;
