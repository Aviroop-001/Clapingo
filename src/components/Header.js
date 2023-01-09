import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";

function Header() {

  const clickHandler = () =>{
    window.location.replace("/login");
  }

  return (
    <Box
      width="100%"
      height="3.5rem"
      //   borderBottom="1px solid gray"
      textAlign="center"
      display="flex"
      flexDirection="row"
      justifyContent="space-evenly"
      boxShadow="1px 1px 3px #c2c2c2"
      alignItems="center"
    >
      <Box flex="2" marginRight="3rem" fontSize="1.8rem" fontWeight='bold' color='teal' fontStyle='italic'>
        Clapingo
      </Box>
      <Box
        flex="5"
        display="flex"
        flexDirection="row"
        justifyContent="space-evenly"
      >
        <span>Plans and Prices</span>
        <span>Teach with us</span>
        <span>Affiliate Programs</span>
        <span>Kids</span>
      </Box>
      <Box flex="2" marginLeft="2rem">
        <Button borderRadius="20px" backgroundColor="teal.400" color='white' padding='1px 30px' _hover={{backgroundColor:"teal.600"}} onClick={clickHandler}>
          Login
        </Button>
      </Box>
    </Box>
  );
}

export default Header