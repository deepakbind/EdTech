import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CourseDetails from "./pages/CourseDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* ✅ Single source: Home page */}
        <Route path="/" element={<Home />} />

        {/* ✅ Course details */}
        <Route path="/course/:id" element={<CourseDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;