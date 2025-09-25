import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

import userRouter from "./routes/user.route.js"
import authRouter from "./routes/auth.route.js"

dotenv.config()


mongoose.connect(process.env.MONGO)
    .then((client) => {
        console.log("mongo running");
    }).catch(error => {
        console.log("mongo error");

    })

const app = express()

app.use(express.json())//without tis we will not be able to send psot requset in bruno

app.listen(3000, () => {
    console.log("server is alive at 3000")
})

app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)

// err= error that will come in middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || "Internal server error"
    
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})
