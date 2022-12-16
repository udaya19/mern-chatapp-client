import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { loadUser } from "./api/user";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { loadLoggedInUser } from "./redux/userSlice";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const loggedInUser = async () => {
      const response = await loadUser();
      await dispatch(loadLoggedInUser(response));
    };
    if (localStorage.getItem("token")) loggedInUser();
  }, [dispatch]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
