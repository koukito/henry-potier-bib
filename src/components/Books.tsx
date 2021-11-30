import React from 'react';
import { BookCard } from './BookCard';
import { Book } from '../models/books.models';
import { Grid } from 'theme-ui';
import { useBookStore } from '../Context/BookStoreContext';
export interface BooksPageContextModel {
  pageContext: {
    booksList: Array<Book>;
    currency: string;
  };
}

const Books = ({ pageContext }: BooksPageContextModel) => {
  const { booksList, currency } = pageContext;
  const { dispatch, state } = useBookStore();
  return (
    <article>
      <Grid gap={4} columns={[4, null, 4]}>
        {booksList
          .filter((book) =>
            book.title.toLowerCase().includes(state.searchTerm.toLowerCase())
          )
          .map((book: Book) => {
            return (
              <BookCard
                key={book.isbn}
                book={book}
                currency={currency}
                action={() => dispatch({ type: 'ADD_BOOK_CART', value: book })}
                actionString={'Add to cart'}
              />
            );
          })}
      </Grid>
    </article>
  );
};

export default Books;
