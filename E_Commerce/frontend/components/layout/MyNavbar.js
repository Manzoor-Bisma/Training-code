import React from 'react'
import { Link } from 'react-router-dom'

function MyNavbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">ApnaBazar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {
                localStorage.getItem("myData") ?
                  <>
                  <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/users/show">Show-Data</Link>
                    </li>


                    <li className="nav-item">
                      <Link className="nav-link" to="/user/edit/:id">Edt-User</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/logout">Logout</Link>
                    </li>
                    


                  </>
                  :
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">Login</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/user/registration">SingUp</Link>
                    </li>




                  </>
              }






            </ul>
            <form className="d-flex">
              <input classNameName="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default MyNavbar
