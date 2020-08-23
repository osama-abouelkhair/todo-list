import React, { Component } from 'react'
import './TodoItem.css'
import { InputGroup, FormControl, Button } from 'react-bootstrap'

export default class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleTitleInput = this.handleTitleInput.bind(this);
        this.state = {
            todo: this.props.todo
        }
    }

    handleTitleInput(value) {
        this.setState((prevState) => ({
            ...prevState,
            todo: {
                id: prevState.todo.id,
                uuid: prevState.todo.uuid,
                content: prevState.todo.content,
                title: value,
            }
        }));
    }

    handleContentInput(value) {
        this.setState((prevState) => ({
            ...prevState,
            todo: {
                id: prevState.todo.id,
                uuid: prevState.todo.uuid,
                content: value,
                title: prevState.todo.title,
            }
        }));
    }

    render() {
        return (
            <div className="TodoItem">
                <InputGroup className="mb-3">
                    <FormControl
                        value={this.state.todo.title}
                        onChange={event => this.handleTitleInput(event.target.value)}
                        placeholder="Title"
                        aria-label="Title"
                        aria-describedby="title"
                    />
                </InputGroup>
                <InputGroup>
                    <FormControl
                        as="textarea"
                        rows="10"
                        value={this.state.todo.content}
                        onChange={event => this.handleContentInput(event.target.value)}
                        placeholder="Content"
                        aria-label="Content"
                        aria-describedby="content" />
                </InputGroup>
                <Button variant="outline-dark" size="lg" block onClick={() => this.props.onSave(this.state.todo)}>
                    Save
                </Button>
                <Button variant="outline-danger" size="lg" block onClick={() =>         this.props.history.goBack()}>
                    Cancel
                </Button>
            </div>

        )
    }
}