import React from 'react';
import TodoForm from './todo_form'
class TodoList extends React.Component {
    constructor (props) {
        super(props)

    this.handleDelete = this.handleDelete.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    }
    handleDelete (id) {
      this.props.deleteTodo(id);
    }
    
    handleToggle (todo) {
        todo.done = !todo.done;
        this.props.receiveTodo(todo);
    }


    render () {
        const { todos, receiveTodo } = this.props
        const todoItems = todos.map(todo => {
            return (<li key={todo.id}>{todo.title}
                <br></br><textarea readOnly value={todo.body}></textarea>
                <button onClick={() => this.handleDelete(todo.id)} >Delete me</button><br />
                <button onClick={() => this.handleToggle(todo)}>{todo.done ? 'Done' : 'Undo'}</button>
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
