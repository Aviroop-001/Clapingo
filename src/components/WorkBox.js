import { Box } from '@chakra-ui/react';
import React from 'react'

function WorkBox({info}) {
  return (
    <Box
      height="7.5rem"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      width="20rem"
      padding="0.5rem"
      borderRadius="10px"
      boxShadow="2px 2px 4px #c2c2c2"
    >
      <Box color="black" fontWeight="bold" fontSize="1.2rem">
        {info.number}.{info.head}
      </Box>
      <Box color="gray">{info.content}</Box>
    </Box>
  );
}

export default WorkBox