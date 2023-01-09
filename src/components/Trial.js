import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import TrialStats from './TrialStats';

function Trial() {
  return (
    <Box
      height="50vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box flex="1" padding='1rem' backgroundImage="linear-gradient(to right, cyan , white)">
        <Box display="flex" justifyContent="space-between" padding="2px 5rem">
          <TrialStats stats={{ count: "50K", down: "Mobile Downloads" }} />
          <TrialStats stats={{ count: "80K", down: "Happy Learners" }} />
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          marginTop="1.5rem"
          paddingLeft="6rem"
          paddingRight="4rem"
        >
          <TrialStats stats={{ count: "53K", down: "Sessions per month" }} />
          <TrialStats
            stats={{ count: "200", down: "Speakers aroung the globe" }}
          />
        </Box>
      </Box>
      <Box
        display="flex"
        flex="1"
        flexDirection="column"
        justifyContent="center"
        paddingLeft="2rem"
      >
        <Box color='teal'>Book a trial</Box>
        <Box fontSize="2.2rem" fontWeight="bold">
          Start your English <br /> speaking journey today!
        </Box>
        <Box paddingTop="1rem" paddingRight="2rem">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ab ex
          exercitationem, vitae necessitatibus ipsam recusandae soluta repellat?
          Suscipit, debitis.
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
        </Box>
      </Box>
    </Box>
  );
}

export default Trial