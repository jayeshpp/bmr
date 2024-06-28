import { Router } from "express";
import { login, logout, checkSession } from "../controllers/authController";
import { isAuthenticated } from "../middlewares/authMiddleware";

const router = Router();

router.post("/auth/login", login);
router.post("/auth/logout", isAuthenticated, logout);
router.get("/auth/checkSession", checkSession);

export default router;
