import React from 'react';
import TodoForm from './todo_form'
class TodoList extends React.Component {
    constructor (props) {
        super(props)
    }

    


    render () {
        const { todos, receiveTodo } = this.props
        const todoItems = todos.map(todo => {
            return (<li key={todo.id}>{todo.title}
                <br></br><textarea readOnly value={todo.body}></textarea>
            </li>)
        })
        return (
        <div>
             <h3>Todo List goes here!</h3>
             <ul>{todoItems}</ul>
             <TodoForm receiveTodo={receiveTodo}/>
    
        </div>
        )
    }
}



export default TodoList;
