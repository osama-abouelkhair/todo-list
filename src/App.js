import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.css';
import AppNav from './components/Nav/Nav';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import TodoItem from './components/TodoItem/TodoItem';
import { todoData } from './services/todo-data';
import { todoStore, saveTodoItem } from './components/Main/TodoState';
import { Provider } from 'react-redux';

class App extends Component {

  constructor() {
    super();
    this.edit = this.edit.bind(this);
    this.save = this.save.bind(this);
    this.store = todoStore();
    this.store.subscribe(() => console.log(this.store.getState()));
  }


  edit(todoItem) {
    this.setState({
      todoItem
    })
    this.props.history.push("/item/" + todoItem.uuid);
  }


  save(todoItem) {
    this.store.dispatch(saveTodoItem(todoItem));
    this.props.history.goBack();
  }


  render() {
    return (
      <div className="App d-flex flex-column">
        <AppNav />
        <Switch>
          <Route exact={true} path="/" render={() =>
            <Provider store={this.store}>
              <Main edit={this.edit} />
            </Provider>} />
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
