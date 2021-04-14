const router = require('express').Router();
const path = require('path');

router.get('/portfolio', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/portfolio.html'));
});
router.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/contact.html'));
});
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
