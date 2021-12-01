import React from 'react';
import { Layout } from './src/components/Layout';
import { BookStoreProvider } from './src/Context/BookStoreContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const wrapRootElement = ({ element }) => {
  return (
    <BookStoreProvider>
      <Layout>{element}</Layout>
    </BookStoreProvider>
  );
};
export default wrapRootElement;
