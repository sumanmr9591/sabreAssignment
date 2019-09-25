import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class ListComponent extends Component{
    componentDidMount(){
        //this.props.setContactList();
    }
  render(){
    return(<div className="listContainer">
    	<div>
    <h4 className="page-header text-center">List of contacts</h4>
    <div className="row buttonCover">
        <button onClick={this.enableAddUserFromComp.bind(this)} className="btn btn-primary float-right">Add contact</button>
    </div>
    <ul className="media-list row contacts-container">
       {this.props.data.map((value, index)=>{
       	return(<li key={value.id} className="media col-md-4 col-lg-4 col-sm-5 col-xs-12 col-md-offset-1 well">
            <div className="thumbnail col-md-4">
                <img className="media-object" src={process.env.PUBLIC_URL + value.poster} />
            </div>
            <div className="content col-md-8">
                <div className="media-heading">
                    <h3>{value.name}</h3>
                </div>
                <div className="media-body">
                    <div>
                        <span><strong>Phone Number:  </strong></span><span>{value.phone}</span>
                    </div>
                    <div>
                        <span><strong>Email:  </strong></span><span>{value.email}</span>
                    </div>
                </div>
                <br/>
                <div className="media-footer">
                <small>
                    <div className="row">
                     <div className="col-md-4 col-lg-4 col-sm-4 cpl-xs-4">
                            <button onClick={this.EditUser.bind(this, value)} className="btn btn-light" >Edit</button>
                     </div>
                     <div className="col-md-4 col-lg-4 col-sm-4 cpl-xs-4">
                            <button className="btn btn-secondary" onClick={this.deleteCurrentContact.bind(this, value.id)}>Delete</button>
                     </div>
                    </div>
                </small>
                </div>
            </div>
        </li>

       	)
       })}
    </ul>
</div>

    	</div>)
  }
  deleteCurrentContact(_id){
      this.props.deleteContact(_id);
  }
  enableAddUserFromComp(){
      this.props.enableAddUserFromReducer();
  }
  EditUser(user){
      this.props.editUserFromReducer(user);
  }
}

const mapStateToProps = (state)=>{
    return{
       data: state.data,
       enableAddUser: state.enableAddUser,
       addOrEdit: state.addOrEdit
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
       deleteContact: (id)=>{
           dispatch({type: 'DELETE_CONTACT', value: id});
       },
       enableAddUserFromReducer: ()=>{
           dispatch({type: 'ENABLE_ADD_USER'});
       },
       editUserFromReducer: (user)=>{
          dispatch({type: 'EDIT_USER_SHOW', value: user});
       },
       setContactList:(list)=>{
           axios.get(`/api/list`)
         .then((res)=>{
            dispatch({type: 'GET_USER', value: res.data});
       })
       .catch((e)=> console.log('Error in fetching data', e));
         }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListComponent);
