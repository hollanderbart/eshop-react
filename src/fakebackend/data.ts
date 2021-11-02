import faker from 'faker';
import _ from 'lodash';

export type Product = {
  id: number;
  isAdvert: boolean;
  name: string;
  price: number;
  brand: string;
  image: string;
  color: string;
  size: any;
  weight: any;
  shortDescription: string;
  modelNum: number;
  delivery: string;
  description: string;
};

const brandAndImage = _.flatten(
  _.times(20, (i) => {
    return ['rapala', 'heddon', 'rebel', 'cottoncordel', 'mepps'].map(
      (brand, j) => {
        return { brand, image: `${brand}${i + 1}.jpg` };
      },
    );
  }),
);

type ColorMap = {
  brand: string;
  color: string;
};

const imageColorMap: ColorMap[] = [
  { brand: 'rapala1', color: 'white' },
  { brand: 'rapala2', color: 'yellow' },
  { brand: 'rapala3', color: 'yellow' },
  { brand: 'rapala4', color: 'yellow' },
  { brand: 'rapala5', color: 'red' },
  { brand: 'rapala6', color: 'yellow' },
  { brand: 'rapala7', color: 'green' },
  { brand: 'rapala8', color: 'blue' },
  { brand: 'rapala9', color: 'brown' },
  { brand: 'rapala10', color: 'blue' },
  { brand: 'rapala11', color: 'blue' },
  { brand: 'rapala12', color: 'green' },
  { brand: 'rapala13', color: 'green' },
  { brand: 'rapala14', color: 'red' },
  { brand: 'rapala15', color: 'green' },
  { brand: 'rapala16', color: 'green' },
  { brand: 'rapala17', color: 'green' },
  { brand: 'rapala18', color: 'white' },
  { brand: 'rapala19', color: 'green' },
  { brand: 'rapala20', color: 'green' },
  { brand: 'heddon1', color: 'green' },
  { brand: 'heddon2', color: 'white' },
  { brand: 'heddon3', color: 'white' },
  { brand: 'heddon4', color: 'white' },
  { brand: 'heddon5', color: 'yellow' },
  { brand: 'heddon6', color: 'red' },
  { brand: 'heddon7', color: 'white' },
  { brand: 'heddon8', color: 'red' },
  { brand: 'heddon9', color: 'black' },
  { brand: 'heddon10', color: 'red' },
  { brand: 'heddon11', color: 'yellow' },
  { brand: 'heddon12', color: 'white' },
  { brand: 'heddon13', color: 'white' },
  { brand: 'heddon14', color: 'red' },
  { brand: 'heddon15', color: 'white' },
  { brand: 'heddon16', color: 'brown' },
  { brand: 'heddon17', color: 'black' },
  { brand: 'heddon18', color: 'yellow' },
  { brand: 'heddon19', color: 'white' },
  { brand: 'heddon20', color: 'green' },
  { brand: 'cottoncordel1', color: 'white' },
  { brand: 'cottoncordel2', color: 'green' },
  { brand: 'cottoncordel3', color: 'yellow' },
  { brand: 'cottoncordel4', color: 'white' },
  { brand: 'cottoncordel5', color: 'green' },
  { brand: 'cottoncordel6', color: 'white' },
  { brand: 'cottoncordel7', color: 'blue' },
  { brand: 'cottoncordel8', color: 'white' },
  { brand: 'cottoncordel9', color: 'yellow' },
  { brand: 'cottoncordel10', color: 'white' },
  { brand: 'cottoncordel11', color: 'green' },
  { brand: 'cottoncordel12', color: 'white' },
  { brand: 'cottoncordel13', color: 'green' },
  { brand: 'cottoncordel14', color: 'green' },
  { brand: 'cottoncordel15', color: 'white' },
  { brand: 'cottoncordel16', color: 'yellow' },
  { brand: 'cottoncordel17', color: 'red' },
  { brand: 'cottoncordel18', color: 'red' },
  { brand: 'cottoncordel19', color: 'white' },
  { brand: 'cottoncordel20', color: 'yellow' },
  { brand: 'rebel1', color: 'red' },
  { brand: 'rebel2', color: 'green' },
  { brand: 'rebel3', color: 'red' },
  { brand: 'rebel4', color: 'white' },
  { brand: 'rebel5', color: 'b;ack' },
  { brand: 'rebel6', color: 'yellow' },
  { brand: 'rebel7', color: 'yellow' },
  { brand: 'rebel8', color: 'white' },
  { brand: 'rebel9', color: 'yellow' },
  { brand: 'rebel10', color: 'yellow' },
  { brand: 'rebel11', color: 'red' },
  { brand: 'rebel12', color: 'white' },
  { brand: 'rebel13', color: 'green' },
  { brand: 'rebel14', color: 'green' },
  { brand: 'rebel15', color: 'green' },
  { brand: 'rebel16', color: 'red' },
  { brand: 'rebel17', color: 'yellow' },
  { brand: 'rebel18', color: 'blue' },
  { brand: 'rebel19', color: 'black' },
  { brand: 'rebel20', color: 'blue' },
  { brand: 'mepps1', color: 'red' },
  { brand: 'mepps2', color: 'white' },
  { brand: 'mepps3', color: 'black' },
  { brand: 'mepps4', color: 'red' },
  { brand: 'mepps5', color: 'black' },
  { brand: 'mepps6', color: 'white' },
  { brand: 'mepps7', color: 'white' },
  { brand: 'mepps8', color: 'yellow' },
  { brand: 'mepps9', color: 'blue' },
  { brand: 'mepps10', color: 'white' },
  { brand: 'mepps11', color: 'yellow' },
  { brand: 'mepps12', color: 'red' },
  { brand: 'mepps13', color: 'red' },
  { brand: 'mepps14', color: 'white' },
  { brand: 'mepps15', color: 'b;ack' },
  { brand: 'mepps16', color: 'black' },
  { brand: 'mepps17', color: 'red' },
  { brand: 'mepps18', color: 'black' },
  { brand: 'mepps19', color: 'green' },
  { brand: 'mepps20', color: 'red' },
];

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getProducts = (): Product[] => {
  const products = _.times(100, (index) => {
    const color = imageColorMap.find(
      (i) => i.brand === brandAndImage[index].image.replace('.jpg', ''),
    )!.color;

    return {
      id: index,
      isAdvert: false,
      name: faker.commerce.productName(),
      price: parseFloat(faker.commerce.price()),
      brand: brandAndImage[index].brand,
      image: brandAndImage[index].image,
      color: color,
      size: getRandomInt(3, 20),
      weight: getRandomInt(4, 40),
      shortDescription: faker.lorem.words(),
      modelNum: faker.random.number(),
      delivery: [
        faker.address.country(),
        faker.address.country(),
        faker.address.country(),
      ].join(', '),
      description: faker.lorem.paragraph().split('.', 2).join('.') + '.',
    };
  }).sort((a, b) => 0.5 - Math.random());
  return products;
};

export const getProductsData = (): Product[] => {
  let products = getProducts();
  return products;
};

export const getProductData = (id: number): Product | undefined => {
  let products = getProducts();
  return products.find((product) => product.id === id);
};
