import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import './TodoCard.css'

export default class TodoCard extends Component {

    render() {
        console.log(this.props)
        return (
            <Card>
                <Card.Body>
                    <Card.Title>{this.props.todo.title}</Card.Title>
                    <Card.Text>
                        {this.props.todo.content}
                    </Card.Text>
                    {/* {this.props.todo.link ? <Card.Link href="#">{this.props.todo.link}</Card.Link> : null} */}
                </Card.Body>
            </Card>
        )
    }
}