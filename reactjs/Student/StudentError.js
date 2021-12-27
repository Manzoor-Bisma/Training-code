import React,{ useEffect } from 'react';
import { Route, useNavigate } from 'react-router-dom';


const StudentError = () => {
    const navigate= useNavigate()  
    useEffect(()=>{
        if(!localStorage.getItem("id"))
        {
            navigate ("/")
        }
        else if( localStorage.getItem("id")){
            if(<Route exact path="*" />){
                navigate("/added")
            }
        }
        

    })
    return (
        <>
        <div className="col-sm-6 offset-sm-3">
            <h1 > 404 ErrorPage</h1>
            <p >Opps! Page not Found..</p>
            </div>
        </>
    );
};

export default StudentError;