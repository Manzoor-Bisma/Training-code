import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { useHistory, useNavigate, useParams } from 'react-router-dom';


const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

export function StudentEdit  () {
    const[show,setShow]= useState(false)
    const[show1,setShow1]= useState(false)

    const[name ,setName] = useState([])
    const[email ,setEmail] = useState([])
    const[address ,setAddress] = useState([])
    const[phone ,setPhone] = useState([])
    const[branch ,setBranch] = useState([])
    const[password ,setPassword] = useState([])
    const[cpassword ,setCpassword] = useState([])
    const[update ,setUpdate] = useState([])
    const { id } = useParams();
    const classes = useStyles();
    // let history = useHistory();
    const navigate = useNavigate();

 

    useEffect(() => {
        loadUserDetails();
         console.log(name)
        console.log(id)

    }, []);

    const loadUserDetails = async()=>{
        
        fetch(`/students/show/${id}`)
        .then((response) => {response.json().then((resp)=>
          {
            setUpdate(resp)
              setName(resp.name)
              setEmail( resp.email);
              setAddress( resp.address);
              setPhone( resp.phone);
              setBranch( resp.branch);
              setPassword( resp.password);
              setCpassword( resp.cpassword);
      })
      })
    }
       

 
    const editUserDetails=async()=>{
        let data={name, email, address , phone , branch , password , cpassword}
        fetch(`/students/edit/${id}`,{
             method :'PUT', 
             headers:{
                 'Accept':'application/json', 
                 'Content-Type':'application/json'},
        body:JSON.stringify(data)
         } ).then((result)=>{
        console.warn("result is :", result.data);
    })

        // history.push('/list') 
        navigate('/list') 
    } 


    const toggle=()=>{
        
        setShow(!show)
        // setCnfrmShow(!cnfrmshow)
    }
    const toggle1=()=>{
            
        setShow1(!show1)
        // setCnfrmShow(!cnfrmshow)
    }


    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4" style={{textAlign:'center'}}>Update  Student</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e)=>{setName(e.target.value)}} name='name' value={name} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e)=>{setEmail(e.target.value)}} name='email' value={email} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Address</InputLabel>
                <Input onChange={(e)=>{setAddress(e.target.value)}} name='address' value={address} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e)=>{setPhone(e.target.value)}} name='phone' value={phone} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Branch</InputLabel>
                <Input onChange={(e)=>{setBranch(e.target.value)}} name='branch' value={branch} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
             <FormControl>
                <InputLabel htmlFor="my-input">password</InputLabel>
                <Input  type={(show) ? "text":"password"} onChange={(e)=>{setPassword(e.target.value)}} name='password' value={password} id="my-input" aria-describedby="my-helper-text"  visible/>
                <i className="fa fa-eye password-icon" onClick={()=>toggle()} style={{marginLeft:"50rem", cursor: "pointer",position: 'absolute',top:'17px',left:'-181px'}}></i>

            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Confirm Password</InputLabel>
                <Input   type={(show1) ? "text":"password"} onChange={(e)=>{setCpassword(e.target.value)}} name='cpassword' value={cpassword} id="my-input" aria-describedby="my-helper-text" />
                <i className="fa fa-eye password-icon" onClick={()=>toggle1()} style={{marginLeft:"50rem", cursor: "pointer",position: 'absolute',top:'13px',left:'-181px'}}></i>
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit User</Button>
            </FormControl>
        </FormGroup>
    )
}

export default StudentEdit;