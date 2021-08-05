import { HStack, Input, Button } from "@chakra-ui/react"
import { useContext } from "react"
import { TodoContext } from "../contexts/TodoContext"

export default function TodoForm(){
  const { 
    todo, 
    setTodo, 
    addTodo 
  } = useContext(TodoContext)

  return(
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
  )
}