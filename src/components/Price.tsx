import React from 'react';
import calculateDiscountPrice from '../helpers/calculateDiscountPrice';
import { Book, Offer } from '../models/books.models';
import { Row, Col } from 'react-bootstrap';
import './Price.scss';
export interface PriceProps {
  offers: Array<Offer>;
  cartItems: Array<Book>;
}
const Price = ({ offers, cartItems }: PriceProps) => {
  const totalPriceBeforeDiscount = cartItems
    .map((book) => book.price)
    .reduce((prev, current) => {
      return prev + current;
    }, 0);
  const pricesAfterDiscount = offers
    .map((offer: Offer) => ({
      type: offer.type,
      priceAfterDiscount: calculateDiscountPrice(
        offer,
        totalPriceBeforeDiscount
      )
    }))
    .sort((a, b) => (a.priceAfterDiscount > b.priceAfterDiscount ? 1 : -1));
  const priceAfterDiscount = pricesAfterDiscount[0].priceAfterDiscount;

  return (
    <Row>
      <Col sm={10}></Col>
      <Col sm={2}>
        <span className="price-string">
          Total price
          <span className="price__before-discount">
            {totalPriceBeforeDiscount}€
          </span>
          {priceAfterDiscount}€
        </span>
      </Col>
    </Row>
  );
};
export default Price;
