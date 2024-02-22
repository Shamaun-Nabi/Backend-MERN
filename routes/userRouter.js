import expresss from "express";
import multer from "multer";
import { loginUser, registerUser } from "../controller/userAuthController.js";
import { storage } from "../utils/multerConfig.js";
const router = expresss.Router();

const uploadimage = multer({
  storage: storage,
}).single("avatar");

router.post("/register", uploadimage, registerUser);
router.post("/login",loginUser)
export default router;
