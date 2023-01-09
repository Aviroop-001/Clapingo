import { Box } from '@chakra-ui/react'
import React from 'react'
import OfferCards from './OfferCards'

function Offer() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="50vh"
    >
      <Box fontSize="2.4rem" fontWeight="bold" marginBottom="1rem">
        What we offer?
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-evenly"
        alignItems="center"
        width="80%"
      >
        <OfferCards
          info={{
            img: "https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            head: "Customised Curriculum",
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, esse.",
          }}
        />
        <OfferCards
          info={{
            img: "https://images.pexels.com/photos/1292115/pexels-photo-1292115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            head: "Experimental Learning",
            content:
              "Lorem ipsum dolor sicing elit. Sint, esse.",
          }}
        />
        <OfferCards
          info={{
            img: "https://images.pexels.com/photos/1031588/pexels-photo-1031588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            head: "Shadowing Method",
            content:
              "Lorem ipsum dolor sit amet consecte tur adipisicing elit. Sint, esse.",
          }}
        />
      </Box>
    </Box>
  );
}

export default Offer