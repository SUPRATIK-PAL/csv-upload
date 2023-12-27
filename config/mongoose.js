/** ------------------ IMPORTING PACKAGE ------------------ **/
const mongoose = require("mongoose");
require('dotenv').config();
const mongoURI = process.env.MONGO_URI;


/** ------------------ MAKING CONNECTION ------------------ **/

mongoose.connect(mongoURI).then(()=>{
    console.log('Connection successful!');
}).catch((err) => console.log("no connection " + err));

//setting it to db
const db = mongoose.connection;

/** ------------------ CHECKING CONNECTION ------------------ **/
//if error occurs
db.on("error", console.error.bind(console, "Error connecting to DB"));
// when db connects successfully
db.once("open", function(){
    console.log("Successfully connected to DB");
});

/** ------------------ EXPORTING DB ------------------ **/
module.exports = db;