import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { calculateQuantityPrice } from '../helpers/calculatePrices';
import { Book } from '../models/books.models';
import './CartItem.scss';

interface CartItemProps {
  book: Book;
  currency: string;
  action: () => void;
  actionString: string;
  className?: string;
}
const CartItem = ({ book, currency, action, actionString }: CartItemProps) => {
  return (
    <Container className="cart-item__container">
      <Row>
        <Col sm={3}>
          <Card.Img
            variant="top"
            src={book.cover}
            height={'300px'}
            width="200px"
          />
        </Col>
        <Col sm={3}>
          <Row>{book.title}</Row>
          <Row>
            <Col>
              <Button variant="secondary" size="sm" onClick={action}>
                {actionString}
              </Button>
            </Col>
          </Row>
        </Col>
        <Col sm={2}>
          {book.price}
          {currency}
        </Col>
        <Col sm={2}>{book.quantity}</Col>
        <Col sm={2}>{calculateQuantityPrice(book.price, book.quantity)}€</Col>
      </Row>
    </Container>
  );
};
export default CartItem;
