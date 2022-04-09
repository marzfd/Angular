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
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi',
      price: 150,
      quantity: 5,
      image: 'assets/images/sweater.jpg',
    },
    {
      id: 2,
      name: 'Cardigan',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi',
      price: 200,
      quantity: 1,
      image: 'assets/images/cardigan.jpg',
    },
    {
      id: 3,
      name: 'Blanket',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi',
      price: 250,
      quantity: 3,
      image: 'assets/images/blanket.jpg',
    },
    {
      id: 4,
      name: 'Gloves',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi',
      price: 50,
      quantity: 2,
      image: 'assets/images/gloves.jpg',
    },
    {
      id: 5,
      name: 'Pullover',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi',
      price: 200,
      quantity: 1,
      image: 'assets/images/pullover.jpg',
    },
    {
      id: 6,
      name: 'Cap',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi',
      price: 50,
      quantity: 5,
      image: 'assets/images/cap.jpg',
    },
    {
      id: 7,
      name: 'Shawl',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi',
      price: 100,
      quantity: 3,
      image: 'assets/images/shawl.jpg',
    },
    {
      id: 8,
      name: 'Set',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi',
      price: 300,
      quantity: 8,
      image: 'assets/images/set.jpeg',
    },
    {
      id: 9,
      name: 'Pants',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi',
      price: 100,
      quantity: 4,
      image: 'assets/images/pants.jpg',
    },
  ];
}
