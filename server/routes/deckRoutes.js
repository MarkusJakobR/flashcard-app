const express = require("express");
const router = express.Router();
const supabase = require("../config/supabase");
const verifyUser = require("../middleware/verifyUser");

// GET all decks for logged-in user
router.get("/", verifyUser, async (req, res) => {
  const { data, error } = await supabase
    .from("decks")
    .select("*")
    .eq("user_id", req.user.id);

  if (error) return res.status(500).json(error);
  res.json(data);
});

module.exports = router;
