const express = require("express");
const db = require("./src/database");
require("./src/initDatabase");
const app = express();

const port = 5000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message : "Nexora backend is running 🚀",
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})