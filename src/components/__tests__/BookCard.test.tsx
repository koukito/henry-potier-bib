import React from 'react';
import renderer from 'react-test-renderer';

import { BookCard, BookCardProps } from '../BookCard';

const mockBookData = {
  isbn: 'aaa',
  title: 'MockTitlte',
  synopsis: [],
  price: 11,
  cover: ''
};
describe('BookCard', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <BookCard
          book={mockBookData}
          action={() => {}}
          actionString={'mock action string'}
          currency={'€'}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
