// Assuming you have 10 images located in the image1/assets directory of your React app
import image1 from '../../assets/h1.jpeg';
import image2 from '../../assets/h2.jpeg';
import image3 from '../../assets/h3.jpeg';
import image4 from '../../assets/h4.jpeg';
import image5 from '../../assets/h5.jpg';
import image6 from '../../assets/h6.jpg';
import image7 from '../../assets/h7.webp';
import image8 from '../../assets/h8.jpeg';
import image9 from '../../assets/h9.jpg';
import image10 from '../../assets/h10.webp';
import image11 from '../../assets/h11.jpeg';
import image12 from '../../assets/hotels.avif';
import i1 from '../../assets/i1.jpg';
import i2 from '../../assets/i2.jpg';
import i3 from '../../assets/i3.jpg';
import i4 from '../../assets/i4.jpg';

const images = [
  {
    id: 1,
    image1: image1,
    image2: image3,
    image3: i4,
    price: getRandomPrice(),
  },
  {
    id: 2,
    image1: i1,
    image2: image11,
    image3: image2,
    price: getRandomPrice(),
  },
  {
    id: 3,
    image1: image3,
    image2: image8,
    image3: i4,
    price: getRandomPrice(),
  },
  {
    id: 4,
    image1: image4,
    image2: image3,
    image3: i3,
    price: getRandomPrice(),
  },
  {
    id: 5,
    image1: image7,
    image2: image5,
    image3: image1,
    price: getRandomPrice(),
  },
  {
    id: 6,
    image1: image6,
    image2: image10,
    image3: i3,
    price: getRandomPrice(),
  },
  {
    id: 7,
    image1: image7,
    image2: i1,
    image3: i4,
    price: getRandomPrice(),
  },
  {
    id: 8,
    image1: image8,
    image2: image3,
    image3: image2,
    price: getRandomPrice(),
  },
  {
    id: 9,
    image1: image9,
    image2: image1,
    image3: i3,
    price: getRandomPrice(),
  },
  {
    id: 10,
    image1: image10,
    image2: i4,
    image3: image2,
    price: getRandomPrice(),
  },
  {
    id: 11,
    image1: image11,
    image2: image4,
    image3: i3,
    price: getRandomPrice(),
  },
  {
    id: 12,
    image1: image12,
    image2: image1,
    image3: i1,
    price: getRandomPrice(),
  },
  {
    id: 13,
    image1: i1,
    image2: image12,
    image3: image3,
    price: getRandomPrice(),
  },
  {
    id: 14,
    image1: i2,
    image2: image3,
    image3: image11,
    price: getRandomPrice(),
  },
  {
    id: 15,
    image1: i3,
    image2: image4,
    image3: image7,
    price: getRandomPrice(),
  },
  {
    id: 16,
    image1: i4,
    image2: image1,
    image3: i1,
    price: getRandomPrice(),
  },
];

function getRandomPrice() {
  return (Math.random() * 100).toFixed(2); // Random image3 between 0.00 and 100.00
}

export default images;
