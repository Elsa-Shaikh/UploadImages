const express = require('express');
const connectToMongo = require("./database/db");
var cors = require('cors')
const Routes = require('./routes/userRoute');
require("dotenv").config();
connectToMongo(); // connect to database

const app = express();

const port = process.env.PORT;

app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json()); // middleware to use the json

app.use('/api',Routes);
app.use("/uploads",express.static('./uploads'));

// app.get('/',(req,res)=>{
//     res.send("Server Start");
// });

app.listen(port,()=>{
    console.log(`Upload Image Backend is running on the http://localhost:${port}`);
})
