import React,{useState} from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function AddStudent() {
const [first_name,setFirstName] = useState('');
const [last_name,setLastName] = useState('');
const [email,setEmail] = useState('');
const [academic_details,setAcDetails] = useState('');
const [phone_no,setPhoneNo] = useState('');
const [profesional_exp,setProfExp] = useState('');
const [status,setStatus] = useState('applied');


let navigate = useNavigate();
const postData = (e) =>{
		e.preventDefault();
		axios.post('http://127.0.0.1:8000/review/add_candidate/',
		{
		"first_name":first_name,
		"last_name":last_name,
		"email":email,
		"academic_details":academic_details,
		"profesional_exp":profesional_exp,
		"phone_no":phone_no,
		
		}
		
);
		
		navigate('/');
		}
    return (
        <>
          <form className="container"  onSubmit={postData}>
          <div className="mb-3">
  <label  className="form-label my-3">First Name</label>
  <input type="text" className="form-control"  placeholder="First Name" onChange = {(e)=>setFirstName(e.target.value)}/>
</div>

    <div className="mb-3">
  <label  className="form-label">Last Name</label>
  <input type="text" className="form-control"  placeholder="Last Name" onChange = {(e)=>setLastName(e.target.value)}/>
</div>

    <div className="mb-3">
  <label  className="form-label">Email</label>
  <input type="email" className="form-control"  placeholder="Email" onChange = {(e)=>setEmail(e.target.value)}/>
</div>

    <div className="mb-3">
  <label  className="form-label">Academic Details</label>
  <input type="textarea" className="form-control"  placeholder="Academic Details" onChange = {(e)=>setAcDetails(e.target.value)}/>
</div>

    <div className="mb-3">
  <label  className="form-label">Profesional Experience</label>
  <input type="text" className="form-control"  placeholder="Profesional Experience" onChange = {(e)=>setProfExp(e.target.value)}/>
</div>

    <div className="mb-3">
  <label  className="form-label">Phone No</label>
  <input type="tel" className="form-control"  placeholder="Phone No" onChange = {(e)=>{setPhoneNo(e.target.value);
  						}}pattern="\d{10}" required  />
</div>

            <input type="submit" className="btn btn-primary"
            value = "submit" />
          </form>
        </>
    );
    }
    
   
