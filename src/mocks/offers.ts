import { Offers } from '../types/offers';
import { HousingType } from '../const';

export const offers: Offers = [
  {
    id: '1',
    title: 'Beautiful & luxurious apartment at great location',
    type: HousingType.Apartment,
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 10,
      },
    },
    location: {
      latitude: 52.38333,
      longitude: 4.9,
      zoom: 10,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4,
    previewImage: 'img/apartment-01.jpg',
  },
  {
    id: '2',
    title: 'Wood and stone place',
    type: HousingType.Room,
    price: 80,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 10,
      },
    },
    location: {
      latitude: 52.38333,
      longitude: 4.9,
      zoom: 10,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4,
    previewImage: 'img/room.jpg',
  },
  {
    id: '3',
    title: 'Canal View Prinsengracht',
    type: HousingType.Apartment,
    price: 132,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 10,
      },
    },
    location: {
      latitude: 52.38333,
      longitude: 4.9,
      zoom: 10,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'img/apartment-02.jpg',
  },
  {
    id: '4',
    title: 'Nice, cozy, warm big bed apartment',
    type: HousingType.Apartment,
    price: 180,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 10,
      },
    },
    location: {
      latitude: 52.38333,
      longitude: 4.9,
      zoom: 10,
    },
    isFavorite: false,
    isPremium: true,
    rating: 5,
    previewImage: 'img/apartment-03.jpg',
  },
  {
    id: '5',
    title: 'Wood and stone place',
    type: HousingType.Room,
    price: 80,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 10,
      },
    },
    location: {
      latitude: 52.38333,
      longitude: 4.9,
      zoom: 10,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4,
    previewImage: 'img/room.jpg',
  },
];