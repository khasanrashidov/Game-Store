export interface UpdateGameModel {
  id: string;
  key: string;
  name: string;
  description?: string;
  price: number;
  unitInStock: number;
  discount: number;
  genres: Array<string>;
  platforms: Array<string>;
  publisherId: string;
}
