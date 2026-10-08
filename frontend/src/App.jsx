import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";

import DashboardLayout from "./layouts/DashboardLayout";

import Dashboard from "./pages/Dashboard";
import AIInterview from "./pages/AIInterview";
import Practice from "./pages/Practice";
import Performance from "./pages/Performance";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import Roadmap from "./pages/Roadmap";
import SavedQuestions from "./pages/SavedQuestions";
import Settings from "./pages/Settings";
import Interview from "./pages/Interview";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Pages */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
            </>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ============================= */}
        {/* Dashboard Pages WITH Sidebar */}
        {/* ============================= */}

        <Route element={<DashboardLayout />}>

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/ai-interview"
            element={<AIInterview />}
          />

          <Route
            path="/practice"
            element={<Practice />}
          />

          <Route
            path="/performance"
            element={<Performance />}
          />

          <Route
            path="/resume-analyzer"
            element={<ResumeAnalyzer />}
          />

          <Route
            path="/roadmap"
            element={<Roadmap />}
          />

          <Route
            path="/saved-questions"
            element={<SavedQuestions />}
          />

          <Route
            path="/settings"
            element={<Settings />}
          />

        </Route>

        {/* ============================= */}
        {/* Actual Interview - NO Sidebar */}
        {/* ============================= */}

        <Route
          path="/interview"
          element={<Interview />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;