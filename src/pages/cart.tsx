import { Box, Text } from '@theme-ui/components';
import React from 'react';
import { BookCard } from '../components/BookCard';
import { useBookStore } from '../Context/BookStoreContext';
import useCommercialOffers from '../hooks/useCommercialOffers';
import Price from '../components/Price';
const Cart = () => {
  const {
    state: { cartItems },
    dispatch
  } = useBookStore();
  const isbns = cartItems.map((book) => book.isbn);
  const { response, loading, error } = useCommercialOffers(isbns);
  return (
    <Box padding={50}>
      {!loading && !error && <Price offers={response} cartItems={cartItems} />}
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
