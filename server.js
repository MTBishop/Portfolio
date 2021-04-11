// Dependencies
var express = require('express');

// Making port and db
var PORT = process.env.PORT || 3000;
var db = require('./models');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

db.sequelize.sync().then(() => {
  const server = app.listen(PORT, () => {
    console.log(
      `==> 🌎  Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`
    );
  });
});
