const mongoose = require('mongoose');

const Bookschema = new mongoose.Schema({
    id: {
       type: String,
       required: true
   },
   title: {
       type: String,
       required: true
   },
   author: {
       type: String,
       required: true
   },
   published_date: {
       type: String,
       required: true
   },
   summary:{
       type: String,
       required: true
   }

 });

 Bookschema.virtual('primary_key').get(function() {
   return this.id; // Define a virtual property for the primary key
 });

 
 const collection = new mongoose.model("books_Collection", Bookschema);

 module.exports = collection;


 