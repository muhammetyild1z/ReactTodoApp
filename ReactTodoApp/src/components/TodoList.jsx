import { HStack, IconButton, Spacer, StackDivider, VStack } from '@chakra-ui/react';
import moment from 'moment';
import { FaTrash } from "react-icons/fa";
import React, { useEffect, useState } from 'react'


function TodoList(props) {

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
    return (
        <>
          
            <VStack divider={<StackDivider />} borderWidth='2px' borderColor='gray.100' borderRadius='lg'
                padding='5' marginTop='5' w='100%'
                maxW={{ base: '90vw', sm: '90vw', lg: '50vw', xl: '40vw' }} alignItems={'stretch'}>

                {props.todos.map((todo, i) => (
                    <React.Fragment key={todo.todoID}>
                        <HStack>
                            <p>{i + 1}-</p>
                            <text>{todo.todoContent}</text>
                            <text> -- {moment(todo.todoDate).format('LLL')}</text>
                            <Spacer />
                            <IconButton onClick={() => handleDeleteTodo(todo.todoID)} icon={<FaTrash />} isRound={true} />
                        </HStack>
                    </React.Fragment>
                ))}

            </VStack>
        </>
    );
}

export default TodoList;
