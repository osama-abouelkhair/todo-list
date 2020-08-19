import React, { Component } from 'react'
import './Nav.css'
import { Nav, InputGroup, FormControl, ButtonGroup, ToggleButton } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faSearch, faBars, faThLarge } from "@fortawesome/free-solid-svg-icons";

class AppNav extends Component {

    constructor() {
        super();
        this.handleViewButton = this.handleViewButton.bind(this);
    }

    state = {
        checked: false
    }

    handleViewButton() {
        this.setState((prevState) => {
            return ({ checked: !prevState.checked })
        });
    }

    render() {
        return (
            <div className="main-bar d-flex justify-content-between">
                <Nav defaultActiveKey="/home" as="ul">
                    <Nav.Item as="li">
                        <Nav.Link className="logo" href="/home">Todo</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className="search">
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="todos-search">
                                    <FontAwesomeIcon icon={faSearch} />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                aria-label="Search"
                                aria-describedby="todos-search"
                            />
                        </InputGroup>
                    </Nav.Item>
                </Nav>
                <Nav className="justify-content-end" as="ul">
                    <Nav.Item as="li">
                        <ButtonGroup toggle className="mb-2">
                            <ToggleButton
                                type="checkbox"
                                variant="secondary"
                                checked={this.state.checked}
                                value="1"
                                onChange={this.handleViewButton}
                            >
                                {this.state.checked ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faThLarge} />}

                            </ToggleButton>
                        </ButtonGroup>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link className="settings">
                            <FontAwesomeIcon  icon={faCog} />
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        )
    }
}

export default AppNav