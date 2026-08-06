import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Plans from "./pages/Plans";
import Blog from "./pages/Blog";
import Features from "./pages/Features";
import Domains from "./pages/Domains";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/features" element={<Features />} />
      <Route path="/domains" element={<Domains />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;