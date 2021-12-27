import React from 'react'
import { Link,Navigate } from 'react-router-dom';

const Added = () =>{
    return (
        <>
        {/* <div>
            <h1  className="add"> student added successfully</h1>
            <button className="btn btn-success bg-dark" style={{marginLeft:'38rem'}}> <a href="/signup"> Add  More Students </a> </button>
            <button className="btn btn-success bg-warning" style={{marginLeft:'38rem'}}> <Link to="/list"> Show Students </Link> </button>
            <button className="btn btn-danger bg-warning" style={{marginLeft:'38rem'}}> <a href="/logout"> logout </a> </button>
        
        </div> */}

<nav class="navbar navbar-light bg-light">
<form class="container-fluid justify-content-start">
  <button class="btn btn-outline-success me-2" type="button" style={{marginLeft:'27rem'}}> <a href="/signup">Add  More Students </a></button>
  <button class="btn btn-outline-secondary me-4" type="button"> <Link to="/list">Show Students </Link></button>
  <button class="btn btn-outline-primary " type="button"> <a href="/logout"> logout </a></button>
  {/* <button class="btn btn-outline-primary " type="button"> <a href="/play"> Player </a></button> */}
  <button class="btn btn-outline-primary " type="button"> <Navigate to= '/play' /> player</button>

  
</form>
</nav>
</>
    )
}

export default Added;
