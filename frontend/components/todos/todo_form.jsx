import React from 'react';


class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: ''
        }
    }




    render () {
        return (
            <div>
                <input>Enter a title</input>
                <input>Enter a body</input>
            </div>
        )
    }
}


