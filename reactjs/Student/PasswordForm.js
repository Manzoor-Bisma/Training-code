import React ,{useState} from 'react'
import axios from 'axios'
import { ToastContainer , toast} from 'react-toastify'
import {Link,useHistory, useNavigate} from 'react-router-dom'


function PasswordForm  (props)  {
 const [inputField , setInputField] = useState({
     otpCode:'',
     password:'',
     cpassword:'',
 })
//  const history = useHistory()
const navigate = useNavigate()

 const [errField, setErrField] = useState({
     otpCodeErr:'',
     passwordErr:'',
     cpasswordErr:'',
 })
  const validForm = ()=>{
      let formIsValid = true;
      setErrField({
          otpCodeErr:'',
          passwordErr:'',
          cpasswordErr:'',
      })
    if (inputField.otpCode == ''){
        formIsValid = false
        setErrField(prevState =>({
            ...prevState, otpCodeErr : "please enter otp code"
        }))
    }
    if (inputField.password == ''){
        formIsValid = false
        setErrField(prevState =>({
            ...prevState, passwordErr : "please enter  password"
        }))
    }
    if (inputField.cpassword == ''){
        formIsValid = false
        setErrField(prevState =>({
            ...prevState, cpasswordErr: "please enter  confirm password"
        }))
    }
    if(inputField.cpassword !='' && inputField.password != inputField.cpassword){
        formIsValid = false;
        setErrField(prevState =>({
            ...prevState,cpasswordErr: 'password are not matched'
        }))
    }
    return formIsValid
  }
 const inputHandler = (e) =>{
     setInputField ({...inputField, [e.target.name]: e.target.value })
 }

 const submitButton = async ()=>{
     if(validForm()){
     Object.assign(inputField,props)
     console.log(inputField,props)
     
         let url = `students/change-password`
         let options = {
             method :'POST',
             url: url,
             data: inputField,
         }
         try{
             let response = await axios(options)
             console.log(response)
             if(response.data.statusText == 'successful'){
                 toast.success( response.data.message);
                //  toast.success("pleaseeee run ")
                 navigate('/')
                //  localStorage.setItem('token', response.data.token)
                //  setTimeout(()=>{
                //     //  history.push('/')
                //     navigate('/')
                //  },2000)
             }else{
                 toast.error(response.data.message);
             }
         }catch(e){
             toast.error("something went wrong")
         }
     }else{
         toast.error("invalid form")
     }
 }
//  const changePassword = async ()=>{
//     //  history.push('/reset-password')
//     navigate('/reset-password')
//  }
 return(
     <form autoComplete='off' action="" method="post">
         <ToastContainer/>
         <div className='mb-3' >
             <label className='form-label' style={{marginLeft:'-14rem', marginTop:'-1rem'}}> Otp Code </label>
             <input type='email' className='form-control' name='otpCode' maxLength="4" placeholder= 'Enter 4 Digit Otp Code'
             autoComplete="off" value={inputField.otpCode} onChange={inputHandler} style={{marginLeft:'5rem', marginTop:'-2rem', width:'12rem'}} />
             {
                 errField.otpCodeErr.length >0 && <span className='error'>{errField.otpCodeErr}</span>
             }

         </div>
         <div className='mb-3'>
             <label className='form-label' style={{marginLeft:'-14rem', marginTop:'-1rem'}} > Password </label>
             <input type='password' className='form-control' name='password' placeholder='Enter New Password'
             autoComplete="off" value={inputField.password} onChange={inputHandler}  style={{marginLeft:'5rem', marginTop:'-2rem', width:'12rem'}} />
             {
                 errField.passwordErr.length >0 && <span className='error'>{errField.passwordErr}</span>
             }
             {/* <span className='forget' onClick={changePassword}>Forget Password</span> */}

         </div>
         <div className='mb-3'>
             <label className='form-label' style={{marginLeft:'-11rem', marginTop:'-1rem'}}> Confirm Password </label>
             <input type='password' className='form-control' name='cpassword' placeholder='Confirm Your Password'
             autoComplete="off" value={inputField.cpassword} onChange={inputHandler}   style={{marginLeft:'5rem', marginTop:'-2rem', width:'12rem'}}/>
             {
                 errField.cpasswordErr.length >0 && <span className='error'>{errField.cpasswordErr}</span>
             }
             {/* <span className='forget' onClick={changePassword}>Forget Password</span> */}

         </div>
         <div>
             <button type='button' className='btn btn-primary' onClick={submitButton}  style={{marginLeft:'-5rem'}} >
                 Change Password
             </button>
             <Link to='/'> <button type='button' className='btn btn-success' style={{marginTop:'-76px', marginLeft:'13rem'}}>back</button>  </Link>

         </div>

     </form>
 )
}

export default PasswordForm;
