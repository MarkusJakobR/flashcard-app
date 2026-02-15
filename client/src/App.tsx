import Register from "./pages/Register";
import Login from "./pages/Login";
import api from "./api/axios";

function App() {
  const testBackend = async () => {
    try {
      const res = await api.get("/me");
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <Register />
      <hr />
      <Login />
      <hr />
      <button onClick={testBackend}>Test Backend</button>
    </div>
  );
}

export default App;
