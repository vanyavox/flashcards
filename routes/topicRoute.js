const express = require('express');
const Question = require('../view/Question.jsx');

const router = express.Router();
const { Card } = require('../db/models');

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  // console.log(id, '-------------------------------');
  const cards = await Card.findAll(
    {
      raw: true,
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
      where: { topicId: id },
    },
  );
  // console.log(cards);
  // res.json(cards);
  // res.end();
  res.renderComponent(Question, { title: 'Queezy', cards }, { doctype: false });
});

module.exports = router;
