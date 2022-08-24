import React from "react";

import { useNavigate ,Link} from 'react-router-dom';
import AddStudent from "./AddStudent";
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
export default function App() {


  return (
<>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <span className="navbar-brand">Job Review</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
      
      </ul>
      
     <a href='/addstudent'>
        <button className="btn btn-outline-success" type="submit">Add Candidate</button>
      </a>
    </div>
  </div>
</nav>
</>
  );
}
