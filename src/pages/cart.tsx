import Button from 'react-bootstrap/Button';
import { Container, Alert, Spinner, Row, Col } from 'react-bootstrap';

import React from 'react';
import { BookCard } from '../components/BookCard';
import { useBookStore } from '../Context/BookStoreContext';
import useCommercialOffers from '../hooks/useCommercialOffers';
import Price from '../components/Price';
import CartItem from '../components/CartItem';
import './cart.scss';

const Cart = () => {
  const {
    state: { cartItems },
    dispatch
  } = useBookStore();
  const isbns = cartItems.map((book) => book.isbn);
  const { response, loading, error } = useCommercialOffers(isbns);

  const CartItemsHeader = () => {
    return (
      <Row className="cart-items-header">
        <Col sm={8}>Product</Col>
        <Col sm={2}>Price</Col>
        <Col sm={2}>Total</Col>
      </Row>
    );
  };

  const EmptyCart = () => {
    return <Row>Your cart is empty</Row>;
  };

  return (
    <Container className="cart__container">
      <Row>
        <h1>Your cart</h1>
      </Row>
      {cartItems.length < 1 ? (
        <EmptyCart />
      ) : (
        <Container>
          {error && <Alert variant="danger">Somethign wrong happened</Alert>}
          {loading && <Spinner animation="border">loading</Spinner>}
          <CartItemsHeader />
          {cartItems.map((book) => (
            <CartItem
              key={book.isbn}
              book={book}
              actionString={'Remove from cart'}
              action={() =>
                dispatch({ type: 'REMOVE_BOOK_CART', value: book.isbn })
              }
              currency={'€'}
            />
          ))}
          <Row>
            <Col sm={12}>
              {response && <Price offers={response} cartItems={cartItems} />}
            </Col>
          </Row>
          <Row>
            <Col sm={10}></Col>

            <Col sm={2}>
              <Button onClick={() => dispatch({ type: 'CLEAR_CART' })}>
                Clear cart
              </Button>
            </Col>
          </Row>
        </Container>
      )}
    </Container>
  );
};
export default Cart;
