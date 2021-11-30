import React from 'react';
import { Layout } from './src/components/Layout';
import { BookStoreProvider } from './src/Context/BookStoreContext';

const wrapRootElement = ({ element }) => {
  return (
    <BookStoreProvider>
      <Layout>{element}</Layout>
    </BookStoreProvider>
  );
};
export default wrapRootElement;
