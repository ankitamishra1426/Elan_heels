import express from "express";
import { 
    signup, 
    login,
    getMe,
 } from "../controllers/authController.js";
import protect from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/me",protect,getMe);

export default router;

/*  login token
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2YWJiZTgyNTdlZGE4ODgzMDY0MDlkYTciLCJpYXQiOjE3OTA2OTk5MTYsImV4cCI6MTc5MzI5MTkxNn0.ZWrExybveS7P8UYWK-ZeYZ-gTegdSl7uTrmk9Nk4cdE
*/