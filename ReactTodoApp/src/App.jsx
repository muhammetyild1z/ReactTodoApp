import { Heading, Box, VStack } from "@chakra-ui/react";
import Login from './components/Login.jsx';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoAdd from "./components/TodoAdd.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';
function App() {
  const [todos, setTodos] = useState([]);
 
 
  async function fetchTodos() {
    try {
      const response = await fetch(`https://localhost:7215/api/TodoApp/TodoList?userName=${1}`);
      const result = await response.json();
      setTodos(result);
      if (response.ok) {
        console.log("listelendi");
      }
    } catch (error) {
      console.error('Bağlantı hatası', error);
    }
  };

  useEffect(() => {
    fetchTodos()
  }, []);

  return (

    <BrowserRouter>
      <ToastContainer />
      <div className="app">
        <Routes>
          <Route path="/" element={
            <VStack p="4">
              <Box>
                <Login />
              </Box>
            </VStack>
          } />

          <Route path="/todoadd" element={<TodoAdd todos={todos} fetchTodos={fetchTodos} />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
