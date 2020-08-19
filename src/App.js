import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppNav from './components/Nav/Nav'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNav />
        <Main task="first task"/>
        <Footer />
      </div>
    );
  }
}

export default App;
