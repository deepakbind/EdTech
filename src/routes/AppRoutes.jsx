import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Programs from "../pages/Programs";
import About from "../pages/About";
import Alumni from "../pages/Alumni";
import CourseDetails from "../pages/CourseDetails";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/about" element={<About />} />
      <Route path="/alumni" element={<Alumni />} />
      <Route path="/course/:id" element={<CourseDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}