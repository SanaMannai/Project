const express = require('express');

const app = express();

const connectdb= require('./config/connectDB');

const userSchema = require("./Models/userModel");

require('dotenv').config();

connectdb();

let user1 = {
    name:"user1",
    email:"user1@gmail.com",
    password: "abc123456"
}
userSchema.insertMany({user1})
.then((doc)=>{
    console.log(doc);
})
.catch((err)=>{
    console.log(err);
})

const port = process.env.PORT;

// app.listen(port,(err)=>{
// if (err) {
//     console.error((err));
// }
// console.log('server run with success')
// })

app.listen(port, () => console.log("Server is running on port")) //tasti 3al exception