import React,{useContext, useState, useEffect, createContext} from 'react';

const sleep = milliseconds =>{

}

const AuthContext = createContext({});

const AuthProvider=(props)=>{
    const [loggedIn , setLoggedIn]= useState(false)
    useEffect(()=>{
        // sleep(2000)
        // .then(()=> setLoggedIn(true))
    },[])

const login= () =>{
    sleep(2000)
    .then(()=> setLoggedIn(true))
    console.log(setLoggedIn)
}

  // const login=()=>{
    //     axios.post(`/students/login`,user)
    //     .then(res=>{alert(res.data.message)
    //         setUser(res.data.user)
    //         history.push(`/added`)
    //     })
       
    // }

const logout = ()=>{
    sleep (2000)
    .then(()=> setLoggedIn(false))
}
    const AuthContextValue = {
        login,
        loggedIn,
        logout

    };



    return <AuthContext.Provider value={AuthContextValue} {...props}
    />
}
const useAuth = ()=> React.useContext(AuthContext)
export {AuthProvider, useAuth}