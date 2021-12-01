import React from 'react';

import { Button, Card } from 'react-bootstrap';

import { Book } from '../models/books.models';

interface BookCardProps {
  book: Book;
  currency: string;
  action: () => void;
  actionString: string;
  className: string;
}
const BookCard = ({
  book,
  currency,
  action,
  actionString,
  className
}: BookCardProps) => {
  return (
    <Card style={{ width: '18rem' }} className={className}>
      <Card.Img variant="top" src={book.cover} />
      <Card.Body>
        <Card.Title> {book.title}</Card.Title>
        <Card.Text>
          {book.price}
          {currency}
        </Card.Text>
        <Button variant="primary" onClick={action}>
          {actionString}
        </Button>
      </Card.Body>
    </Card>
  );
};
export { BookCard };
