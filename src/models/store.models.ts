import { Book } from './books.models';

export type Action =
  | { type: 'ADD_BOOK_CART'; value: Book }
  | { type: 'REMOVE_BOOK_CART'; value: string }
  | { type: 'SET_SEARCH_TERM'; value: string };

export type Dispatch = (action: Action) => void;

export interface BooksStoreState {
  cartItems: Array<Book>;
  searchTerm: string;
}
