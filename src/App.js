import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import AppNav from './components/Nav/Nav';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import TodoItem from './components/TodoItem/TodoItem';
import { todoData } from './services/todo-data';

class App extends Component {

  constructor() {
    super();
    this.edit = this.edit.bind(this);
    this.save = this.save.bind(this);

  }


  edit(todoItem) {
    this.setState({
      todoItem
    })
    this.props.history.push("/item/" + todoItem.uuid);
  }


  save(todoItem) {
    todoData.splice(todoData.findIndex(item => item.id === todoItem.id), 1);
    todoData.push(todoItem);
    todoData.sort((firstTodo, secondTodo) => firstTodo.id - secondTodo.id);
    this.props.history.goBack();
  }


  render() {
    return (
      <div className="App d-flex flex-column">
        <AppNav />
        <Switch>
          <Route exact={true} path="/" render={() => <Main edit={this.edit} />} />
          <Route exact={true} path="/item/:id" render={() => <TodoItem
            todo={this.state.todoItem}
            onSave={this.save}
            history={this.props.history} />} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
