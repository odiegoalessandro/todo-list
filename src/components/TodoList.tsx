import { VStack } from "@chakra-ui/layout"

export default function TodoList({ children }){
  return (
    <VStack
          w="md"
          h="200px"
          rounded="5"
          border="2px solid var(--chakra-colors-gray-400)"
          bgColor="gray.800"
          spacing="1px"
          overflow="auto"
      >
        {children}
    </VStack>
  )
}