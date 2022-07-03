import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global";
import Home from "./components/pages/Home";
import Programme from "./components/pages/Programme"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/pages/ContactUs";
import News from "./components/pages/News";

const theme = {
  colors: {
    header: '#fff',
    body: '#fff',
    footer: '#003333',
  }
}

function App() {
  return (
    <BrowserRouter> 
      <ThemeProvider theme = {theme}>
        <>
          <GlobalStyles/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programme" element={<Programme />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
