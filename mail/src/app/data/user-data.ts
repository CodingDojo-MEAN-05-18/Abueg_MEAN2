import { User } from '../user';

export const USERS: User[] = [
  {
    email: 'nicci@nicci.com',
    priority: false,
    subject: 'pura vida',
    content: 'still trying to figure this statement out.',
    value: randomValue(),
  },
  {
    email: 'maya@maya.com',
    priority: true,
    subject: 'surfing',
    content: 'this afternoon',
    value: randomValue(),
  },
  {
    email: 'oliver@ollie.com',
    priority: true,
    subject: 'ollie',
    content: 'says hello mom',
    value: randomValue(),
  },
  {
    email: 'ash@santiago.com',
    priority: false,
    subject: 'friends',
    content: 'playing mindcraft',
    value: randomValue(),
  },
  {
    email: 'ray@ray.com',
    priority: true,
    subject: 'working',
    content: 'in Tamarindo and the internet is slow.',
    value: randomValue(),
  },
  {
    email: 'alasca@abueg.com',
    priority: true,
    subject: 'new dog in house',
    content: 'i have new buddies, a cat & a dog.',
    value: randomValue(),
  },
  {
    email: 'chewy@abueg.com',
    priority: true,
    subject: 'I do not like the other dog',
    content: 'why do we need a new dog?',
    value: randomValue(),
  },
  {
    email: 'rockstarkitty@cat.com',
    priority: true,
    subject: 'spagetti',
    content: 'damn I have a long name for a cat',
    value: randomValue(),
  },
];

function randomValue() {
  const random = Math.round(Math.random() * 6);
  const r = random.toString();
  return r;
}

function getColor(value) {
  switch (value) {
    case '0':
      return 'green';
    case '1':
      return 'blue';
    case '2':
      return 'yellow';
    case '3':
      return 'grey';
    case '4':
      return 'red';
    case '5':
      return 'maroon';
    case '6':
      return 'pink';
  }
}
