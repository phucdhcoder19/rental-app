import express from "express";
import {
  getProperties,
  getProperty,
  createProperty,
} from "../controllers/propertyControllers";
import multer from "multer";
import { authMiddleware } from "../middleware/authMiddleware";
const router = express.Router();
const storage = multer.memoryStorage();
const Upload = multer({ storage: storage });
router.get("/", getProperties);
router.get("/:id", getProperty);
router.post(
  "/",
  authMiddleware(["manager"]),
  Upload.array("photos"),
  createProperty
);

export default router;
