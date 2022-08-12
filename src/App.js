import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Projects from "./routes/Projects";
import Blogs from "./routes/Blogs";
import Contact from "./routes/Contact";

function App() {
  return (
    <div className="page">
      <BrowserRouter>
        <Header />
        {/* set routes for each page */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;