const { Router } = require("express");

const userRouter = Router()

const { createUser } = require("./controllers")

const { getUsers } = require("./controllers")

const { deleteUsers } = require("./controllers")

const { updateUsers } = require("./controllers")
 
userRouter.post("/user", createUser)

userRouter.get("/user", getUsers)

userRouter.delete("/user", deleteUsers)

userRouter.put("/user", updateUsers)



module.exports = userRouter;