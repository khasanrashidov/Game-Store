export interface GameModel {
  id: string;
  key: string;
  name: string;
  description?: string;
  price: number;
  unitInStock: number;
  discount: number;
}
