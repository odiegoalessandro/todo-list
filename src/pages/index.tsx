import { Flex } from '@chakra-ui/react'
import TodoContainer from '../components/TodoContainer'

export default function Home() {
  return (
    <>
      <Flex 
        align="center"
        justify="space-evenly"
        direction="column"
        minH="100vh"
        p="10"
      >
        <TodoContainer />
      </Flex>
    </>
  )
}