const express = require('express');
const router = express.Router();

const data = [
    {
        "phone": "9989789871", 
        "name": "Suman M R", 
        "email": "suman@email.com",
        "poster":"1.jpg",
        "id":1
    }, 
    {
        "phone": "99844489871", 
        "name": "Rathish", 
        "email": "rathish@email.com",
        "poster":"2.jpg",
        "id":2
    }, 
    {
        "phone": "9989789451", 
        "name": "Rajesh", 
        "email": "rajesh@email.com",
        "poster":"3.jpg",
        "id":3
    }, 
    {
        "phone": "8889789871", 
        "name": "Manoj", 
        "email": "manoj@email.com",
        "poster":"7.jpg",
        "id":4
    }, 
    {
        "phone": "7789789871", 
        "name": "Ashish", 
        "email": "ashish@email.com",
        "poster":"5.jpg",
        "id":5
    }, 
    {
        "phone": "8789789871", 
        "name": "Pramod", 
        "email": "pramod@email.com",
        "poster":"6.jpg",
        "id":6
    }, 
    {
        "phone": "8989789871", 
        "name": "Akash", 
        "email": "akash@email.com",
        "poster":"7.jpg",
        "id":7
    }, 
    {
        "phone": "6789789871", 
        "name": "Akshay", 
        "email": "akshay@email.com",
        "poster":"8.jpg",
        "id":8
    }, 
    {
        "phone": "9899789871", 
        "name": "Pratheek", 
        "email": "pratheek@email.com",
        "poster":"9.jpg",
        "id":9
    }, 
    {
        "phone": "8909789871", 
        "name": "Naveen", 
        "email": "naveen@email.com",
        "poster":"10.jpg",
        "id":10
    }, 
    {
        "phone": "7779789871", 
        "name": "Karthik", 
        "email": "karthik@email.com",
        "poster":"11.jpg",
        "id":11
    }, 
    {
        "phone": "8979789871", 
        "name": "Ravi", 
        "email": "ravi@email.com",
        "poster":"6.jpg",
        "id":12
    }];

router.get('/list', (req,res)=>{
	res.json(data);
});

module.exports = router;