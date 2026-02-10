const mongoose = require("mongoose");

const skillPostSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    type: {
      type: String,
      enum: ["offer", "request"],
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("SkillPost", skillPostSchema);
