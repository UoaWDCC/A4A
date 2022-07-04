import { GlobalStyles } from "./components/styles/Global";
import Home from "./components/pages/Home";
import Program from "./components/pages/Program"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/pages/ContactUs";
import Career from "./components/pages/Career";

function App() {
  return (
    <BrowserRouter>
        <>
          <GlobalStyles/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/program" element={<Program />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/career" element={<Career />} />
          </Routes>
        </>
    </BrowserRouter>
  );
}

export default App;
