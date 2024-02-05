import {
  Heading,
  Box,
  HStack,
  Input,
  Button,
  VStack,
  StackDivider,
  IconButton,
  Spacer,

} from "@chakra-ui/react";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { FaTrash } from "react-icons/fa";

 
function TodoAdd(props) {
  const [data, setData] = useState('');

  const [todoContent, setTodoContent] = useState('');
  async function handleDeleteTodo(todoID) {
    try {
      await fetch(`https://localhost:7215/api/TodoApp/TodoRemove?id=${todoID}`, {
        method: 'DELETE'
      });
      props.fetchTodos(); // fetchTodos fonksiyonunu props aracılığıyla çağır
    } catch (error) {
      console.error('Görev silme hatası:', error);
    }
  }

  async function handSubmit(e) {
    e.preventDefault();

    if (!todoContent) {
      toast.error("Gorev bos gecilemez!");
      return;
    }

    try {
      const user = localStorage.getItem('user');
      setData(user);
      console.log(data);
      const response = await fetch('https://localhost:7215/api/TodoApp/TodoCreate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          TodoContent: todoContent,
          UserID: data.id,
          TodoDate: moment().format(),
        }),
      });

      if (response.ok) {
        setTodoContent('');
        props.fetchTodos();
        toast.success("Gorev basariyla eklendi");
      }

    } catch (error) {
      console.error('Bir hata oluştu:', error);
      //apiye baglanmiyor
    }
  }
  return (

    <div >
      <Box p={10}
        borderRadius="lg"
        backgroundColor="purple.200"
        width="500px"
        boxShadow="xl" mx="auto" mt="50px" py="50px">
        <Heading textAlign="center" textColor="whitesmoke" fontSize="2xl" >
          Yapılacaklar Listesi
        </Heading>
        <form onSubmit={handSubmit}>
          <HStack mt="5" ml="5" spacing="4" justifyContent="center">
            <Input
              variant="filled"
              placeholder="Görev Girin"
              size="lg"
              onChange={(e) => setTodoContent(e.target.value)}
            />
            <Button
              type="submit"
              colorScheme="cyan"
              textColor="whitesmoke"
              px="5"
              size="md"

            >
              Görevi Ekle
            </Button>
          </HStack>

        </form>
        <VStack divider={<StackDivider />} borderWidth='2px' borderColor='gray.100' borderRadius='lg'
          padding='5' marginTop='5' w='100%'
          maxW={{ base: '90vw', sm: '90vw', lg: '50vw', xl: '40vw' }} alignItems={'stretch'}>

          {props.todos.map((todo, i) => (
            <React.Fragment key={todo.todoID}>
              <HStack>
                <p>{i + 1}-</p>
                <p>
                  {todo.todoContent}
                </p>

                <text> - {moment(todo.todoDate).format('LLL')}</text>
                <Spacer />
                <IconButton onClick={() => handleDeleteTodo(todo.todoID)} icon={<FaTrash />} isRound={true} />
              </HStack>
            </React.Fragment>
          ))}
        </VStack>
      </Box>

    </div>

  )
}

export default TodoAdd
