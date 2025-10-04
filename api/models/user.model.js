import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username:{
    type:String,
    required:true,
    unique:true,
  },
    email:{
    type:String,
    required:true,
    unique:true,
  },
    password:{
    type:String,
    required:true,
  },
  photo:{
    type:String,
    default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_lvjjRAVDQ-nBDq_4dy1xCyRjjDaHV-Tqcw&s"
  },
},{timestamps:true});

const User = mongoose.model("User",userSchema)     //"User" : this needs to be capital letter and singular as mongo will write it as "Users"

export default User;