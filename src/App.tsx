import React, { useState } from 'react'
import { Todo } from './types'
import './App.css';
import TodoList from './components/TodoList';
import NewTodoForm from "./components/NewTodoForm";



function App() {

  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: new Date().toString(),
      title: text,
      completed: false
    }
    setTodos([newTodo, ...todos])
  }

  const toggleTodo = (id: Todo['id']) => {
    setTodos(todos.map(todo => {
      if (todo.id !== id) return todo

      return{
        ...todo,
        completed: !todo.completed
      }
    }))
  }

  const removeTodo = (id: Todo['id']) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }



  // useEffect(() => {

  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //     .then(res => res.json())
  //     .then((data: Todo[]) => {
  //       setTodos(data);
  //     })

  // }, [])

  return (
    <div className="App">
      <NewTodoForm
        handleClick={addTodo}
      />

      <TodoList list={todos} toggleTodo={toggleTodo} removeTodo={removeTodo}/>

    </div>
  );
}

export default App;
