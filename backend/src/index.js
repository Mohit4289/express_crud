import express from "express"
import mongoose from 'mongoose'
import userRouter from './routes/user.route.js'

 const app = express()

 mongoose.connect("mongodb+srv://srttiwari4289:BovhQTYHDDg9gXC5@backend.mltri.mongodb.net/")
 .then((result) => {
     app.listen(3000, () => {
         console.log("yo connected successful")
     })
 }).catch((err) => {
     console.log("sorry not connected to your db", err)
 });

 app.use(express.json())

 app.use("/api", userRouter)

