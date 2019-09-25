import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddnEditUserComponent extends Component{
  render(){
    return(<div id="formContainer">
    {this.props.addOrEdit === "add" ? <h3 className="page-header text-center">Add Contact</h3> : <h3 className="page-header text-center">Edit Contact</h3>}
    <form className="form-horizontal contract-form" name='contactForm'>
        <div className="form-group">
            <label className="col-sm-4 control-label">Full name:</label>
            <div className="col-sm-6">
                <input type="text" ref={(input)=> this.name= input} className="form-control contact-name-input" defaultValue={this.props.currentUser.name} />
            </div>
        </div>
        <div className="form-group">
            <label className="col-sm-4 control-label">Email address:</label>
            <div className="col-sm-6">
                <input type="email" ref={(input)=> this.email= input} className="form-control contact-email-input" defaultValue={this.props.currentUser.email}  />
            </div>
        </div>
        <div className="form-group">
            <label className="col-sm-4 control-label">Telephone number:</label>
            <div className="col-sm-6">
                <input type="tel" ref={(input)=> this.phone= input} className="form-control contact-tel-input" defaultValue={this.props.currentUser.phone} />
            </div>
        </div>
        <div className="form-group row buttonCoverAdd">
            <div className="col-sm-offset-4 col-sm-3 col-md-2 col-lg-2">
               {
               	this.props.addOrEdit === 'add' ?  <button type="button" onClick={this.updateUser.bind(this)} className="btn btn-info">Add Contact</button>:
               	 <button type="button" onClick={this.EditUser.bind(this)} className="btn btn-info">Edit Contact</button>
               }
            </div>
            <div className="col-sm-3 col-md-2 col-lg-2">
                <button type="button" onClick={this.disableAddUser.bind(this)} className="btn btn-info">Cancel</button>
            </div>
        </div>
    </form>
</div>)
  }
  updateUser(){
  	let id = this.props.data.length+2;
  	let user = {
  		"phone": this.phone.value, 
        "name": this.name.value, 
        "email": this.email.value,
        "poster": `${id}.jpg`,
        "id": id
  	}
  	this.props.updateUserFromReducer(user);
  }
  EditUser(){
  	let id = this.props.currentUser.id;
  	let user = {
  		"phone": this.phone.value, 
        "name": this.name.value, 
        "email": this.email.value,
        "poster": `${id}.jpg`,
        "id": id
  	}
  	this.props.editUserFromReducer(user);
  }
  disableAddUser(){
   this.props.disableAddUserFromReducer();
  }
}

const mapStateToProps = (state)=>{
	return{
       data: state.data,
       enableAddUser: state.enableAddUser,
       addOrEdit: state.addOrEdit,
       currentUser: state.currentUser
    }
}

const mapDispatchToProps = (dispatch)=>{
	return{
     updateUserFromReducer: (user)=>{
     	dispatch({type:'EDIT_USER', value: user, operation: 'add'});
     },
     disableAddUserFromReducer : ()=>{
     	dispatch({type: 'DISABLE_ADD_USER'});
     },
     editUserFromReducer: (user)=>{
     	dispatch({type: 'EDIT_USER', value: user, operation: 'edit'});
     }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddnEditUserComponent);
