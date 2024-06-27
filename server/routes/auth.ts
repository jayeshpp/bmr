import { Router } from "express";
import { login, signup, logout } from "../controllers/authController";
import { isAuthenticated } from "../middlewares/authMiddleware";

const router = Router();

router.post("/login", login);
router.post("/signup", isAuthenticated, signup);
router.post("/logout", isAuthenticated, logout);

export default router;
