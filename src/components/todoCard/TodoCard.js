import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import './TodoCard.css'

export default class TodoCard extends Component {

    render() {
        return (
            <div onClick={() => this.props.handleOnClick(this.props.todo)}>
                <Card className="TodoCard">
                    <Card.Body>
                        <Card.Title>{this.props.todo.title}</Card.Title>
                        <Card.Text>
                            {this.props.todo.content}
                        </Card.Text>
                        {/* {this.props.todo.link ? <Card.Link href="#">{this.props.todo.link}</Card.Link> : null} */}
                    </Card.Body>
                </Card>
            </div>
        )
    }
}