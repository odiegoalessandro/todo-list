import { Flex, Heading, Spacer, Button, Checkbox } from "@chakra-ui/react"
import { DeleteIcon } from "@chakra-ui/icons"
import { useContext } from "react"
import { TodoContext } from "../contexts/TodoContext"
import { useState } from "react"

export default function TodoItem({ content }){
  const { removeTodo } = useContext(TodoContext)
  const [isCheked, setIsCheked] = useState(false)

  return(
    <Flex 
      align="center"
      px="5"
      h="auto"
      w="100%"
      minH="60px"
    >
      <Checkbox px="1" onChange={() => {
        setIsCheked(prev => !prev)
      }}/>
      <Heading
        as="h2"
        overflow="hidden"
        whiteSpace="nowrap"
        textOverflow="ellipsis"
        size="md"
        opacity={isCheked === true ? .7 : 1}
        textDecoration={isCheked === true ? "line-through" : "none"}
        paddingLeft="1"
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