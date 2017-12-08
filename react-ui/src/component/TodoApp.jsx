import React from 'react';
import TodoList from './TodoList';
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
                    text: 'clean the yard'
                },
                {
                    id: 3,
                    text: 'Leave mail on porch'
                },
                {
                    id: 4,
                    text: 'Play video games'
                }
            ]
        };
    }

    render() {
        const {todos} = this.state;
        return (
            <div>
                <h1> Test Component </h1>
                <TodoList todos={todos} />
            </div>
        )
    }
}