import axios from 'axios';
import React ,{useRef, useState} from 'react'
import {Link} from 'react-router-dom'
import {toast, ToastContainer} from 'react-toastify'
import PasswordForm from './PasswordForm';
// import PasswordForm from './PasswordForm';

function OtpForm () {
    const emailRef = useRef();
    const [otpForm,showForm] = useState(true)
    const sendOtp = async ()=>{
        try{
            let url = `students/email-send`
            
            // axios.post(`/students/email-send`)
            let options ={
                method:'POST',
                url : url,
                data : {email:emailRef.current.value}
            }

            console.log(options)


            // const res = await fetch('/students/email-send',{
            //     method : "POST",
            //     headers:{
            //         "content-type":"application/json"
            //     },
          
            //     data : {email:emailRef.current.value}
                
            // })
            // console.log(res)
            // let response = await axios(res)
            // console.log(response)

            let response = await axios(options)
            let record = response.data;
            console.log(record)
            if(record.statusText == ' successful'){
                toast.success(record.message);
                showForm(false)
            
            }else{
                toast.error(record.message);
            }

        }catch(e){
            toast.error("something went wrong")
        }
    }


    return (
      <>
      <div className='container'>
          <div className='row login'>
              <div className='col-md-2'>
              </div>
              <div className='col-md-6'>
                  <ToastContainer />
                  <h3 className='' style={{marginTop:'18px', marginLeft:'-3rem', marginRight:'-7rem', marginBottom:'2rem'}}> Reset Password </h3>
               { otpForm ?  <form autoComplete='off' id="otpform" method='post'>
                      <div className='mb-3'>
                          <label className='form-label' style={{marginLeft:'-7rem', marginTop:'1rem', marginRight:'119px'}}  > Email:-</label>
                          <input type='email'className='form-control' name='email' placeholder='Enter Your Correct Otp Email'
                          ref={emailRef} autoComplete='off'  style={{marginLeft:'0rem', marginTop:'-30px', width:'18rem'}}/>
                      </div>

                      <div>
                        <button type='button' className='btn btn-primary' onClick={sendOtp}> send otp </button>
                        {/* nbsp; */}
                        <Link to='/'> <button type='button' className='btn btn-danger' style={{marginTop:'-73px', marginLeft:'12rem'}}>  back </button></Link>
                      </div>

                  </form>
                //   : <PasswordForm email={emailRef.current.value}/>

                : <PasswordForm email={emailRef.current.value} />
                // : <h1>  change password here </h1>
                }
              </div>

          </div>

      </div>
      </>
    )
}

export default OtpForm
