 const { json } = require('express');
const express = require('express');
 const mongoose = require('mongoose');
 const router = require("../server/routes/book-route");
const app = express();

//Middlewares
app.use(express.json());
app.use('/books', router)  //localhoost:5000/books then the other route endpoint



mongoose.connect("mongodb+srv://deborah:dora123@cluster0.u33dk.mongodb.net/books?retryWrites=true&w=majority", {useNewUrlParser: true,useUnifiedTopology: true})
.then(()=>console.log("Connected to database"))
  .then(()=> {
    app.listen(5000)
  }).catch((err)=>console.log(err));