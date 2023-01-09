import { Box, Image } from '@chakra-ui/react'
import React from 'react'

function OfferCards({info}) {
  return (
    <Box height="15rem" width="20rem" borderRadius="10px" color="white" position='relative'>
      <Image
        src={info.img}
        maxHeight="100%"
        maxWidth="100%"
        borderRadius="10px"
      ></Image>
      <Box position='absolute' top='8rem' color='white' backdropFilter='blur(10px)' width='100%' height='5.4rem' borderBottomRadius='10px' padding='1px 10px'>
        <Box color='cyan' fontSize='1.1rem'>{info.head}</Box>
        <Box>{info.content}</Box>
      </Box>
    </Box>
  );
}

export default OfferCards