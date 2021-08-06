import { VStack, Flex, Heading } from "@chakra-ui/react"
import React, { useContext } from "react"
import { TodoContext } from "../contexts/TodoContext"
import TodoForm from "./TodoForm"
import TodoItem from "./TodoItem"
import TodoList from "./TodoList"

export default function TodoContainer(){
  const { todos } = useContext(TodoContext)

  return(
    <>
      <VStack spacing="10">
        <TodoForm />
        {
          todos.length > 0 ? (
            <TodoList>
                {
                  todos.map((item, index) => {
                    return (
                      <TodoItem content={item} key={index}/>
                    )
                  })
                }
            </TodoList>
          ) : (
            <TodoList>
              <Flex justify="center" align="center" minH="100%">
                <Heading
                  size="md"
                >
                  The list is empty
                </Heading>
              </Flex>
            </TodoList>
          )
        }
      </VStack>
    </>
  )
}