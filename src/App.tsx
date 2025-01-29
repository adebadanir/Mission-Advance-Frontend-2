import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./pages/Login";
import Index from "./pages/Index";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
