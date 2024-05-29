const mongoose = require('mongoose');

const connectToDatabase = mongoose.connect("mongodb://127.0.0.1:27017/Crud_Swagger");

connectToDatabase.then(() => {
    console.log("Database Connected Successfully");
  
  })
  
  .catch(() => {
     console.log("Database cannot be Connected");
  
  });

  module.exports = connectToDatabase;
