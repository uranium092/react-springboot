import React, { useEffect, useState } from "react";
import { BrowserRouter as Router,
    Link,
    Route,
    Routes,
    useNavigate
 } from "react-router-dom";
import { Index } from "./components/Index";
import { Login } from "./components/Login";

const App=()=>{
    return (
        <Router>
            
            <Routes>
                <Route path="/" element={<Index/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/logged" element={<Logged></Logged>}></Route>
            </Routes>
        </Router>
    );

};
export default App;

const Logged=()=>{
    return(
        <h1>ESTÁS LOGUEADO</h1>
    );
};