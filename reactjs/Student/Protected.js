import { Route, Redirect } from 'react-router-dom';
// import  { useContext } from 'react'
// import { LoginContext } from '../../../context/loginContext'

const Protected=({auth,component:Component,...rest})=>{
    return(
        <Route {...rest} render={(props)=>{
            // if(auth) return <Component {...props}/>
            // if(!auth) return <Redirect to={{path:'/', state:{from:props.location}}}/>
        }}
        />
    )

}


export default Protected;