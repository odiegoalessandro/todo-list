import { createContext, Dispatch, SetStateAction, useState } from "react"

interface TodoProps{
  id: number
  title: string
}

interface TodoContextProps{
  todos: Array<TodoProps>
  todo: string
  setTodo: Dispatch<SetStateAction<string>>
  setTodos: Dispatch<SetStateAction<TodoProps[]>>
  addTodo: () => void
  removeTodo: (todo: TodoProps) => void
}

export const TodoContext = createContext({} as TodoContextProps)

export function TodoProvider({children}){
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')

  function addTodo(){
    if(todo.length > 0){
      setTodos((prev) => [...prev, {
        id: todos.length + 1,
        title: todo
      }])
    }
  }
  function removeTodo(todo){
    setTodos((prev) => prev.filter(item => item.id !== todo.id))
  }

  return (
    <TodoContext.Provider value={{
      todo,
      todos,
      addTodo,
      removeTodo,
      setTodo,
      setTodos
    }}>
      {children}
    </TodoContext.Provider>
  )
}