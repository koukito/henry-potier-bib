import { Box, Text, Flex } from '@theme-ui/components';
import React from 'react';
import calculateDiscountPrice from '../helpers/calculateDiscountPrice';
import { Book, Offer } from '../models/books.models';

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
    <Box>
      <Text marginRight={10}>The Total price is</Text>
      <Text marginRight={10} sx={{ textDecoration: 'line-through' }}>
        {totalPriceBeforeDiscount}
      </Text>
      <Text>{priceAfterDiscount}</Text>
    </Box>
  );
};
export default Price;
