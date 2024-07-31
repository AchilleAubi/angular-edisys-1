export class Product {
  id: number = 0;
  title: string = "";
  price: number = 0;
  category: string = "";
  description: string = "";
  image: string = "";
  rating: {
    count: number;
    rate: number;
  } = {
    count: 0,
    rate: 0,
  };
}
