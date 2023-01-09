import { FormControl, Input, VStack, Box, Text, Button } from '@chakra-ui/react';
import React, {useState} from 'react'

function Login() {

//states
  const [userID, setuserID] = useState();
  const [password, setpassword] = useState();
  const [loading, setloading] = useState(false);

  //functions

  const submitHandler = () =>{
    var existingUsers = JSON.parse(localStorage.getItem("users"));
    if (existingUsers == null) existingUsers = [];
    const currUser = existingUsers.find((user) => {
      return user.userID === userID;
    });
    // if user already logged in
    if(currUser){
      window.location.replace("/logged");
    }
    else{
      //if new user logged in
      var newUser = { userID: userID, password: password };
      existingUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(existingUsers));
      window.location.replace("/");
    }
    setuserID("");
    setpassword("");
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
            placeholder="UserID"
            color="teal"
            fontWeight="bolder"
            width="80%"
            padding="1.5rem"
            borderRadius="0px"
            borderBottom="1px solid teal"
            onChange={(e) => setuserID(e.target.value)}
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