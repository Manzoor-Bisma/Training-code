import React,{ Component,useState,useContext } from 'react';
import { Route,useParams,Routes,BrowserRouter as Router } from 'react-router-dom';
import SignUp from './components/Student/SignUp';
import "./App.css";
import Added from './components/Student/Added';
import StudentList from './components/Student/StudentList';
import StudentDelete from './components/Student/StudentDelete';
import StudentEdit from  './components/Student/StudentEdit';
import EditStudent from './components/Student/EditStudent';
import StudentLogin from './components/Student/StudentLogin';
import StudentContext, { LoginContex } from './components/Student/StudentContext';
import Protected from './components/Student/Protected';
import Privateroutes from './components/Student/Privateroutes';
import StudentLogout from './components/Student/StudentLogout';
import OtpForm from './components/Student/OtpForm';

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
  // const {login}=useContext(LoginContex)
  // console.log(isAuth)
  const {id} =useParams()
  return(
  // const[user,setLoginUser]=useState({})
  <>
 <StudentContext>
    <>
    <Router>
  <Routes>
  <Route exact path="/signup" element={<SignUp/>} />
  <Route exact path="/added" element={<Privateroutes Component={Added}/> }/>
  {/* <Route exact path="/list" element={StudentList} /> */}
  <Route exact path={`/edit/:id`} element={<Privateroutes Component={StudentEdit}/>} />
  <Route exact path="/" element={<StudentLogin/>} />
  <Route exact path="/logout"element={<Privateroutes Component={StudentLogout}/>} />
  {/* <Route exact path="/list" element={Privateroutes } /> */}
  <Route exact path="/list" element={<Privateroutes Component={StudentList}/> } />

  </Routes> 
  </Router>
  {/* <Route exact path="/otp" component={OtpForm} /> */}


  {/* <Privateroutes exact path="/list" component={StudentList} element={<Privateroutes/>}  /> */}

  {/* <Route path="/list" element={user && user._id ?<StudentList/>:<StudentLogin/> }/> */}
  {/* <Route exact path={`/edit/:id`} component={EditStudent} /> */}


  {/* <Route exact path="/delete" component={StudentDelete} /> */}

</>

   </StudentContext>
</>
  )

}
export default App;

{/* <Router>
<switch>
  <Route exact path="/" component={Search} />
</switch>
</Router> */}

// --------------------------
 {/* <Route exact path="/" component={FrontCrud}/>
        <Route exact path="/add" component={AddUserCrud}/>
        <Route exact path="/userlist" component={UserListCrud}/>
        <Route exact path="/heading" component={HeadingCrud}/> */}
        {/* <Route exact path="/todo" component={Todo}/> */}
        {/* <Route exact path="/main" component={Main}/> */}



// -------------------------------filhal
       {/* <Route exact path="/" component={Ruter} />
        <Route exact path="/Todo" component={Todo} />
        <Route exact path="/card" component={Card} />
        <Route exact path="/hook" component={Hook} />
        <Route exact path="/hash" component={Hash} />
        <Route exact path="/ques" component={Ques} />
        <Route exact path="/api" component={BasicApi} />
        <Route exact path="/api/:id" component={ApiList}/>
        <Route exact path="/page" component={Pagination} />
        <Route exact path="/new" component={Posts} />
        <Route exact path="/demoapi" component={DemoApi} />
        <Route exact path="/one" component={One} />
        <Route exact path="/tor" component={TryApis} />
        <Route exact path="/test" component={Test} />
        <Route exact path="/test" component={Main} /> */}
        {/* <Route exact path="/edit/:id" component={EditUser}/> */}
        {/* <Route exact path="/" component={Front}/> */}
        {/* <Route exact path="/add" component={AddUser}/> */}
        {/* <Route exact path="/userlist" component={UserList}/> */}























// import './App.css';
// import ReactPaginate from 'react-paginate';

// function Pagination(){

//   const [data, setData]= useState([]);

//   const handlePageClick = (data)=>{
//     console.log(data.selected);
//   }




//     return(
//         <div>
//           <h1>pagination </h1>
//             <ReactPaginate
//             previousLabel={`previous`}
//             nextLabel={`next`}
//             breakLabel={`...`}
//             pageCount={45}
//             marginPagesDisplayed={2}
//             pageRangeDisplayed={4}
//             onPageChange={handlePageClick}
//             containerClassName={'pagination justify-content-center'}
//             pageClassName={'page-item'}
//             pageLinkClassName={'page-link'}
//             previousClassName={'page-item'}
//             previousLinkClassName={'page-link'}
//             nextClassName={'page-item'}
//             nextLinkClassName={'page-link'}
//             breakClassName={'page-item'}
//             breakLinkClassName={'page-link'}
//             activeClassName={'active'}

//             />
//         </div>
//     );
// }
// export default Pagination;


// import './App.css';
// import Pagination from './components/Pagination';

// function App(){
//   return(
//     <div className="App">
//       <div className="App-header">
//     <Pagination/>
//       </div>
//     </div>
//   )
// }
// export default App;
