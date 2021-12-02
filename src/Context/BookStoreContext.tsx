import React, { useContext, useReducer, useEffect } from 'react';
import { Book } from '../models/books.models';
import { BooksStoreState, Dispatch, Action } from '../models/store.models';
import { localStorageMock } from './LocalStorageMock';

const LOCAL_STORAGE_KEY = 'books-lib';
const localStorage =
  typeof window !== 'undefined' ? window.localStorage : localStorageMock;

const BookStoreContext = React.createContext<
  { state: BooksStoreState; dispatch: Dispatch } | undefined
>(undefined);

const initalState: BooksStoreState = {
  cartItems: [],
  searchTerm: ''
};
function bookStoreReducer(state: BooksStoreState, action: Action) {
  switch (action.type) {
    case 'ADD_BOOK_CART': {
      let found = state.cartItems.find(
        (elem) => elem.isbn === action.value.isbn
      )
        ? true
        : false;

      const cartItems = found
        ? [
            ...state.cartItems.map((elem) => {
              if (elem.isbn === action.value.isbn) {
                return { ...elem, quantity: elem.quantity + 1 };
              }
              return elem;
            })
          ]
        : [...state.cartItems, action.value];
      return {
        ...state,
        cartItems: cartItems
      };
    }
    case 'REMOVE_BOOK_CART': {
      return {
        ...state,
        cartItems: [
          ...state.cartItems.filter((book: Book) => book.isbn !== action.value)
        ]
      };
    }
    case 'SET_SEARCH_TERM': {
      return {
        ...state,
        searchTerm: action.value
      };
    }
    case 'CLEAR_CART': {
      return {
        ...state,
        cartItems: []
      };
    }
    default: {
      throw new Error(`Unhandled action: ${action}`);
    }
  }
}

const BookStoreProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(bookStoreReducer, initalState, () => {
    const localStorageData = localStorage.getItem(LOCAL_STORAGE_KEY);
    return localStorageData ? JSON.parse(localStorageData) : initalState;
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const value = { state, dispatch };
  return (
    <BookStoreContext.Provider value={value}>
      {children}
    </BookStoreContext.Provider>
  );
};

function useBookStore() {
  const context = React.useContext(BookStoreContext);
  if (context === undefined) {
    throw new Error('useBookStore must be used within a BookStoreProvider');
  }
  return context;
}

export { BookStoreProvider, useBookStore };
