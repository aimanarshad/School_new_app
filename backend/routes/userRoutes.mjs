import express from "express";
const router = express.Router();
import {signupValidation, loginValidation} from "../middleware/userAuth.mjs";
import {login, signUp} from "../controller/userController.mjs";

router.post("/signup", signupValidation, signUp);
router.post("/login", loginValidation, login);


export default router;