import { Flex, Heading, VStack, HStack, Input, Button, Spacer } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import TodoList from '../components/TodoList'
import { useState } from 'react'

export default function Home() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')

  function addTodo(){
    setTodos((prev) => [...prev, {
      id: todos.length + 1,
      title: todo
    }])
  }
  function removeTodo(todo){
    setTodos((prev) => prev.filter(item => item.id !== todo.id))
  }

  return (
    <>
      <Flex 
        align="center"
        justify="space-evenly"
        direction="column"
        minH="100vh"
        p="10"
      >
        <Heading size="3xl" mb="5">ToDo List</Heading>
        <VStack spacing="10">
          <HStack>
            <Input 
              size="lg"
              w="lg"
              value={todo}
              placeholder="Add item"
              onChange={(e) => setTodo(e.target.value)}
            />
            <Button
              bgColor="teal.300"
              size="lg"
              color="white"
              _hover={{
                bgColor: "var(--chakra-colors-teal-400)"
              }}
              onClick={addTodo}
            >
              +
            </Button>
          </HStack>
          {
            todos.length > 0 && (
              <TodoList>
                  {
                    todos.map((item, index) => {
                      return (
                        <Flex 
                          align="center"
                          px="5"
                          h="auto"
                          w="100%"
                          minH="60px"
                          key={index}
                        >
                          <Heading 
                            as="h2"
                            size="md"
                            overflow="hidden"
                            whiteSpace="nowrap"
                            textOverflow="ellipsis"
                          >
                            {item.title}
                          </Heading>
                          <Spacer minW="2" />
                          <Button 
                            bgColor="red.400"
                            w="30px"
                            color="white"
                            _hover={{
                                bgColor: 'var(--chakra-colors-red-500)'
                            }}
                            onClick={() => removeTodo(item)}
                          >
                            <DeleteIcon />
                          </Button>
                        </Flex>
                      )
                    })
                  }
              </TodoList>
            )
          }
        </VStack>
      </Flex>
    </>
  )
}