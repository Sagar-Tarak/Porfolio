import { Routes,Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Components/Pages/About"
import Projects from "./Components/Pages/Projects"
import Home from "./Components/Pages/Home"
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
