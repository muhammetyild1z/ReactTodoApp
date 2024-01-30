import { Heading, Box, VStack } from "@chakra-ui/react"
import TodoAdd from './components/TodoAdd.jsx'
import TodoList from './components/TodoList.jsx'

function App() {


  return (
    <>
      <VStack p="4">
        <Box>
          <Heading>Yapilacaklar Listesi</Heading>
          <TodoAdd />
          <TodoList />
        </Box>
      </VStack>
    </>
  )
}

export default App
