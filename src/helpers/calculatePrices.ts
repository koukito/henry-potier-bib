import { Offer } from '../models/books.models';

const calculateDiscountPrice = (offer: Offer, priceBeforeDiscount: number) => {
  switch (offer.type) {
    case 'percentage':
      return (priceBeforeDiscount * (100 - offer.value)) / 100;
    case 'minus':
      return priceBeforeDiscount - offer.value;
    case 'slice':
      return (
        priceBeforeDiscount -
        Math.floor(priceBeforeDiscount / offer.sliceValue) * offer.value
      );
    default:
      return priceBeforeDiscount;
  }
};
const calculateQuantityPrice = (unitPrice: number, quantity: number) => {
  return unitPrice * quantity;
};
export { calculateDiscountPrice, calculateQuantityPrice };
