import { Box } from '@chakra-ui/react'
import React from 'react'
import WorkBox from './WorkBox';
import {BiArrowBack} from 'react-icons/bi'

function Work() {
  return (
    <Box
      height="85vh"
      display="flex"
      flexDirection="column"
      backgroundImage="linear-gradient(to top, #a9f5f5, white)"
    >
      <Box fontSize="2.4rem" fontWeight="bold" marginLeft="5rem" padding="1px">
        How it works?
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="90%"
      >
        <Box
          flex="1"
          margin=" 0px 1rem"
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
          height="90%"
          alignItems="center"
        >
          <WorkBox
            info={{
              number: 1,
              head: "Create Account",
              content:
                "Create your account using phone number or email and take a free trial at ₹1.",
            }}
          />
          <WorkBox
            info={{
              number: 3,
              head: "Select time slot",
              content:
                "Subscribe and select any time slot between 10AM and 12 midnight",
            }}
          />
        </Box>
        <Box
          flex="1"
          margin="0px 1rem"
          borderRadius="15px"
          justifyContent="center"
          height="95%"
          display="flex"
          padding="4px"
        >
          {/* //mobile */}
          <Box
            border="4px solid teal"
            borderRadius="15px"
            height="100%"
            width="15rem"
            boxShadow="1px 1px 3px teal"
          >
            {/* header */}
            <Box
              padding="5px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <BiArrowBack />{" "}
              <span style={{ marginRight: "2rem", fontWeight: "bold" }}>
                Subscription & Plans
              </span>
            </Box>
            {/* duration */}
            <Box marginTop="20px" marginBottom="20px">
              <span style={{ margin: "5px", fontWeight: "bold" }}>
                Duration
              </span>
              <Box display="flex" justifyContent="space-evenly" padding="4px">
                <span
                  style={{
                    borderRadius: "5px",
                    boxShadow: "1px 1px 2px gray",
                    padding: "3px 5px",
                    backgroundColor: "teal",
                    color: "white",
                  }}
                >
                  15 min
                </span>
                <span
                  style={{
                    borderRadius: "5px",
                    boxShadow: "1px 1px 2px gray",
                    padding: "3px 5px",
                    // backgroundColor: "teal",
                    color: "gray",
                  }}
                >
                  25 min
                </span>
              </Box>
            </Box>
            {/* sessions per week */}
            <Box marginBottom="20px">
              <span style={{ margin: "5px", fontWeight: "bold" }}>
                Sessions per week
              </span>
              <Box display="flex" justifyContent="space-evenly" padding="4px">
                <span
                  style={{
                    borderRadius: "5px",
                    boxShadow: "1px 1px 2px gray",
                    padding: "3px 5px",
                    // backgroundColor: "teal",
                    color: "gray",
                  }}
                >
                  1 day
                </span>
                <span
                  style={{
                    borderRadius: "5px",
                    boxShadow: "1px 1px 2px gray",
                    padding: "3px 5px",
                    backgroundColor: "teal",
                    color: "white",
                  }}
                >
                  3 days
                </span>
                <span
                  style={{
                    borderRadius: "5px",
                    boxShadow: "1px 1px 2px gray",
                    padding: "3px 5px",
                    color: "gray",
                  }}
                >
                  5 days
                </span>
              </Box>
            </Box>
            {/* subscribe */}
            <Box>
              <span style={{ margin: "10px", fontWeight: "bold" }}>
                Subscribe
              </span>
              <Box
                display="flex"
                justifyContent="space-evenly"
                padding="4px"
                flexWrap="wrap"
              >
                <Box
                  width="45%"
                  height="5rem"
                  marginBottom="15px"
                  fontSize="0.8rem"
                  display="flex"
                  flexDirection="column"
                  borderRadius="10px"
                  boxShadow="1px 1px 2px gray"
                >
                  <Box backgroundColor="gray" color="white" padding="4px 10px">
                    1 month
                  </Box>
                  <Box color="gray" textAlign="center">
                    <span style={{ color: "black", fontWeight: "bold" }}>
                      ₹700
                    </span>{" "}
                    /month <br />
                    (30% off)
                  </Box>
                </Box>
                <Box
                  width="45%"
                  height="5rem"
                  marginBottom="10px"
                  fontSize="0.8rem"
                  display="flex"
                  flexDirection="column"
                  borderRadius="10px"
                  boxShadow="1px 1px 2px gray"
                >
                  <Box backgroundColor="gray" color="white" padding="4px 10px">
                    3 month
                  </Box>
                  <Box color="gray" textAlign="center">
                    <span style={{ color: "black", fontWeight: "bold" }}>
                      ₹650
                    </span>{" "}
                    /month <br />
                    (35% off)
                  </Box>
                </Box>
                <Box
                  width="45%"
                  height="5rem"
                  marginBottom="10px"
                  fontSize="0.8rem"
                  display="flex"
                  flexDirection="column"
                  borderRadius="10px"
                  boxShadow="1px 1px 2px gray"
                >
                  <Box backgroundColor="teal" color="white" padding="4px 10px">
                    6 month
                  </Box>
                  <Box color="gray" textAlign="center">
                    <span style={{ color: "black", fontWeight: "bold" }}>
                      ₹550
                    </span>{" "}
                    /month <br />
                    (45% off)
                  </Box>
                </Box>
                <Box
                  width="45%"
                  height="5rem"
                  marginBottom="10px"
                  fontSize="0.8rem"
                  display="flex"
                  flexDirection="column"
                  borderRadius="10px"
                  boxShadow="1px 1px 2px gray"
                >
                  <Box backgroundColor="gray" color="white" padding="4px 10px">
                    12 month
                  </Box>
                  <Box color="gray" textAlign="center">
                    <span style={{ color: "black", fontWeight: "bold" }}>
                      ₹500
                    </span>{" "}
                    /month <br />
                    (50% off)
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          flex="1"
          margin="1rem"
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
          height="90%"
          alignItems="center"
        >
          <WorkBox
            info={{
              number: 2,
              head: "Subscribe",
              content:
                "Choose your preferred duration and select subscription package for your sessions.",
            }}
          />
          <WorkBox
            info={{
              number: 4,
              head: "You are done",
              content:
                "That’s it! Start practicing and reach your learning goal in speaking.",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Work