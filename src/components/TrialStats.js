import React from 'react'
import { Box, Button } from "@chakra-ui/react";

function TrialStats({stats}) {
  return (
    <Box
      borderRadius="14px"
      backgroundColor="gray.800"
      color="white"
      width="13rem"
      padding="1rem 0.5rem"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Box fontSize="1.5rem">{stats.count}<span style={{color: 'teal'}}>+</span></Box>
      <Box fontWeight="light">{stats.down}</Box>
    </Box>
  );
}

export default TrialStats