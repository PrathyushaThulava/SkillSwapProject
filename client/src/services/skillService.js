import API_BASE_URL from "../api";

export const getAllSkills = async () => {
  const res = await fetch(`${API_BASE_URL}/api/skills`);
  return res.json();
};

export const createSkill = async (data) => {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API_BASE_URL}/api/skills`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const getMySkills = async () => {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API_BASE_URL}/api/skills/my`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};

export const deleteSkill = async (id) => {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API_BASE_URL}/api/skills/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};
