import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }

  getBooks(){
    return [
      {
        name: 'Clean Code',
        author: 'Robert C Martin',
        image: 'https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        amount: 700,
      },
      {
        name: 'The Pragmatic Programmer',
        author: 'David Thomas',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51W1sBPO7tL._SX380_BO1,204,203,200_.jpg',
        amount: 800,
      },
      ];
  };
}
