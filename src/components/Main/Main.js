import React, { Component } from 'react'
import TodoCard from '../TodoCard/TodoCard';
import { connect } from 'react-redux';


class Main extends Component {
    
    render() {
        const cardItems = this.props.data.map(item =>
            <TodoCard key={item.id} todo={item} handleOnClick={this.props.edit} />
        )

        return (
            <div className="d-flex flex-column">
                {cardItems}
            </div>
        )
    }
}

export default connect((state) => ({
    data: state
})
)(Main);