import { Flex, Heading, Spacer, Button } from "@chakra-ui/react"
import { DeleteIcon } from "@chakra-ui/icons"
import { useContext } from "react"
import { TodoContext } from "../contexts/TodoContext"

export default function TodoItem({ id, content }){
  const { removeTodo } = useContext(TodoContext)

  return(
    <Flex 
      align="center"
      px="5"
      h="auto"
      w="100%"
      minH="60px"
      key={id}
    >
      <Heading 
        as="h2"
        size="md"
        overflow="hidden"
        whiteSpace="nowrap"
        textOverflow="ellipsis"
      >
        {content.title}
      </Heading>
      <Spacer minW="2" />
      <Button 
        bgColor="red.400"
        w="30px"
        color="white"
        _hover={{
            bgColor: 'var(--chakra-colors-red-500)'
        }}
        onClick={() => removeTodo(content)}
      >
        <DeleteIcon />
      </Button>
    </Flex>
  )
}