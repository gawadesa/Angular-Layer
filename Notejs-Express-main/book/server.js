const express=require('express');
const app=express();
const port=3000;

app.get('/',(req,resp)=>{
    resp.send("Welcome !");
})
const BookController=require('./controller.book');
const router = require("express").Router();

app.get("/api/books",BookController.findAllBook);
app.get("/api/books/:id",BookController.findByPK);
app.get("/api/books/:bookName",BookController.findBybookName);

app.use('/api/books', router);
app.listen(port,()=>{console.log("Server runnint http://localhost:3000 ");})