import React from 'react';

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
      let detail = this.state.detail;
      this.setState({detail: !detail});
  }




  render () {
    const { title, body, done } = this.props.todo
    console.log(this.props.todo)
    return (<li>{title}
    <button onClick={() => this.handleToggle()}>{done ? 'Undo' : 'Done'}</button></li>)

  }
}






export default TodoListItem;
