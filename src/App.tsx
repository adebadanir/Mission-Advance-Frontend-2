import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Register } from "./pages/Register";
import useIsLoginStore from "./stores/loginStore";

export default function App() {
  const { isLogin } = useIsLoginStore();
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="login"
          element={isLogin ? <Navigate to="/" replace /> : <Login />}
        />
        <Route
          path="register"
          element={isLogin ? <Navigate to="/" replace /> : <Register />}
        />
      </Routes>
    </BrowserRouter>
  );
}
