const express = require("express");
const dotenv = require("dotenv").config();
const path = require("path");
const colors = require("colors");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;
const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/aqua", require("./routes/aquaRoutes"));

// Server frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"))
  );
} else {
  app.get("/", (req, res) => res.send("Not in Production"));
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
