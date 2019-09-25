const express = require('express');
const router = express.Router();

const data = [
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
        "poster":"6.jpg",
        "id":6
    }
];

router.get('/list', (req,res)=>{
	res.json(data);
});

module.exports = router;