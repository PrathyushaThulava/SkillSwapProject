import { loginUser } from "./services/authService";

function App() {
  const testBackend = async () => {
    try {
      const res = await loginUser({
        email: "testuser2@gmail.com",
        password: "123456",
      });
      console.log("Backend response:", res);
      alert("Backend connected! Check console for token.");
    } catch (err) {
      console.error("Error connecting backend:", err);
      alert("Backend connection failed");
    }
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>SkillSwap</h1>
      <p>Frontend → Backend connection test</p>
      <button onClick={testBackend}>Test Backend</button>
    </div>
  );
}

export default App;
