import express from "express";
import { Login,Signup } from "../controller/user.Controller/index.js";

const UserRouter = express.Router();

UserRouter.post('/login', Login);
UserRouter.post('/signup', Signup);

export default UserRouter;