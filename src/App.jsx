

import React from "react";

import Navbar from "../src/Components/Navbar";
import Home from "../src/Components/Home";
import About from "../src/Components/About";
import Skills from "../src/Components/Skills";
import Projects from "../src/Components/Projects";
import Contact from "../src/Components/Contact";
import "./App.css"



function App() {

    return(
        <div>
            <Navbar/>
            <Home/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
            {/* <NameAnimation/> */}
        
        </div>
    )
}

export default App;

console.log("App rendered");
