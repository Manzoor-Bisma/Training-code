import React ,{useState} from 'react';
import {useHistory, useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export function  SignUp () {
    const[show,setShow]= useState(false)
    const[show1,setShow1]= useState(false)
    const [student,setStudent] =useState({
        name:'',
        email:'',
        address:'',
        phone:'',
        branch:'',
        password:'',
        cpassword:''
    });
// const history =useHistory()
const navigate = useNavigate()
let name, value;
const handleInput =(event)=>{
    console.log(event);
    name=event.target.name;
    value=event.target.value;
    setStudent({...student, [name]: value});
}

 const AddStudent = async(event)=>{
        event.preventDefault();
        const { name,email,address,phone,branch,password,cpassword} = student;
        if (name && address && email&& phone && branch && password && (password === cpassword))
    {
        const res= await fetch('/students/register',{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,address,phone,branch,password,cpassword
            })
        });
        const data = await res.json();
        // history.push('/added')
        navigate('/added')
    }
    // else {
        // alert("invalid  student ")
        else {
            toast.error("Please fill your fields correctly",{position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
             })       
    }



        // if (data.status  === 404 || !data ){
        //         window.alert("invalid registration")
        //         console.log("invalid registration")
        // }else{
        //     window.alert(" registration successful")
        //         console.log(" registrated successfully")
        //         history.push('/added')

        // }
 }
 const toggle=()=>{   
    setShow(!show)
}
const toggle1=()=>{    
    setShow1(!show1)  
}
    return (
        <>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title"> Student Registration</h2>
                            <form className="register-form" id="register-form" method="POST">

                                <div className="form-group">
                                <label htmlFor="name"> name:- </label> <br/>
                                <input type="text" name="name" id="name" autoComplete="off" 
                                    value={student.name}  onChange={handleInput} placeholder="enter name"/>
                                </div>

                                <div className="form-group">
                                <label htmlFor="email"> email:- </label>  <br/>
                                <input type="email" name="email" id="email" autoComplete="off"
                                    value={student.email}   onChange={handleInput} placeholder="enter email"/>
                                </div>

                                <div className="form-group">
                                <label htmlFor="address"> address:- </label>  <br/>
                                <input type="text" name="address" id="address" autoComplete="off"
                                    value={student.address}  onChange={handleInput} placeholder="enter address"/>
                                </div>

                                <div className="form-group">
                                <label htmlFor="phone"> phone:- </label>  <br/>
                                <input type="number" name="phone" id="phone" autoComplete="off"
                                    value={student.phone}  onChange={handleInput} placeholder="enter phone"/>
                                </div>

                                <div className="form-group">
                                <label htmlFor="branch"> branch:- </label>  <br/>
                                <input type="text" name="branch" id="branch" autoComplete="off"
                                    value={student.branch}  onChange={handleInput} placeholder="enter branch"/>
                                </div>

                                <div className="form-group">
                                <label htmlFor="password"> password:- </label>  <br/>
                                <input type={(show) ? "text":"password"} name="password" id="password" autoComplete="off"
                                    value={student.password}  onChange={handleInput} placeholder="enter password"/>
                                <i className="fa fa-eye password-icon" onClick={()=>toggle()} style={{marginLeft:"50rem", cursor: "pointer",position: 'absolute',top:'473px',left:'45px'}}></i>
                                
                                </div>

                                <div className="form-group">
                                <label htmlFor="cpassword"> cpassword:- </label>  <br/>
                                <input type={(show1) ? "text":"password"} name="cpassword" id="cpassword" autoComplete="off"
                                    value={student.cpassword}   onChange={handleInput} placeholder="confirm password"
                                />
                                <i className="fa fa-eye password-icon" onClick={()=>toggle1()} style={{marginLeft:"50rem", cursor: "pointer" ,position: 'absolute',top:'419px',left:'45px'}}></i>
                                
                                </div>

                                <div className="form-group form-button">  <br/>
                                    <input type="submit"  name="signup"  id="signup" className="form-submit" 
                                    value="register" onClick={AddStudent}/>
                                </div>
                                <ToastContainer />
                            </form>

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default SignUp

