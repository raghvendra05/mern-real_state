import User from "../models/user.model.js"
import bcryptjs from "bcryptjs"
import { errorHandler } from "../utils/error.js"
import jwt from "jsonwebtoken"

export const signup = async (req, res, next) => {

  try {
    const { username, email, password } = req.body

    const hashedPassword = bcryptjs.hashSync(password, 10)
    //no need to use await as it already use " 'hashSync' it already waits for the hash" , and "10" is salt no. means number of hash layers  

    const newUser = new User({ username, email, password: hashedPassword })
    const result = await newUser.save()
    console.log(newUser, "newUser")

    res.status(201).json({ success: true, data: result, message: 'user is been created in db' })
    console.log(result, "rseult from signup")

  } catch (error) {
    // res.json({status:500,message:error.message})
    next(error)

  }

}


// export const signin = async (req, res, next) => {

//   try {
//     const { email, password } = req.body

//     const validUser = await User.find(email)


//     if (!validUser) return next(errorHandler(404, 'user not found during signin process'))

//     const validPassword = bcryptjs.compareSync(validUser.password,password)

//     if(!validPassword)  return next(errorHandler(401, 'wrong credentials'))

//     // dont want any random to wake-in and change email/pass user's account so we import jwt for token

//     const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET_KEY)

//     // saving these tokens as cookies
//     res
//     .cookie('access_token', token, { httpOnly: true })
//     .status(200)
//     .json(validUser)





//   } catch (error) {
//     // res.json({status:500,message:error.message})
//     next(error)

//   }

// }



export const signin = async (req, res, next) => {

  try {
    const { email, password } = req.body

    const validUser = await User.findOne({ email })

    // console.log(validUser, "valid user");


    if (!validUser) return next(errorHandler(404, 'user not found during signin process'))

    const validPassword = bcryptjs.compareSync(password, validUser.password)

    console.log(validPassword, "valid password");


    if (!validPassword) return next(errorHandler(401, 'wrong credentials'))

    // dont want any random to wake-in and change email/pass user's account so we import jwt for token

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET_KEY)

    const { password: pass, ...rest } = validUser._doc


    // saving these tokens as cookies
    res
      .cookie('access_token', token, { httpOnly: true })
      .status(200)
      .json(
        {data:rest,
        success:true,
        message:"signed in succesfully"
  })

  } catch (error) {
    // res.json({status:500,message:error.message})
    next(error)
  }

}