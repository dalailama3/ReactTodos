import React from 'react';
import TodoForm from './todo_form'
class TodoList extends React.Component {
    constructor (props) {
        super(props)

    this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete (id) {
      this.props.deleteTodo(id);
    }
    


    render () {
        const { todos, receiveTodo } = this.props
        const todoItems = todos.map(todo => {
            return (<li onClick={() => this.handleDelete(todo.id)} key={todo.id}>{todo.title}
                <br></br><textarea readOnly value={todo.body}></textarea>
                <button>Delete me</button>
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
