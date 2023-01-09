import { Box, Button, Image } from '@chakra-ui/react'
import React from 'react'

function Intro() {
  return (
    <Box
      width="100%"
      height="55vh"
      display="flex"
      flexDirection="row"
      padding="1rem"
    >
      <Box
        display="flex"
        flex="1"
        flexDirection="column"
        alignItems="center"
      >
        <Box fontSize="2.5rem" fontWeight="bold" letterSpacing='2px'>
          Home your english <br /> speaking skills over <br />
          <span style={{ color: "teal" }}>one-on-one</span> video call
        </Box>
        <Box  paddingLeft='5.5rem'>
          Practice english conversation with excellent communicators across the
          country and speak like a PRO.
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          marginTop="1rem"
        >
          <Button
            backgroundColor="#c96042"
            borderRadius="20px"
            color="white"
            _hover={{ backgroundColor: "red" }}
          >
            Book a trial
          </Button>
          <Button
            marginLeft="2rem"
            backgroundColor="white"
            border="2px solid"
            borderRadius="20px"
            color="#c96042"
            _hover={{ color: "red" }}
          >
            Download our app
          </Button>
        </Box>
      </Box>
      <Box flex="1" display="flex" justifyContent="center" alignItems="center">
        <Box
          width="50%"
          height="60%"
          border="2px solid black"
          borderRadius="20px"
        ></Box>
      </Box>
    </Box>
  );
}

export default Intro