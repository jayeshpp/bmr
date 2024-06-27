import { Router } from "express";
import { login, register, logout, checkSession } from "../controllers/authController";
import { isAuthenticated } from "../middlewares/authMiddleware";

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.post("/logout", isAuthenticated, logout);
router.get("/checkSession", checkSession);

export default router;
