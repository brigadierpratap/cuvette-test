import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import SkillTest from "./Components/SkillTest/SkillTest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h2>Home</h2>} />
          <Route path="skill-test" element={<SkillTest />} />
          <Route path="*" element={<h1>Other</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
