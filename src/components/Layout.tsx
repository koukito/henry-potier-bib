import React from 'react';
import Container from 'react-bootstrap/Container';

import { Navigation } from './Navigation';
export const Layout = ({ children }: any) => {
  return (
    <Container>
      <Navigation />
      {children}
    </Container>
  );
};
