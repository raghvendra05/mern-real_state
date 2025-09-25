import User from "../models/user.model.js"
import bcryptjs from "bcryptjs"
import { errorHandler } from "../utils/error.js"

export const signup = async (req, res ,next) => {

  const { username, email, password } = req.body

  const hashedPassword = bcryptjs.hashSync(password, 10)
  //no need to use await as it already use " 'hashSync' it already waits for the hash" , and "10" is salt no. means number of hash layers  

  const newUser = new User({ username, email, password: hashedPassword })
  const result = await newUser.save()

  try {
    res.status(201).json('user is been created in db')
    console.log(result)
  } catch (error) {
    // res.json({status:500,message:error.message})
    next(error)
  
  }
  



}