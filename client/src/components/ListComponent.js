import React, { Component } from 'react';

class ListComponent extends Component{
	state={
		data: [
    {
        "phone": "9989789871", 
        "name": "Name 1", 
        "email": "name1@email.com",
        "poster":"1.jpg",
        "id":1
    }, 
    {
        "phone": "9989789871", 
        "name": "Name 2", 
        "email": "name2@email.com",
        "poster":"2.jpg",
        "id":2
    }, 
    {
        "phone": "9989789871", 
        "name": "Name 3", 
        "email": "name2@email.com",
        "poster":"3.jpg",
        "id":3
    }, 
    {
        "phone": "9989789871", 
        "name": "Name 4", 
        "email": "name2@email.com",
        "poster":"7.jpg",
        "id":4
    }, 
    {
        "phone": "9989789871", 
        "name": "Name 5", 
        "email": "name2@email.com",
        "poster":"5.jpg",
        "id":5
    }, 
    {
        "phone": "9989789871", 
        "name": "Name 6", 
        "email": "name2@email.com",
        "poster":"7.jpg",
        "id":7
    }, 
    {
        "phone": "9989789871", 
        "name": "Name 8", 
        "email": "name2@email.com",
        "poster":"8.jpg",
        "id":8
    }, 
    {
        "phone": "9989789871", 
        "name": "Name 9", 
        "email": "name2@email.com",
        "poster":"9.jpg",
        "id":9
    }, 
    {
        "phone": "9989789871", 
        "name": "Name 10", 
        "email": "name2@email.com",
        "poster":"10.jpg",
        "id":10
    }, 
    {
        "phone": "9989789871", 
        "name": "Name 11", 
        "email": "name2@email.com",
        "poster":"11.jpg",
        "id":11
    }, 
    {
        "phone": "9989789871", 
        "name": "Name 12", 
        "email": "name2@email.com",
        "poster":"12.jpg",
        "id":12
    },{
        "phone": "9989789871", 
        "name": "Name 13", 
        "email": "name2@email.com",
        "poster":"13.jpg",
        "id":13
    }

]
	}
  render(){
    return(<div>
    	<div>
    <h2 className="page-header text-center">List of contacts</h2>
    <p className="text-center">
        <a className="btn btn-md btn-outline">Add Contact</a>
    </p>
    <ul className="media-list row contacts-container">
       {this.state.data.map((value, index)=>{
       	return(<li className="media col-md-4 col-lg-4 col-sm-5 col-xs-12 col-md-offset-1 well">
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
                    <a><span className="glyphicon glyphicon-pencil"></span></a>
                    <a  className="delete-contract">
                      <span className="glyphicon glyphicon-trash"></span>
                    </a>
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
}

export default ListComponent;
