import { HStack, IconButton, Spacer, StackDivider, VStack, baseTheme } from '@chakra-ui/react'
import React from 'react'
import { FaTrash } from "react-icons/fa"
function TodoList() {
    return (
        <>
            <VStack divider={<StackDivider />} borderWidth='2px' borderColor='gray.100' borderRadius='lg' padding='5' marginTop='5' w='100%'
                maxW={{ base: '90vw', sm: '90vw', lg: '50vw', xl: '40vw' }} alignItems={'stretch'}>

                <HStack>
                    <text>This is a task</text>
                    <Spacer />
                    <IconButton icon={<FaTrash />}  isRound='true' />
                </HStack>
            </VStack>
        </>
    );
}

export default TodoList
