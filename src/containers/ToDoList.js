import React from 'react';
import ToDo from '../components/ToDo'
import { connect  } from 'react-redux';

const ToDoList = ({todos}) => {
  console.log(todos, 'IAMTODO')
const displayTodos = todos.map(todo => {
  return (
    <ToDo 
    text={todo.todo}
    key={todo.id}
    />
  )
})

  return (
    <ul>
      {displayTodos}
    </ul>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps)(ToDoList)