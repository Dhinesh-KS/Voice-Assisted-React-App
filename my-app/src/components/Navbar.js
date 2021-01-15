import React from 'react';
import { Flex, Box, Heading, Spacer } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

function Navbar(props) {
  return (
    <Flex align="center" boxShadow="base" p="2" mb="2">
      <Box p="2">
        <Heading size="lg">E-Commerce Support</Heading>
      </Box>
      <Spacer />
      <Box>
        <ColorModeSwitcher />
      </Box>
    </Flex>
  );
}

export default Navbar;
