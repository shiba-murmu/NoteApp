const express = require("express");
const {
    registerUser,
    loginUser,
    getCurrentUser
} = require("../controller/authController");

const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

// register 
router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected Route 
router.get("/me", authMiddleware, getCurrentUser)

module.exports = router;