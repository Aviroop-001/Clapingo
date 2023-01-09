import { FormControl, Input, VStack, Box, Text, Button } from '@chakra-ui/react';
import React, {useState} from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";

function Login() {

//states
  const [username, setusername] = useState();
  const [password, setpassword] = useState();
  const [loading, setloading] = useState(false);

  //functions
  const submitHandler = () =>{
    //save to local storage
  }

  return (
    <Box
      textAlign="center"
      padding="3rem"
      fontSize="2.5rem"
      height="100vh"
      fontFamily="Poppins"
    >
      <Text margin="2rem auto">LOGIN</Text>
      <VStack
        className="loginCredentials"
        spacing="1px"
        padding="auto 2rem"
        margin="2rem auto"
        height="40vh"
        width="40vw"
        display="flex"
        justifyContent="space-evenly"
        borderRadius="10px"
      >
        <FormControl className="fieldInput" isRequired>
          <Input
            variant="ghost"
            type="text"
            size="lg"
            placeholder="Username"
            color="teal"
            fontWeight="bolder"
            width="80%"
            padding="1.5rem"
            borderRadius="0px"
            borderBottom="1px solid teal"
            onChange={(e) => setusername(e.target.value)}
          />
        </FormControl>
        {/* PASSWORD */}
        <FormControl className="fieldInput" isRequired>
          <Input
            className="fieldInput"
            variant="ghost"
            size="lg"
            type="password"
            placeholder="Password"
            color="teal"
            fontWeight="bolder"
            width="80%"
            padding="1.5rem"
            borderRadius="0px"
            borderBottom="1px solid teal"
            onChange={(e) => setpassword(e.target.value)}
          />
        </FormControl>

        <Button
          className="btn"
          backgroundColor='teal.800'
          marginTop='3rem'
          color='white'
          fontSize='1.5rem'
          letterSpacing='2px'
          variant="outline"
          type="submit"
          isLoading={loading}
          height="3rem"
          width="7rem"
          onClick={(e) => submitHandler(e)}
        >
          {" "}
          Login{" "}
        </Button>
      </VStack>
    </Box>
  );
}

export default Login