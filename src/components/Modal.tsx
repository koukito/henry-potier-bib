import React from 'react';
import { Link } from 'gatsby';
import { Modal, Button } from 'react-bootstrap';
import { BookCard } from './BookCard';
import { Book } from '../models/books.models';

export interface ModalDialogProps {
  show: boolean;
  handleClose: () => void;
  book: Book;
}

const ModalDialog = ({ show, handleClose, book }: ModalDialogProps) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book Added to cart successfully</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BookCard
            className="book-card"
            key={book.isbn}
            book={book}
            currency={'€'}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Continue shopping
          </Button>
          <Link className="btn btn-primary" activeClassName="active" to="/cart">
            Go to cart
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalDialog;
