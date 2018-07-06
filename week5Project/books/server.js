const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');

const port = process.env.PORT || 8000;
const app = express();

// we load models thru the database server
require('./server/config/database');

// middleware
app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(logger('dev'))
  // for express to serve the angular app automatically
  .use(express.static(path.join(__dirname, '/dist/books')))
  .use('/api', require('./server/routes'))
  .use(require('./server/routes/catch-all.route'));

app.listen(port, () =>
  console.log(`Express server listening on port ${port}.`)
);
