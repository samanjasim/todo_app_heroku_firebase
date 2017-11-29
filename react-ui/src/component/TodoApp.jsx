import React from 'react';
//import ListItem from './ListItem';

export default class TodoApp extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            todos: [
                {
                    id: 1,
                    text: 'Walk the dog'
                },
                {
                    id: 2,
                    text: 'second items in list'
                },
                {
                    id: 3,
                    text: 'third items in list'
                }
            ]
        };
    }

    render() {

        const listItems = this.state.todos.map((item) => {
            return (
                <li key={item.id}>{item.text}</li>
            )
        })

        return (
            <div>
                <h1> Test Component </h1>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
}