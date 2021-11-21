// import mongoose from 'mongoose';
const mongoose = require("mongoose")
const { Schema } = mongoose;

const StudentDetailSchema = new Schema({
  studentName :  String, 
  registrationNo : String,
  marks: String,
  
  
});
module.exports = mongoose.model("StudentDetail",StudentDetailSchema,"SL-Lab-13")