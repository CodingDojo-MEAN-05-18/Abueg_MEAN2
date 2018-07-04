const { bookController } = require('../controllers');
const router = require('express').Router();

module.exports = router
  .get('/', bookController.index)
  .post('/', bookController.create)
  .get('/:book_id', bookController.show)
  .put('/', bookController.update)
  .delete('/', bookController.destroy);
