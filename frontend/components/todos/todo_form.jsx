import React from 'react';


class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: ''
        }
    }

 
    submitForm(e) {
        e.preventDefault()
        let newTodo = {
            id: new Date().getTime(),
            title: this.state.title,
            body: this.state.body,
            done: false
        };
        this.props.receiveTodo(newTodo);
        this.setState({
            title: '',
            body: ''
        })
    }

    handleInput1(e) {
        this.setState({title: e.target.value})
    }

    handleInput2(e) {
        this.setState({body: e.target.value })
    }

    render () {
        return (
            <div>
                <input onChange={this.handleInput1.bind(this)} value={this.state.title}></input>
                <textarea onChange={this.handleInput2.bind(this)} value={this.state.body}></textarea>
                <button onClick={this.submitForm.bind(this)}>Submit</button>
            </div>
        )
    }
}


export default TodoForm;