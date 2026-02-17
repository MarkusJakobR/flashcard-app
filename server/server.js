require("dotenv").config();

const express = require("express");
const cors = require("cors");
const verifyUser = require("./middleware/verifyUser");

const supabase = require("./config/supabase");

const deckRoutes = require("./routes/deckRoutes");

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

// Test DB route
app.get("/test-db", async (req, res) => {
  const { data, error } = await supabase.from("decks").select("*");

  if (error) return res.status(500).json(error);
  res.json(data);
});

app.get("/me", verifyUser, (req, res) => {
  res.json({
    message: "Authenticated",
    userId: req.user.id,
    email: req.user.email,
  });
});

app.use("/decks", deckRoutes);

app.listen(4000, () => console.log("Server on port 4000"));
