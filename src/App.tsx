import "./App.css";
import { Route, Routes } from "react-router";
import { Home } from "./assets/Pages/Home/Home";
import { Navbar } from "./assets/Navbar";
import { Dashboard } from "./assets/Pages/Dashboard/Dashboard";
import { Signup } from "./assets/Pages/Authentication/Signup";
import { Login } from "./assets/Pages/Authentication/Login";
import { Pricing } from "./assets/Pages/Pricing/Pricing";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* TODO */}
        {/* Signup */}
        <Route path="/signup" element={<Signup />} />
        {/* Login */}
        <Route path="/login" element={<Login />} />
        {/* Roadmap */}
        {/* Pricing */}
        <Route path="/pricing" element={<Pricing />} />
        {/* Settings */}
        {/* Signout */}
      </Routes>
    </>
  );
}

export default App;
