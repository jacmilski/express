const express = require('express');
const router = express.Router();
const News = require('../models/news');

/* GET home page. */
router.get('/', (req, res) => {
  const search = req.query.search || '';

  const findNews = News
    .find({title: new RegExp(search.trim(), 'i')}) // (string, forma)
    .sort({ created: -1 }) //sortowanie malejąco to -1, rosnąco 1, domyślneto 0
  findNews.exec((err, data) => { //metoda exec() bo metoda find przyjmie najpierw
    //metody, które posortują dane i dopiero exec wykona find
    res.render('news', { title: 'News', data, search });
  });
});

module.exports = router;