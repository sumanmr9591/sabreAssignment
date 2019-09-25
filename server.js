//get all dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');


//get api routes
const api = require('./server/routes/api');

//set app
const app = express();


//parsers for post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//point static route to client
//app.use(express.static(path.join(__dirname, 'client')));

//set app api
app.use('/api', api);
//serve static assets if in production
if(process.env.NODE_ENV === 'production'){
	app.use(express.static('client/build'));
	app.get('*', (req,res)=>{
       res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
});
}

//set port
const port = process.env.PORT || 5000;

//initialize server
const server = http.createServer(app);

//listen to server

server.listen(port, ()=>{
  console.log(`server is running on port ${port}`);
});