import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Routing = () => {
    return (
        <div>
            <h1>Routing..</h1>
            <nav>
            <ul>
                <li>home</li>
                <li>login</li>
                <li>About</li>
            </ul>
        </nav>

        <Routes>
            <Route path="/home" element={<Home/>} ></Route>
            <Route path="/about" element={<About/>}/>
            
        </Routes>
        </div>
    );

    function Home(){
        return(
            <>
            <h3>Home page</h3>
            </>
        )
    }

    function About(){
        return(
            <>
            <h3>About page</h3>
            </>
        )
    }
}

export default Routing;
