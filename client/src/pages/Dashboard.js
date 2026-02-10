import { useEffect, useState } from "react";
import {
  getAllSkills,
  getMySkills,
  createSkill,
  deleteSkill,
} from "../services/skillService";
import "./Dashboard.css";

function Dashboard() {
  const [skills, setSkills] = useState([]);
  const [mySkills, setMySkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    type: "offer",
  });

  // Load data once
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const all = await getAllSkills();
        const mine = await getMySkills();
        setSkills(all || []);
        setMySkills(mine || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title || !form.description || !form.category) {
      alert("Please fill all fields");
      return;
    }

    try {
      setSubmitting(true);
      await createSkill(form);
      setForm({
        title: "",
        description: "",
        category: "",
        type: "offer",
      });

      const all = await getAllSkills();
      const mine = await getMySkills();
      setSkills(all);
      setMySkills(mine);
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this skill?")) return;

    try {
      await deleteSkill(id);
      setMySkills(mySkills.filter((s) => s._id !== id));
      setSkills(skills.filter((s) => s._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="dashboard">
      {/* CREATE SKILL */}
      <div className="section">
        <h2>Create Skill</h2>

        <form className="skill-form" onSubmit={handleSubmit}>
          <input
            name="title"
            placeholder="Skill title"
            value={form.title}
            onChange={handleChange}
          />

          <input
            name="category"
            placeholder="Category (e.g. Web Development)"
            value={form.category}
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Skill description"
            value={form.description}
            onChange={handleChange}
          />

          <select name="type" value={form.type} onChange={handleChange}>
            <option value="offer">Offer</option>
            <option value="request">Request</option>
          </select>

          <button type="submit" disabled={submitting}>
            {submitting ? "Adding..." : "Add Skill"}
          </button>
        </form>
      </div>

      {/* ALL SKILLS */}
      <div className="section">
        <h2>All Skills</h2>

        {loading ? (
          <p className="muted">Loading skills...</p>
        ) : skills.length === 0 ? (
          <p className="muted">No skills posted yet.</p>
        ) : (
          <div className="skill-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill._id}>
                <h3>{skill.title}</h3>
                <p className="category">{skill.category}</p>
                <p>{skill.description}</p>
                <span className={`badge ${skill.type}`}>
                  {skill.type}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* MY SKILLS */}
      <div className="section">
        <h2>My Skills</h2>

        {mySkills.length === 0 ? (
          <p className="muted">You haven’t added any skills yet.</p>
        ) : (
          <div className="skill-grid">
            {mySkills.map((skill) => (
              <div className="skill-card" key={skill._id}>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(skill._id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
