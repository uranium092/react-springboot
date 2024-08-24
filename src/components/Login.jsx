import { Alert, Button, FormControl, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login=()=>{

    const goTo=useNavigate();

    const [data,setData]=useState({correo:"",contrasena:""});

    const [login,setLogin]=useState({mss:"alert alert-danger", hidden:true, txt:"Datos Erroneos"});

    const values=(e)=>{
        setData( { ...data,[e.target.name]:e.target.value } );
    }

    const validate=async(e)=>{
        let response=await fetch("http://localhost:8080/dan/existenciaUsuario", {method:"POST", headers:{'Content-Type':"application/json"}, body:JSON.stringify(data)});
        if(response.status==404){
            setLogin({mss:"alert alert-danger", hidden:false, txt:"Datos Erroneos"});
        }else{
            setLogin({mss:"alert alert-success", hidden:false, txt:"Ok . . ."});
            setTimeout(()=>{
                goTo("/logged");
            },2000);
        }
    }

    return(
        <div className="container">
            <form onSubmit={(e)=>{
                e.preventDefault();
                validate();
            }}>
                <FormControl>
                <TextField name="correo" onChange={values} id="filled-basic" label="Correo" required variant="filled" />
                <br />
                <TextField name="contrasena" onChange={values} id="filled-basic" label="Contraseña" variant="filled" required /> <br />
                <Button variant="outlined" type="submit">Iniciar Sesión</Button> <br></br>
                <div hidden={login.hidden} className={login.mss}>{login.txt}</div>
                </FormControl>
            </form>
        </div>
    );
};