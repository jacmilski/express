const express = require('express');
const router = express.Router();
const Quiz = require('../models/quiz');

/* GET home page. */
router.get('/', (req, res) => {
  const show = !req.session.vote;
  Quiz.find({}, (err, data) => {
    let sum = 0;
    data.forEach(item => {
      sum += item.vote;
    });
    res.render('quiz', { title: 'Quiz', data, sum});
  })
});

router.post('/', (req, res) => {
  const id = req.body.quiz; 
  // quiz bo taka jest wartość atrybutu name inputa radio w widoku
  
  Quiz.findOne({_id: id}, (err, data) => {
    data.vote = data.vote + 1;
    data.save(() => {
      req.session.vote = 1;
      res.redirect('/quiz'); // redirect wykona się dopiero gdy wykona się save
    });
  });
});

module.exports = router;