export interface CreateGameModel {
  name: string;
  key: string;
  description?: string;
  price: number;
  unitInStock: number;
  discount: number;
  genres: Array<string>;
  platforms: Array<string>;
  publisherId: string;
}
