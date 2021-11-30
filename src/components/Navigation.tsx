import { Link } from 'gatsby';
import React from 'react';
import { Flex, Grid, Text, Box, Input } from 'theme-ui';
import { useBookStore } from '../Context/BookStoreContext';

export const Navigation = () => {
  const { state, dispatch } = useBookStore();
  const nbrOfCartItems = state.cartItems?.length ?? 0;

  //const [searchTerm, setSearchTerm] = React.useState('');
  const handleChangeInput = (event: any) => {
    dispatch({ type: 'SET_SEARCH_TERM', value: event.target.value });
  };
  return (
    <Flex as="nav" sx={{ justifyContent: 'space-between' }}>
      <Flex>
        <Grid columns={2}>
          <Link to="/books">Books</Link>
          <Input onChange={handleChangeInput} value={state.searchTerm} />
        </Grid>
      </Flex>
      <Box sx={{ display: 'flex', placeItems: 'center' }}>
        <Link to="/cart">
          <Flex>
            <Text marginRight={'s'}>{nbrOfCartItems}</Text>
            <img src="https://img.icons8.com/material-outlined/24/000000/fast-cart.png" />
          </Flex>
        </Link>
      </Box>
    </Flex>
  );
};
