import axios from 'axios';
import React ,{useRef} from 'react'
import {Link} from 'react-router-dom'
import {toast, ToastContainer} from 'react-toastify'

function OtpForm () {
    const emailRef = useRef();
    const sendOtp = async ()=>{
        try{
            let url = 'http://localhost:3700/students/email-send'
            // axios.post(`/students/email-send`)
            let options ={
                method:'POST',
                url : url,
                data : {email:emailRef.current.value}
            }

            let response = await axios(options)
            let record = response.data;
            // console.log(response)
            if(record.statusText == ' success'){
                toast.success(record.message);
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
                  <h3 className='' style={{margintop:'25px'}}> reset password </h3>
                  <form autoComplete='off' id="otpform" method='post'>
                      <div className='mb-3'>
                          <label className='form-label'> email</label>
                          <input type='email'className='form-control' name='email' 
                          ref={emailRef} autoComplete='off' />
                      </div>

                      <div>
                        <button type='button' className='btn btn-primary' onClick={sendOtp}> send otp </button>
                        {/* nbsp; */}
                        <Link to='/'> <button type='button' className='btn btn-danger'>  back </button></Link>
                      </div>

                  </form>

              </div>

          </div>

      </div>
      </>
    )
}

export default OtpForm
