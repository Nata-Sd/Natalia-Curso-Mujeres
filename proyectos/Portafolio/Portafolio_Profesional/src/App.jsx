import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  NeuralNoise from "./components/Header/Header";
import Home   from "./components/Home/Home";
import  NotFoundPage  from "./components/404/notfound";
import  Homel  from "./Pages/Home";

function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<NeuralNoise />} />
        <Route path="/Home" element={<Home />}/>
        <Route path="*" element={<NotFoundPage />} />
        <Route path='/Homecito' element={<Homel />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;
