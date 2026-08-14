require("dotenv").config();

const express = require("express");
const cors = require("cors");

const authRoutes = require("./src/routes/authRoutes");

require("./src/initDatabase");

const app = express();

const port = 5000;


// ==============================
// CORS
// ==============================

app.use(
    cors({
        origin: "http://localhost:5173",
    })
);


// ==============================
// JSON
// ==============================

app.use(express.json());


// ==============================
// Routes
// ==============================

app.use("/api/auth", authRoutes);


// ==============================
// Home
// ==============================

app.get("/", (req, res) => {
    res.json({
        message: "Nexora backend is running 🚀",
    });
});


// ==============================
// Server
// ==============================

app.listen(port, () => {
    console.log(
        `Server running on http://localhost:${port}`
    );
});