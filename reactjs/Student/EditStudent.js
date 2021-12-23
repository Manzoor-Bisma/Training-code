// import React from 'react'
// import { useState,} from 'react';
// import { useEffect } from  'react/cjs/react.development';
// import {useParams,useHistory} from 'react-router-dom'
// import {
//     Form,
//     FormGroup,
//     Label,
//     Input,
//     Button
//   } from "reactstrap";


// export default function EditStudent() {
    
//     const [name, setName]=useState("")
//     const[data, setData]= useState("")
//     const history= useHistory()
//     const {id} = useParams();

//     useEffect(() => {
//         load();
//         console.log(name)
//         console.log(id)
//     }, []);
    

//     const load= async()=>{
        
//         fetch(`/students/show/${id}`)
//         .then((response) => {response.json().then((resp)=>
//           {
//             setData(resp)
//               setName(resp.name)
//       })
//       })
//     }
        
    

//     const editMe=async()=>{
        

//         let data={name,}
        
//         fetch(`/students/edit/${id}`,{
//              method :'PUT', 
//              headers:{
//                  'Accept':'application/json', 
//                  'Content-Type':'application/json'},
//         body:JSON.stringify(data)
//          } ).then((result)=>{
//         console.warn("result is :", result.data);

//     })

//         history.push('/list')  
//     }    

//     return (
//         <div>
//             <FormGroup className="container">
//             <p className="h1 text-center m-2">Edit User</p>
//             <Form>
//                 <Label htmlFor="my-input">first Name</Label>
//                 <Input onChange={(e)=>{setName(e.target.value)}} name='name' value={name} />
//             </Form>

            
//             <Form>
//                 <Button className="btn btn-primary mt-2 bg-dark" onClick={editMe}>Edit User</Button>
//             </Form>
//         </FormGroup>
    
//         </div>
//     )
// }
