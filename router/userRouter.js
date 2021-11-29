import { Router } from "express";

import { addUser, allUsers, sendEmail } from "../controller/userController.js";

const userRouter = Router();

userRouter.get("/", allUsers);
userRouter.post("/add", addUser);
userRouter.get("/send", sendEmail);

export default userRouter;
