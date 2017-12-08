import React, {Component} from 'react'

export default class Todo extends Component {

    render() {
        const {text, id} = this.props;
        return (
            <div>
                <span className="todo-id"> {id} - </span> {text}
            </div>
        );
    }
}
