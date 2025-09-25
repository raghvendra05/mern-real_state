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
  }
},{timestamps:true});

const User = mongoose.model("User",userSchema)     //"User" : this needs to be capital letter and singular as mongo will write it as "Users"

export default User;