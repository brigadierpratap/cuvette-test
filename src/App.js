import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import SkillTest from "./Components/SkillTest/SkillTest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SkillTest />} />
          <Route path="skill-test" element={<SkillTest />} />
          <Route path="*" element={<Navigate to={"/skill-test"} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
