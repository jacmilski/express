const express = require('express');
const router = express.Router();

const login = 'admin';
const password = '123';

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.get('/login', (req, res) => {
  res.render('login', { title: 'Express' });
});

router.post('/login', (req, res) => {
  const body = req.body;
  if (body.login === login && body.password === password ) {
    req.session.admin = 1; //wywołanie mechanizmu sesji, admin to nazwa sesji

    res.redirect('admin')
  } else {
    res.redirect('login');
  }
});
// paczka cookie-session służy do przechowywania danych dot. sesji po stronie serwera

module.exports = router;
