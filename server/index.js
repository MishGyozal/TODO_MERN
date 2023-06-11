const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


const app = express();

// json format
app.use(express.json());

//Port 
const PORT = process.env.PORT || 5500;

//use cors
app.use(cors());


const TodoItemRoute = require('./routes/todoItems');


//connect to mongodb ..
mongoose.connect(process.env.DB_CONNECT)
.then(()=> console.log("Database connected"))
.catch(err => console.log(err))


app.use('/', TodoItemRoute);



//connect to server
app.listen(PORT, ()=> console.log("Server connected") );
