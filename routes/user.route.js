// import express from "express";
// import { login, logout, register, updateProfile } from "../controllers/user.controller.js";
// import isAuthenticated from "../middlewares/isAuthenticated.js";
// import { singleUpload } from "../middlewares/mutler.js";
 
// const router = express.Router();

// router.route("/register").post(singleUpload,register);
// router.route("/login").post(login);
// router.route("/logout").get(logout);
// router.route("/profile/update").post(isAuthenticated,singleUpload,updateProfile);

// export default router;

import express from "express";
import { login, logout, register, updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { singleUpload } from "../middlewares/mutler.js"; // Ensure correct filename for Multer middleware

const router = express.Router();

// Register endpoint - file upload expected (e.g., profile image)
router.route("/register").post(
  singleUpload,
  register
);

// Login endpoint
router.route("/login").post(login);

// Logout endpoint
router.route("/logout").get(logout);

// Profile update endpoint - file upload expected
router.route("/profile/update").post(
  isAuthenticated,
  singleUpload,
  updateProfile
);

export default router;



