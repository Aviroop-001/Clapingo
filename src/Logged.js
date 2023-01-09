import { Box, Button, Center } from '@chakra-ui/react'
import React from 'react'

function Logged() {
  return (
    <Center height="90vh" fontSize="3rem" fontWeight="bold" fontStyle="italic" display='flex' flexDirection='column'>
      <Box> User already logged in </Box>
      <Button marginTop='2rem' backgroundColor='teal.700' color='white' fontWeight='bold' fontSize='1.4rem' padding='20px'
      onClick={() => window.location.replace("/")} _hover={{backgroundColor:'teal.900'}}>Home</Button>
    </Center>
  );
}

export default Logged