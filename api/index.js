import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

import userRouter from "./routes/user.route.js"

dotenv.config()

mongoose.connect(process.env.MONGO)
    .then((client) => {
        console.log("mongo running");
    }).catch(error => {
        console.log("mongo error");

    })

const app = express()


app.listen(3000, () => {
    console.log("server is alive at 3000")
})

app.use("/api/user",userRouter)