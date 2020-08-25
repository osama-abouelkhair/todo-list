import React, { Component } from 'react'
import TodoCard from '../TodoCard/TodoCard';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';


class Main extends Component {

    render() {
        const cardItems = this.props.data.map(item =>
            <TodoCard key={item.id} todo={item} handleOnClick={this.props.edit} />
        )

        return (
            <div>
                <Button variant="secondary" size="lg" onClick={() => this.props.history.push('/item/new')}>
                    Add a Todo
                </Button>

                <div className="d-flex flex-column">
                    {cardItems}
                </div>
            </div>
        )
    }
}

export default connect((state) => ({
    data: state
})
)(Main);