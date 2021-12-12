import { Router } from "express";

import { signin, signup, sendEmail } from "../controller/userController.js";

const userRouter = Router();

// userRouter.get("/", allUsers);
userRouter.post("/signin", signin);
userRouter.post("/signup", signup);
userRouter.get("/send", sendEmail);

export default userRouter;
