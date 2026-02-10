const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const {
  createSkill,
  getAllSkills,
  deleteSkill
} = require("../controllers/skillController");

router.post("/", protect, createSkill);
router.get("/", getAllSkills);
router.delete("/:id", protect, deleteSkill);

module.exports = router;
