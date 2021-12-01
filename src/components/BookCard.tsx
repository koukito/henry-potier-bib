import React, { useState } from 'react';

import { Button, Card } from 'react-bootstrap';

import { Book } from '../models/books.models';
import ModalDialog from './Modal';
interface BookCardProps {
  book: Book;
  currency: string;
  action?: () => void;
  actionString?: string;
  className?: string;
}
const BookCard = ({
  book,
  currency,
  action,
  actionString,
  className
}: BookCardProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const onClick = () => {
    action();
    handleShow();
  };
  return (
    <Card style={{ width: '18rem' }} className={className}>
      <ModalDialog show={showModal} handleClose={handleClose} book={book} />

      <Card.Img variant="top" src={book.cover} />
      <Card.Body>
        <Card.Title> {book.title}</Card.Title>
        <Card.Text>
          {book.price}
          {currency}
        </Card.Text>
        {actionString && (
          <Button variant="primary" onClick={onClick}>
            {actionString}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};
export { BookCard };
