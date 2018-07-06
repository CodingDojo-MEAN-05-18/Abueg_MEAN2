export class Book {
  _id: string;
  title: string;
  author: string;
  pages: number;
  year: number;
  publisher: string;

  // in the video from 6/26 Jason got rid of createId and had the API generate the Id
  // constructor(createId = true) {
  //   if (createId) {
  //     this.id = Math.round(Math.random() * 1000);
  //   }
  // }
  constructor() {}
}
