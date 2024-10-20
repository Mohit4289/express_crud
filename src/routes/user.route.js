import Router from "express"
import {users, signup, update, login, deleteuser} from '../controller/user.control.js'

const userRouter = Router()

userRouter.get("/users", users)
userRouter.post("/signup", signup )
userRouter.post("/login", login)
userRouter.put("/update/:id", update)
userRouter.delete("/delete/:id", deleteuser)

export default userRouter
