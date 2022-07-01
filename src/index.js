import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
// import Home from './Home.js'
// import Login from './Login.js';
// import './Login.css';
// import Calculator from './Calculator.js';
// import Monitor from './Monitor.js';
// import Dhanjhul from './Dhanjhul';
// import WomenInfo from './womenInfo.js';
// import ChildWomenSepForm from './childWomenSepForm'
// import SignUp from './SignUp.js';
// import RegistrationPage from './RegistrationPage';
import AntenatalCare from './AntenatalCare';
function SMT(){
  return(
    <BrowserRouter>
    <div>
       <AntenatalCare></AntenatalCare>
    </div>
    </BrowserRouter>
  );
}


ReactDOM.render(
<SMT/>, 
document.getElementById('root'));