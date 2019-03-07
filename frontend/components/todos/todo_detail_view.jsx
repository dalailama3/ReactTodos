import React from 'react';

class TodoDetailView extends React.Component {
    constructor (props) {
        super (props);

    this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete(id) {
        console.log(id);
        this.props.deleteTodo(id);
    }

    render () {
        const { body, todoId } = this.props.children.props; 
        return (
            <div>
                {body}
                <button onClick={() => this.handleDelete(todoId)} >Delete me</button><br />

            </div>


        )
    }
}



export default TodoDetailView;