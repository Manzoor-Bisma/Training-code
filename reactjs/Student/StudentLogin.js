import React, {useState,useContext,useEffect} from "react"
// import "./login.css"
import './Login.css';
import axios from "axios";
import StudentContext, { LoginContex } from "./StudentContext";
import { Navigate, useHistory, useNavigate} from 'react-router-dom';
const StudentLogin = () => {
    const {user,setUser,setAuth,auth}= useContext(LoginContex)
    const[show,setShow]= useState(false)
    // setAuth(true);
    // const history = useHistory();
    const navigate = useNavigate()

    // const [ user, setUser] = useState({
    //     email:"",
    //     password:""
    // })
    // const login=()=>{
    //     axios.post(`/students/login`,user)
    //     .then(res=>{alert(res.data.message)
    //         setUser(res.data.user)
    //         history.push(`/added`)
    //     })
    // }
    const login=()=>{
        axios.post(`/students/login`,user)
        .then(res=>{alert(res.data.message)
            setUser(res.data.user || {})
            if(res.data.user)
            {
            localStorage.setItem('id',JSON.stringify(user._id));
            setAuth(true);
            // history.push('/added')
            navigate('/added')
            // if(navigate('/'))
            // {
            //     <Navigate to='/added'/>
            // }
            }
        //    if(auth)
        //     {
        //         <Navigate to='/added'/>
        //     }
            else{
                
                // history.push('/');
                navigate('/')
                // localStorage.clear();

            }
        })     
    }

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value         
        })    
 }

   
// console.log(user)
useEffect(()=>{
    if(
localStorage.getItem('id') ){setAuth(true)} else setAuth(false)
    })

const toggle=()=>{
        
    setShow(!show)
    // setCnfrmShow(!cnfrmshow)
}
    return (
        <div className="login">
            <h1>Login</h1>
            <input type="text" name='email'  value={user.email} placeholder="Enter your Email" onChange={handleChange}></input>
            <input type={(show) ? "text":"password"} name="password" value={user.password} placeholder="Enter your Password" onChange={handleChange} ></input>
            <i className="fa fa-eye password-icon" onClick={()=>toggle()} style={{marginLeft:"50rem", cursor: "pointer",position: 'absolute',top:'219px',left:'-9px'}}></i>
            <a href="otp" className="text-danger" > Forget Password</a>
            
            <div className="button" onClick={()=>login()}>Login</div>
            <div>or</div>
            {/* <div className="button" onClick={()=>history.push('/signup')}>Register</div> */}
            <div className="button" onClick={()=>navigate('/signup')}>Register</div>
            {/* <div className="button" onClick={()=>navigate('/otp')}>Forget  <br/> Password</div> */}
            

        </div>
    )
}

export default StudentLogin