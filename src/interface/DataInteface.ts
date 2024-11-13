export interface ICard {
  name: string;
  image: string;
  status: string;
  species: string;

}

export interface IData extends ICard {
  id: number;
  url: string;
}