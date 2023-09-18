import assets from "../../assets";
import {v4} from "uuid";

const images = [
  {
    uuid:v4(),
    id: 1,
    image1: assets.images.hotelImage.hotel1,
    image2: assets.images.hotelImage.hotel2,
    image3: assets.images.hotelImage.hotel3,
    price: getRandomPrice(),
  },
  {
    uuid:v4(),    
    id: 2,
    image1: assets.images.hotelImage.hotel4,
    image2: assets.images.hotelImage.hotel5,
    image3: assets.images.hotelImage.hotel6,
    price: getRandomPrice(),
  },
  {
    uuid:v4(),
    id: 3,
    image1: assets.images.hotelImage.hotel7,
    image2: assets.images.hotelImage.hotel8,
    image3: assets.images.hotelImage.hotel9,
    price: getRandomPrice(),
  },
  {
    uuid:v4(),
    id: 4,
    image1: assets.images.hotelImage.hotel10,
    image2: assets.images.hotelImage.hotel12,
    image3: assets.images.hotelImage.hotel13,
    price: getRandomPrice(),
  },
  {
    uuid:v4(),
    id: 5,
    image1: assets.images.hotelImage.hotel14,
    image2: assets.images.hotelImage.hotel15,
    image3: assets.images.hotelImage.hotel16,
    price: getRandomPrice(),
  },
  {
    uuid:v4(),
    id: 6,
    image1: assets.images.hotelImage.hotel17,
    image2: assets.images.hotelImage.hotel1,
    image3: assets.images.hotelImage.hotel2,
    price: getRandomPrice(),
  },
  {
    uuid:v4(),
    id: 7,
    image1: assets.images.hotelImage.hotel3,
    image2: assets.images.hotelImage.hotel5,
    image3: assets.images.hotelImage.hotel4,
    price: getRandomPrice(),
  },
  {
    uuid:v4(),
    id: 8,
    image1: assets.images.hotelImage.hotel10,
    image2: assets.images.hotelImage.hotel1,
    image3: assets.images.hotelImage.hotel13,
    price: getRandomPrice(),
  },
  {
    uuid:v4(),
    id: 9,
    image1: assets.images.hotelImage.hotel4,
    image2: assets.images.hotelImage.hotel9,
    image3: assets.images.hotelImage.hotel17,
    price: getRandomPrice(),
  },
  {
    uuid:v4(),
    id: 10,
    image1: assets.images.hotelImage.hotel6,
    image2: assets.images.hotelImage.hotel12,
    image3: assets.images.hotelImage.hotel14,
    price: getRandomPrice(),
  },
  {
    uuid:v4(),
    id: 11,
    image1: assets.images.hotelImage.hotel8,
    image2: assets.images.hotelImage.hotel7,
    image3: assets.images.hotelImage.hotel10,
    price: getRandomPrice(),
  },
  {
    uuid:v4(),
    id: 12,
    image1: assets.images.hotelImage.hotel15,
    image2: assets.images.hotelImage.hotel1,
    image3: assets.images.hotelImage.hotel11,
    price: getRandomPrice(),
  },
  {
    uuid:v4(),
    id: 13,
    image1: assets.images.hotelImage.hotel1,
    image2: assets.images.hotelImage.hotel2,
    image3: assets.images.hotelImage.hotel12,
    price: getRandomPrice(),
  },
  {
    uuid:v4(),
    id: 14,
    image1: assets.images.hotelImage.hotel16,
    image2: assets.images.hotelImage.hotel1,
    image3: assets.images.hotelImage.hotel11,
    price: getRandomPrice(),
  },
  {
    uuid:v4(),
    id: 15,
    image1: assets.images.hotelImage.hotel9,
    image2: assets.images.hotelImage.hotel8,
    image3: assets.images.hotelImage.hotel13,
    price: getRandomPrice(),
  },
  {
    uuid:v4(),
    id: 16,
    image1: assets.images.hotelImage.hotel14,
    image2: assets.images.hotelImage.hotel11,
    image3: assets.images.hotelImage.hotel10,
    price: getRandomPrice(),
  },
];

function getRandomPrice() {
  return (Math.random() * 100).toFixed(2); // Random image3 between 0.00 and 100.00
}

export default images;
