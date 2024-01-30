import { Button, HStack, Input } from '@chakra-ui/react'
import React from 'react'

function handSubmit(e){

  e.preventDefault();
  console.log("s")
}


function TodoApp () {
  return (
    <div>
     <form onSubmit={handSubmit}>
<HStack mt="8">
  <Input   variation='filled' placeholder='Gorev Girin'  />
  <Button type='submit' colorScheme='cyan' px="8"> Gorevi Ekle </Button>
  </HStack>
     </form>
    </div>
  )
}

export default TodoApp
