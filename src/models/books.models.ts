export interface Book {
  isbn: string;
  title: string;
  price: number;
  cover: string;
  synopsis: Array<string>;
  quantity?: number;
}

export interface Offer {
  type: OfferType;
  value: number;
  sliceValue?: number;
}

export type OfferType = 'percentage' | 'minus' | 'slice';
