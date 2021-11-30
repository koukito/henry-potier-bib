import React, { useContext, useReducer, useEffect } from 'react';
import { Book } from '../models/books.models';
import { BooksStoreState, Dispatch, Action } from '../models/store.models';

const LOCAL_STORAGE_KEY = 'books-lib';

const BookStoreContext = React.createContext<
  { state: BooksStoreState; dispatch: Dispatch } | undefined
>(undefined);

const initalState: BooksStoreState = {
  cartItems: [],
  searchTerm: ''
};
function bookStoreReducer(state: BooksStoreState, action: Action | any) {
  switch (action.type) {
    case 'ADD_BOOK_CART': {
      return { ...state, cartItems: [...state.cartItems, action.value] };
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
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
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
