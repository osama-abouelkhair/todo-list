import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import AppNav from './components/Nav/Nav'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import NotFound from './components/NotFound/NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App d-flex flex-column">
          <AppNav />
          <Switch>
            <Route exact={true} path="/" render={() => <Main />} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
