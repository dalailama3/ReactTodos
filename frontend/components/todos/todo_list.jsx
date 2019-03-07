import React from 'react';
import TodoForm from './todo_form';
import TodoDetailView from './todo_detail_view';
import TodoDetailViewContainer from './todo_detail_view_container';
class TodoList extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            detail: false
        }
    // this.handleDelete = this.handleDelete.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.showDetail = this.showDetail.bind(this);
    }
    // handleDelete (id) {
    //   this.props.deleteTodo(id);
    // }
    
    handleToggle (todo) {
        todo.done = !todo.done;
        this.props.receiveTodo(todo);
    }

    showDetail () {
        let detail = this.state.detail;
        this.setState({detail: !detail});
    }


    render () {
        const { todos, receiveTodo } = this.props
        const todoItems = todos.map(todo => {
            return (<li onClick={this.showDetail} key={todo.id}>{todo.title}
                {/* <br></br><textarea readOnly value={todo.body}></textarea> */}
                {/* <button onClick={() => this.handleDelete(todo.id)} >Delete me</button><br /> */}
                <br />
                <button onClick={() => this.handleToggle(todo)}>{todo.done ? 'Done' : 'Undo'}</button>
                {this.state.detail && <TodoDetailViewContainer><TodoDetailView body={todo.body} todoId={todo.id} /></TodoDetailViewContainer>}
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
