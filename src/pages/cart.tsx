import { Box } from '@theme-ui/components';
import React from 'react';
import { BookCard } from '../components/BookCard';
import { useBookStore } from '../Context/BookStoreContext';

const Cart = () => {
  const {
    state: { cartItems },
    dispatch
  } = useBookStore();

  return (
    <Box padding={50}>
      {cartItems.length > 0 ? (
        cartItems.map((book) => (
          <BookCard
            key={book.isbn}
            book={book}
            actionString={'Remove from cart'}
            action={() =>
              dispatch({ type: 'REMOVE_BOOK_CART', value: book.isbn })
            }
            currency={'€'}
          />
        ))
      ) : (
        <Box>Your cart is Empty</Box>
      )}
    </Box>
  );
};
export default Cart;
