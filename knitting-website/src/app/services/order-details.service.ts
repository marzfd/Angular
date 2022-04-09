import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderDetailsService {
  constructor() {}

  // This is the data that will be used to display the clothes in the home page.
  clothesDetails = [
    {
      id: 1,
      name: 'Sweater',
      price: 150,
      quantity: 1,
      image: 'assets/images/sweater.jpg',
    },
    {
      id: 2,
      name: 'Cardigan',
      price: 200,
      quantity: 1,
      image: 'assets/images/cardigan.jpg',
    },
    {
      id: 3,
      name: 'Blanket',
      price: 250,
      quantity: 1,
      image: 'assets/images/blanket.jpg',
    },
    {
      id: 4,
      name: 'Gloves',
      price: 50,
      quantity: 1,
      image: 'assets/images/gloves.jpg',
    },
    {
      id: 5,
      name: 'Pullover',
      price: 200,
      quantity: 1,
      image: 'assets/images/pullover.jpg',
    },
    {
      id: 6,
      name: 'Cap',
      price: 50,
      quantity: 1,
      image: 'assets/images/cap.jpg',
    },
    {
      id: 7,
      name: 'Shawl',
      price: 100,
      quantity: 1,
      image: 'assets/images/shawl.jpg',
    },
    {
      id: 8,
      name: 'Set',
      price: 300,
      quantity: 1,
      image: 'assets/images/set.jpeg',
    },
  ];
}
