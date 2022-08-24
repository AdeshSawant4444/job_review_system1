import React from "react";

import { useNavigate } from 'react-router-dom';
import StudentList from "./Components/StudentList";
import StudentInfo from "./Components/StudentInfo";
import AddStudent from "./Components/AddStudent";
import Navbar from "./Components/Navbar";

import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
export default function App() {


  return (
  <>
  <Navbar/>
  <Router>
   <Routes>
    <Route exact path = '/' element ={ <StudentList /> }> </Route>   
	   <Route exact path = '/studentinfo' element = {<StudentInfo/>}/>   
	<Route exact path = '/addstudent' element = {<AddStudent/>}/>   
	</Routes>
    
     </Router>
 </> );
}
