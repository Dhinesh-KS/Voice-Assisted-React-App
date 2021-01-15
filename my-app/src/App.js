import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import { Faq } from './components/FAQ';

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Faq />
    </ChakraProvider>
  );
};
