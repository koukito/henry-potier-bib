import React from 'react';
import { Card, Image, Text, Flex, Button } from 'theme-ui';
import { Book } from '../models/books.models';

interface BookCardProps {
  book: Book;
  currency: string;
  action: () => void;
  actionString: string;
}
const BookCard = ({ book, currency, action, actionString }: BookCardProps) => {
  return (
    <Card
      sx={{
        maxWidth: 256
      }}
    >
      <Image src={book.cover}></Image>
      <Flex
        sx={{
          flexDirection: 'column'
        }}
      >
        <Text
          sx={{
            fontSize: 4,
            fontWeight: 'bold'
          }}
        >
          {book.title}
        </Text>
        <Text
          sx={{
            fontSize: 3
          }}
        >
          {book.price}
          {currency}
        </Text>
        <Button mr={2} color="blue" onClick={action}>
          {actionString}
        </Button>
      </Flex>
    </Card>
  );
};
export { BookCard };
