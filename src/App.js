import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./assets/About";
import Home from "./assets/Home";
import Main from "./assets/Main";
function App() {
  return (
   <div>
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="main" element={<Main/>}/>
    </Routes>
   </Router>
   </div>
  );
}

export default App;
