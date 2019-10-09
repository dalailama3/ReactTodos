import React from 'react';
import TodoDetailView from './todo_detail_view';


class TodoListItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      detail: false
    }
    this.handleToggle = this.handleToggle.bind(this);
    this.showDetail = this.showDetail.bind(this);

  }

// need to update the todo with changed status
  handleToggle () {
      // this.setState({isDone: !done});
      this.props.todo.done = !this.props.todo.done;
      this.props.receiveTodo(this.props.todo);
  }

  showDetail () {
      console.log("details...")
      let detail = this.state.detail;
      this.setState({detail: !detail});
  }




  render () {
    const { title, body, done } = this.props.todo
    console.log(this.props.todo)

    return (<li onClick={() => this.showDetail()}>{title}
    <button onClick={() => this.handleToggle()}>{done ? 'Undo' : 'Done'}</button>
    {this.state.detail &&<TodoDetailView todo={this.props.todo}></TodoDetailView>}
    </li>)

  }
}






export default TodoListItem;
