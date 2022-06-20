const {Router} = require("express");
const userController = require("../controllers/userController.js");

const userRouter = Router();

userRouter.post("/login", userController.loginUser);
userRouter.get("/users", userController.getUsers);
userRouter.delete("/users", userController.deleteUsers);


module.exports = userRouter;
