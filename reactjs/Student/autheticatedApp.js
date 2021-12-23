import React,{ Component,useState,useContext } from 'react';
import { Route,useParams} from 'react-router-dom';
// import SignUp from './components/Student/SignUp';
// import "./App.css";
// import Added from './components/Student/Added';
// import StudentList from './components/Student/StudentList';
// import StudentDelete from './components/Student/StudentDelete';
// import StudentEdit from  './components/Student/StudentEdit';
// import EditStudent from './components/Student/EditStudent';
// import StudentLogin from './components/Student/StudentLogin';
// import StudentContext, { LoginContex } from './components/Student/StudentContext';
// import Protected from './components/Student/Protected';
import { useAuth } from './components/Student/AuthContext';
import {AuthenticatedRoutes, UnAuthenticatedRoutes} from './components/Student/routes';

// import Search from './components/Search';
// import  CrudContext  from './contexts/CrudContext';
// import  CrudHome from './components/CrudHome' ;
// import AddCrud from './components/AddCrud';
// import CrudAllUser from './components/CrudAllUser';  
// import CrudNotFound from './components/CrudNotFound';  
// import EditCrud from './components/EditCrud';
// import CrudNavbar from './components/CrudNavbar';
// import { EditUser } from './components/EditUser';




// import AddUserCrud  from './components/NewCrud/AddUserCrud';
// import  HeadingCrud  from './components/NewCrud/HeadingCrud';
// import  FrontCrud  from './components/NewCrud/FrontCrud';
// import  UserListCrud  from './components/NewCrud/UserListCrud';
// import CrudNotFound from './components/CrudNotFound';     
// import { EditCrud } from './components/EditCrud';
// import Todo from './components/Todo'; 
// import Main from './components/Infinitscroll/Main';
// import { EditUser } from './components/EditUser';
// import { GlobalProvider } from "./context/GlobalState";
// import { MainProvider } from './contexts/MainContext';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import BasicApi from './components/BasicApi'
// import {Route, Switch} from 'react-router-dom';
// import Card from './components/Card';
// import Hook from './components/Hook';
// import Ruter from './components/Ruter';
// import Hash from './components/Hash';
// import Ques from './components/Ques';
// import { ApiList } from './components/ApiList';
// import Pagination from './components/Pagination';
// import Posts from './components/Posts';
// import DemoApi from './components/DemoApi';
// import TryApis from './components/TryApis';
// import TryApi from './components/TryApi';
// import One from './components/One';
// import Test from './components/Test';
// import Main from './components/Infinitscroll/Main';
// const App = () => { 
//   return (
//     <>
    
//     <div >
//       <CrudContext>
//       <Router>
//         <CrudNavbar/>
//       <Switch>
//         <Route exact path="/" component={CrudHome}/>
//         <Route exact path="/adduser" component={AddCrud}/>
//         <Route exact path="/alluser" component={CrudAllUser}/>
//         {/* <Route path="*" component={CrudNotFound}/> */}
//         <Route exact path="/userlist" component={CrudHome}/>   
//         {/* <Route exact path="/edit/:id" component={EditCrud}/> */}
//         <Route exact path="/edit/:id" component={EditUser}/>

//         </Switch>
//         </Router>
//         </CrudContext>
       
//     </div>
//     </>
//   )
// }
const App =()=>{

  const {loggedIn} = useAuth();

  // console.log(`loggedIn ${loggedIn}`)
  // console.log(isAuth)
  return loggedIn ? <AuthenticatedRoutes />: <UnAuthenticatedRoutes/>
//   const {id} =useParams()
//   return(
//   // const[user,setLoginUser]=useState({})
//   <>
//  <StudentContext>

//     <>
//   <Route exact path="/signup" component={SignUp} />
//   <Route exact path="/added" component={Added} />
//   {/* <Route exact path="/list" component={StudentList} /> */}
//   <Route exact path={`/edit/:id`} component={StudentEdit} />
//   <Route exact path="/" component={StudentLogin} />
//   <Protected exact path="/list" component={StudentList}  />

//   {/* <Route path="/list" element={user && user._id ?<StudentList/>:<StudentLogin/> }/> */}
//   {/* <Route exact path={`/edit/:id`} component={EditStudent} /> */}


//   {/* <Route exact path="/delete" component={StudentDelete} /> */}

// </>

//    </StudentContext>
// </>
//   )

}
export default App;
