const Book = require('mongoose').model('Book');
// const Book = mongoose.model('Book');

module.exports = {
  // get all
  index(request, reponse) {
    Book.find({})
      .then(books => response.json(books))
      .catch(console.log);
  },
  // create
  create(request, reponse) {
    Book.create(request.body)
      .then(book => response.json(book))
      .catch(error => {
        response
          .status(500)
          .json(
            Object.keys(error.errors).map(key => error.errors[key].message)
          );
      });
  },
  // get single item/resource
  show(request, reponse) {
    Book.findById(request.params.book_id)
      .then(books => response.json(book))
      .catch(console.log);
  },
  // update a resource
  update(request, reponse) {
    Book.findByIdAndUpdate(request.paramas.book_id, request.body, { new: true })
      .then(book => response.json(book))
      .catch(console.log(''));
  },
  // delete item / resource
  destroy(request, reponse) {
    Book.findByIdAndRemove(request.params.book_id)
      .then(book => response.json(book))
      .catch(console.log);
  },
};
