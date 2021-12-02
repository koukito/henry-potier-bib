import React from 'react';
import renderer from 'react-test-renderer';
import { Offer } from '../../models/books.models';
import Price from '../Price';

const mockBookData1 = {
  isbn: 'mock1',
  title: 'MockTitlte',
  synopsis: [],
  price: 35,
  cover: '',
  quantity: 1
};
const mockBookData2 = {
  isbn: 'mock2',
  title: 'MockTitlte',
  synopsis: [],
  price: 30,
  cover: '',
  quantity: 1
};
const mockCartItems = [mockBookData1, mockBookData2];
const mockOffersData: Array<Offer> = [
  { type: 'percentage', value: 5 },
  { type: 'minus', value: 15 },
  { type: 'slice', sliceValue: 100, value: 12 }
];

describe('Price', () => {
  it('renders correctly the right prices', () => {
    const tree = renderer
      .create(<Price offers={mockOffersData} cartItems={mockCartItems} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
