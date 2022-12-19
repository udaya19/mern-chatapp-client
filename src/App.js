import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import { loadUser } from "./api/user";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { loadLoggedInUser } from "./redux/userSlice";
import { Toaster } from "react-hot-toast";
function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const loggedInUser = async () => {
      const response = await loadUser();
      await dispatch(loadLoggedInUser(response));
    };
    if (localStorage.getItem("token")) loggedInUser();
    else {
      navigate("/login");
    }
  }, [dispatch, navigate]);
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={isAuthenticated && <Home />} />
        <Route path="/login" element={isAuthenticated ? <Home /> : <Login />} />
        <Route
          path="/register"
          element={isAuthenticated ? <Home /> : <Register />}
        />
      </Routes>
    </div>
  );
}

export default App;
