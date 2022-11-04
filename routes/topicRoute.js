const express = require('express');
const Main = require('../view/Main');
const Question = require('../view/Question');
const router = express.Router();
const { Deck, Card } = require('../db/models');

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const cards = await Card.findAll(
    {
      raw: true,
      attributes: { 
        exclude: ['createdAt', 'updatedAt'] 
      },
      where: {deck_id : id},
    }
  );
  console.log(cards);
  //res.json(cards);
  //res.end();
  res.renderComponent(Question, { title: 'Queezy'}, { doctype: false });
});


module.exports = router;