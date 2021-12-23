// import React from "react"
// import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom"
// import {StudentLogin} from "./StudentLogin";
// import {StudentEdit} from "./StudentEdit";
// import {StudentList} from "./StudentList";
// import {Added} from "./Added";
// import {SignUp} from "./SignUp";
// import StudentContext from './StudentContext'

// export const AuthenticatedRoutes=()=>{
//     return(
//         <Router>
//         <div>
//           <Route exact path="/list" component={StudentList}  />
//           </div>
//         </Router>
//     )
// }
// export const UnAuthenticatedRoutes=()=>{

// return(
//     <>
//    <StudentContext>
//       <>
//     <Route exact path="/signup" component={SignUp} />
//     <Route exact path="/added" component={Added} />
//     <Route exact path={`/edit/:id`} component={StudentEdit} />
//     <Route exact path="/" component={StudentLogin} />
//   </>
//      </StudentContext>
//   </>
//     )
// };