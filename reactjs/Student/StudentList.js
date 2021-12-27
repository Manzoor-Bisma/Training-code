import React ,{useState, useEffect}from 'react'
import { Link, useHistory ,useNavigate,useParams} from 'react-router-dom';



const StudentList = () => {
  const [students, setStudents] = useState([]);
  // let history = useHistory();
  const navigate = useNavigate()
  const {id} =useParams();
  useEffect(() => {
    getAllStudents();
  }, []);

  const deleteStudentData = async (id) => {
    const res = await fetch(`/students/${id}`,
    {
      method: "delete"
    })
    const value = await res.json().then((resp)=>{
      console.warn(resp)
    getAllStudents()

    })
    // console.log(value)
  }
const addStudentData=()=>{
  // history.push('/signup')
  navigate('/signup')
}
const showData=()=>{
  // history.push('/added')
  navigate('/added')
}
 const logout =()=>{
  //  history.push('/logout')
  navigate('/logout')
 }

  const getAllStudents = async () => {
    // const response = await fetch('/students/show')
    // const data= await response.json();
    // setStudents(data);
    // console.log(data)
    const res = await fetch('/students/show',{
      method : "GET",
      headers:{
          Accept: "application/json",
          "content-type":"application/json"
      },

      credentials:"include"
  })

  const data = await res.json()
  console.log(data)

  if(!res.status===200){
      const error= new Error(res.error)
      throw error
  }else{
      setStudents(data)
  }
  }
  return (


    <>
      <table className="table table-dark table-striped">
        <thead>
        {/* <h1 className='text-dark bg-light'style={{textAlign:'center', marginLeft:"3rem"}} > Student List </h1> */}
        <p className='h1 text-center text-dark' style={{float:'right', margintop: '-62px'}}>  Student List </p>
        <button className='btn btn-dark' style={{marginTop:'-5rem'}} color="secondary" variant="contained" onClick={() => addStudentData()}>Add More</button> 
        <button className='btn btn-dark' style={{marginTop:'-5rem', marginLeft:'0rem'}} color="secondary" variant="contained" onClick={() => showData()}>home </button> 
        <button className='btn btn-dark' style={{marginTop:'-5rem', marginLeft:'0rem'}} color="secondary" variant="contained" onClick={() => logout()}>logout </button> 
       
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>

        
        {students.map((student) => {
          return(
          <tr key={student._id}>
            <td>{student._id}</td> 
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.address}</td>
            <td>{student.phone}</td>
            <td>
              {/* <button color="primary" variant="contained" style={{ marginRight: 10 }} component={Link} to={`/edit/:id`}>Edit</button>  */}
              <button  className='btn btn-primary bg-dark'> <Link to={`/edit/${student._id}`}> edit  </Link> </button>
              <button className='btn btn-danger ' onClick={() => deleteStudentData(student._id)}>Delete</button> 
            </td> 
          </tr>
          )    
        })
        }
        </tbody>
      </table>
    </>
  )
}

export default StudentList;
