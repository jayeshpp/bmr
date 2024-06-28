import express from "express";
import {
  addProfile,
  deleteProfile,
  getProfileByUserId,
  register,
  updateProfile,
} from "../controllers/userController";
import { isAuthenticated } from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/users", register);
router.post("/users/profile", isAuthenticated, addProfile);
router.put("/users/:userId/profile", isAuthenticated, updateProfile);
router.get("/users/:userId/profile", isAuthenticated, getProfileByUserId);
router.delete("/users/:userId/profile", isAuthenticated, deleteProfile);

export default router;
