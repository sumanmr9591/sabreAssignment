import React, { Component } from 'react';
import './App.css';
import ListComponent from './components/ListComponent';
import AddUserComponent from './components/AddUserComponent';
import EditUserComponent from './components/EditUserComponent';

class App extends Component{
  render(){
    return(<div>
       <header id="mainHeader"><p id="headLine">Contact Manager</p></header>
       <div className="view-container container">
        <ListComponent></ListComponent>
    </div>
      </div>)
  }
}

export default App;
