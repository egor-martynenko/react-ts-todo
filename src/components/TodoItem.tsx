import React from "react"
import {Todo} from '../types'

interface TodoItemProps extends Todo {
  style?: React.CSSProperties
  toggleTodo: ( id: Todo['id'] ) => void,
  removeTodo: ( id: Todo['id'] ) => void
}

const TodoItem = ({id, title, completed, removeTodo, toggleTodo,  style={}}:TodoItemProps) => {
  return(
    <li id={id} style={{color: 'black', listStyle: "none", backgroundColor: 'white', ...style}}>
      <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)}/>
      <span>{title}</span>
      <span onClick={()=> removeTodo(id)} style={{color: 'red', paddingLeft: '5px'}}>&times;</span>
    </li>
  )
}

export default TodoItem