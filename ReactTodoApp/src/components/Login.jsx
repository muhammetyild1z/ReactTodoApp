import React from 'react'
import {
  Box,
  Button,
  Center,
  ChakraProvider,
  Container,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch('https://localhost:7215/api/TodoApp/TodoLogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }, body: JSON.stringify({
        UserName: userName,
        PasswordHash: password

      }),
    });

    if (response.ok) {
      const responseData = await response.json();

      localStorage.setItem('user', JSON.stringify(responseData));

      setUser(response);
      navigate('/todoAdd');

    } else {
      toast.error("Kullanıcı adı veya şifre yanlış");
    }
  }
  return (

    <ChakraProvider>
      <Container
        centerContent
        h="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <VStack spacing={4}>
          <Box
            p={10}
            borderRadius="lg"
            backgroundColor="purple.200"
            width="400px"
            boxShadow="xl"
          >
            <form onSubmit={handleSubmit}>
              <FormControl id="userName" isRequired>
                <FormLabel>Kullanıcı Adı</FormLabel>
                <Input
                  boxShadow="xl"
                  my="2"
                  background="white"
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Şifre</FormLabel>
                <Input
                  boxShadow="xl"
                  background="white"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Center>
                <Button mt="5" colorScheme="cyan" textColor='white' type="submit">
                  Giriş Yap
                </Button>
              </Center>
            </form>
          </Box>
        </VStack>
      </Container>
    </ChakraProvider>
  )
}

export default Login
