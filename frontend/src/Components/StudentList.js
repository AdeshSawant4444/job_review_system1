import React, { useState, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import { BrowserRouter as Router , Route,Routes } from 'react-router-dom';
import axios from 'axios';
export default function StudentList() {
const [APIData,setAPIData] = useState([]);
useEffect(() => {

axios.get("http://127.0.0.1:8000/review/candidate_list/").then((response) => {
	setAPIData(response.data);});}
, []);

const navigate = useNavigate;
const setData = (data) => {
		console.log(data);
		let {id,first_name,last_name,email,academic_details,profesional_exp,phone_no,resume,status}=data;
		localStorage.setItem('id',id);
		localStorage.setItem('first_name',first_name);
		localStorage.setItem('last_name',last_name);
		localStorage.setItem('email',email);
		localStorage.setItem('academic_details',academic_details);
		localStorage.setItem('phone_no',phone_no);
		localStorage.setItem('profesional_exp',profesional_exp);
		
		localStorage.setItem('status',status);
		
		}


  
  return (
  <>   
  
     {
      
                APIData.map((data) => ( 
               <ul class="list-group list-group-numbered">
                <Link  onClick = {()=>setData(data)}  to='/studentinfo'>
                
                <li class=" list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div><div class="fw-bold">{data.first_name}</div>
      {data.email}</div>
    </div>
    <span class="badge bg-primary rounded-pill">{data.status}</span>
  </li>
  
                    
                    </Link>
  </ul>              
                ))
            }
 </>);     
 }

 
