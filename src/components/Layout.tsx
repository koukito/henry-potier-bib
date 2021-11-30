import React from 'react';
import { Heading } from 'theme-ui';
import { Navigation } from './Navigation';
export const Layout = ({ children }: any) => {
  return (
    <Heading>
      <Navigation />
      {children}
    </Heading>
  );
};
