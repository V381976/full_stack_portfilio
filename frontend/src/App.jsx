import React from 'react'
 import Navbar from './components/Navbar';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/contact";
import Projects from "./pages/project";
import Footer from './pages/Footer';

function App() {
  return (
    < div className=" min-h-screen w-full bg-gradient-to-r from-blue-200 via-blue-100 to-blue-300"> 
  <Navbar/>
   <Home/>
   <About/>
   <Projects/>
   <Contact/>
   <Footer />
  </div>
  )
}

export default App



