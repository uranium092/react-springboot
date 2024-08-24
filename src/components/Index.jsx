import { Alert } from "@mui/material";
import React from "react";
import {Link} from "react-router-dom"

export const Index=()=>{
    return(
        <div>
            <Link to="/">Index</Link><br></br>
            <Link to="/login">Login</Link>
            <Alert severity="success">ESTAMOS EN LA PAGINA INICIAL</Alert>
        </div>
        
    );
};