import React from 'react'
import { createContext ,useState, useContext} from 'react'
import { useHistory, useNavigate } from "react-router-dom";
import axios from 'axios';


export const LoginContex= createContext();

const StudentContext = (props) => {
    // const history=useHistory();
    // const navigate = useNavigate()
    const[user,setUser]=useState({password:'', email:''})
    const [Auth, setAuth] = useState(false)
    
const {email,password }= user;
    // const login=()=>{
    //     axios.post(`/students/login`,user)
    //     .then(res=>{alert(res.data.message)
    //         setUser(res.data.user || {})
    //         if(res.data.user)
    //         {
    //         localStorage.setItem('id',JSON.stringify(user._id));
    //         setAuth(true);
    //         // history.push('/added')
    //         navigate('/added')
    //         }
    //         else{
                
    //             // history.push('/');
    //             navigate('/')
    //             // localStorage.clear();

    //         }
    //     })     
    // }
    return (
        <div>
        <LoginContex.Provider value={{
            
            Auth,
            user,
            setAuth,
            setUser
             }}>
            {props.children}
        </LoginContex.Provider>
        
    </div>
    )
    
}

export default StudentContext
