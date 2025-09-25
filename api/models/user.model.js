import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username:{
    type:string,
    required:true,
    unique:true,
  },
    email:{
    type:string,
    required:true,
    unique:true,
  },
    password:{
    type:string,
    required:true,
  }
},{timestamps:true});

const User = mongoose.model("User",userSchema)     //"User" : this needs to be capital letter and singular as mongo will write it as "Users"

export default User;