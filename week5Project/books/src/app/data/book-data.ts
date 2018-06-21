import { Book } from '../book';

export const BOOKS: Book[] = [
  {
    id: randomId(),
    title: 'abc',
    author: 'ray',
    year: 1976,
    pages: 12,
    publisher: 'abueg',
  },
  {
    id: randomId(),
    title: 'defg',
    author: 'maya',
    year: 2007,
    pages: 11,
    publisher: 'aurora',
  },
  {
    id: randomId(),
    title: 'hijk',
    author: 'ashton',
    year: 2009,
    pages: 8,
    publisher: 'santiago',
  },
];

function randomId() {
  return Math.round(Math.random() * 1000);
}
