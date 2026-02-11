const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Allow requests from your frontend
app.use(
  cors({
    origin: "http://localhost:5173", // your React dev URL
    credentials: true,
  }),
);

app.use(express.json());

app.get("/", (req, res) => res.send("API running"));

app.listen(4000, () => console.log("Server on port 4000"));
