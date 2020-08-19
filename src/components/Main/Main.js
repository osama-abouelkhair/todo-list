import React, { Component } from 'react'
import { todoData } from '../../services/todo-data'
import TodoCard from '../todoCard/TodoCard';


export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            data: todoData
        };
    }

    render() {
        const cardItems = this.state.data.map(item =>
            <TodoCard key={item.id} todo={item} />
        )

        return (
            <div className="d-flex flex-column">
                {cardItems}
            </div>
        )
    }
}