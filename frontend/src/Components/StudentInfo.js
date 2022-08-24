import React,{useState,useEffect} from 'react';
import { useLocation,useNavigate } from 'react-router-dom';

import axios from 'axios';
export default function StudentInfo() {
const [first_name,setFirstName] = useState('');
const [last_name,setLastName] = useState('');
const [email,setEmail] = useState('');
const [academic_details,setAcDetails] = useState('');
const [phone_no,setPhoneNo] = useState('');
const [profesional_exp,setProfExp] = useState('');
const [resume,setResume] = useState('');
const [status,setStatus] = useState(null);
const [id,setId] = useState(null);
let navigate = useNavigate();

useEffect(() => {

		setId(localStorage.getItem('id'));
		setFirstName(localStorage.getItem('first_name'));
		setLastName(localStorage.getItem('last_name'));
		setEmail(localStorage.getItem('email'));
		setAcDetails(localStorage.getItem('academic_details'));
		setPhoneNo(localStorage.getItem('phone_no'));
		setProfExp(localStorage.getItem('profesional_exp'));

		setStatus(localStorage.getItem('status'));		
		},[]);
const updateAPIData = (e) =>{
e.preventDefault();
		axios.put('http://127.0.0.1:8000/review/review_candidate/'+id,
		{
		first_name,
		last_name,
		email,
		academic_details,
		
		profesional_exp,
		phone_no,
	
		status})
		console.log(first_name);
		navigate('/')
		}
		
		
    return (
        <>
          <form className="container" onSubmit={updateAPIData}>
          <h2>Candidate_details</h2>
          
          <p className="my-3"> First Name : {first_name}</p>
          <p>Last Name : {last_name}</p>
          <p>Email : {email}</p>
          <p>Academic Details : {academic_details}</p>
          <p>Profesional Experience : {profesional_exp}</p>
          <p>Contact No  : {phone_no}</p>
         

<div class="input-group mb-3">
  <label class="input-group-text" for="inputGroupSelect01">Status</label>
  <select class="form-select" id="inputGroupSelect01" onChange = {(e)=>setStatus(e.target.value)}>
    
    <option value="applied">Applied</option>
    <option value="accepted">Accepted</option>
    <option value="rejected">Rejected</option>
  </select>
</div>
                    <input type="submit" value = "submit" className="btn btn-primary" />
          </form>
        </>
    );
    }
