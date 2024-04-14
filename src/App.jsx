
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Contact from "./components/contact";
import About from "./components/about";
import Nav from "./components/nav";
import Portfolio from "./components/portfolio";



function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/portfolio" element={<Portfolio />} />
         
         
        

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;