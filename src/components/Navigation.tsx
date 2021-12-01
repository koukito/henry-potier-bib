import { Link } from 'gatsby';
import React from 'react';
import { useBookStore } from '../Context/BookStoreContext';
import { Navbar, Container, Nav, Form, FormControl } from 'react-bootstrap';
import './Navigation.scss';

export const Navigation = () => {
  const { state, dispatch } = useBookStore();
  const nbrOfCartItems = state.cartItems?.length ?? 0;

  const handleChangeInput = (event: any) => {
    dispatch({ type: 'SET_SEARCH_TERM', value: event.target.value });
  };
  return (
    <Navbar className="navigation__container" bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Books store</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Item>
              <Link className="nav-link" activeClassName="active" to="/books">
                Books
              </Link>
            </Nav.Item>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleChangeInput}
            />
          </Form>
          <Nav.Item>
            <Link className="nav-link" activeClassName="active" to="/cart">
              {nbrOfCartItems}
              <img src="https://img.icons8.com/material-outlined/24/000000/fast-cart.png" />
            </Link>
          </Nav.Item>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
