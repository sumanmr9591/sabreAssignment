import React, { Component } from 'react';
import './App.css';
import ListComponent from './components/ListComponent';
import AddnEditUserComponent from './components/AddnEditUserComponent';
import { connect } from 'react-redux';

class App extends Component{
  render(){
    return(<div>
       <header id="mainHeader"><h3 id="headLine">Contact Manager</h3></header>
       <div className="view-container container">
        {
        	this.props.enableAddUser ? <AddnEditUserComponent></AddnEditUserComponent>: <ListComponent></ListComponent>
        
        }
    </div>
    <footer id="footer"><p id="footerLine">Copyrights 2019</p></footer>
      </div>)
  }
}

const mapStateToProps = (state)=>{
	return{
		data: state.data,
		enableAddUser: state.enableAddUser,
        addOrEdit: state.addOrEdit
	}
}


export default connect(mapStateToProps)(App);
