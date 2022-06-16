const { Router } = require("express");

const userRouter = Router()

const { createUser } = require("./controllers")

const { getUsers } = require("./controllers")
 
userRouter.post("/user", createUser)

userRouter.get("/user", getUsers)



module.exports = userRouter;