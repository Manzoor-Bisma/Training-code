import React,{useContext} from 'react';
import { Navigate, Redirect, useHistory } from 'react-router-dom';
import StudentContext, {LoginContex} from './StudentContext';
import StudentList from './StudentList';
import StudentLogin from './StudentLogin';

const Privateroutes = ({Component}) => {
  const {Auth}=useContext(LoginContex)
    const auth = Auth; 
    return auth ? <Component/> :<Navigate to="/"/>;
}
export default Privateroutes;


