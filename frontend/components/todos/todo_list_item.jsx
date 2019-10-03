import React from 'react';

class TodoListItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      detail: false,
      done: false
    }
    this.handleToggle = this.handleToggle.bind(this);
    this.showDetail = this.showDetail.bind(this);

  }


  handleToggle (done) {
      console.log(done);
      this.state.done = !done;
      // this.props.receiveTodo(todo);
  }

  showDetail () {
      let detail = this.state.detail;
      this.setState({detail: !detail});
  }




  render () {
    const { title, body, done } = this.props.todo
    console.log(this.props.todo)
    console.log(done)
    return (<li>{title}
    <button onClick={() => this.handleToggle(done)}>{this.state.done ? 'Done' : 'Undo'}</button></li>)

  }
}






export default TodoListItem;
