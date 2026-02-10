const SkillPost = require("../models/SkillPost");

// CREATE SKILL POST
const createSkill = async (req, res) => {
  try {
    const { title, description, category, type } = req.body;

    if (!title || !description || !category || !type) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const skill = await SkillPost.create({
      user: req.userId,
      title,
      description,
      category,
      type
    });

    res.status(201).json(skill);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL SKILLS
const getAllSkills = async (req, res) => {
  try {
    const skills = await SkillPost.find().populate("user", "name email");
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE SKILL
const deleteSkill = async (req, res) => {
  try {
    const skill = await SkillPost.findById(req.params.id);

    if (!skill) {
      return res.status(404).json({ message: "Skill not found" });
    }

    if (skill.user.toString() !== req.userId) {
      return res.status(401).json({ message: "Not authorized" });
    }

    await skill.deleteOne();
    res.json({ message: "Skill deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createSkill, getAllSkills, deleteSkill };
