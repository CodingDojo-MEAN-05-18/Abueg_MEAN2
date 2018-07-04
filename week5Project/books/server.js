const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const logger = require('morgan');

const port = process.env.PORT || 8000;
const app = express();

require('./server/config/database');

// middleware
app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  // .use(logger('dev'))
  .use(express.static(path.join(__dirname, 'dist/public')))
  .use(require('./server/routes'));

app.listen(port, () =>
  console.log(`Express server listening on port ${port}.`)
);
