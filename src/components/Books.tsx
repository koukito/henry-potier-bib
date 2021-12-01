import React from 'react';
import { BookCard } from './BookCard';
import { Book } from '../models/books.models';
import { useBookStore } from '../Context/BookStoreContext';

import './Books.scss';
export interface BooksPageContextModel {
  pageContext: {
    booksList: Array<Book>;
    currency: string;
  };
}

const Books = ({ pageContext }: BooksPageContextModel) => {
  // Here we retrieve the booksList from the server side data(pageContext passed from gatsby-node), we can call a hook here
  // to retrieve the bookslist again in case this data is changing frequently
  const { booksList, currency } = pageContext;
  const { dispatch, state } = useBookStore();
  return (
    <div>
      <h1>Books</h1>
      <article className="books__container">
        {booksList
          .filter((book) =>
            book.title.toLowerCase().includes(state.searchTerm.toLowerCase())
          )
          .map((book: Book) => {
            return (
              <BookCard
                className="book-card"
                key={book.isbn}
                book={book}
                currency={currency}
                action={() => dispatch({ type: 'ADD_BOOK_CART', value: book })}
                actionString={'Add to cart'}
              />
            );
          })}
      </article>
    </div>
  );
};

export default Books;
