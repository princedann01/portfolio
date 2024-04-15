
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";

import Nav from "./components/nav";




function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />

         
         
        

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;