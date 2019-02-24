import React from 'react';
import TodoForm from './todo_form'
class TodoList extends React.Component {
    constructor (props) {
        super(props)
        this.todos = this.props.todos
    }

    


    render () {
        const todoItems = this.todos.map(todo => {
            return (<li key={todo.id}>{todo.title}</li>)
        })
        return (
        <div>
             <h3>Todo List goes here!</h3>
             <ul>{todoItems}</ul>
             <TodoForm />
    
        </div>
        )
    }
}



export default TodoList;
