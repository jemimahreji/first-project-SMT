import React, { useState } from "react";
import './Login.css';
import logo from './logo3.jpg';
function Login() {

  const [errorMessages, setErrorMessages] = useState({});
const [isSubmitted, setIsSubmitted] = useState(false);


const database = [
  {
    username: 'happyDay',
    password: 'enlighten7'
  },
  {
    username: 'Karunyan24',
    password: 'seraph@2020'
  }
];

const errors = {
  uname: 'invalid username',
  pass: 'invalid password',
}

const handleSubmit = (event) =>{
  //to prevent page reload
  event.preventDefault();

  var {uname, pass} = document.forms[0];

  //finding user login info
  const userData = database.find((user) => user.username === uname.value)

  if (userData){
    if(userData.password !== pass.value){
      //password is invalid
      setErrorMessages({name:'pass', message: errors.pass});
    }
    else{
      setIsSubmitted(true);
    }
  }
  else{
    setErrorMessages({name: 'uname', message: errors.uname });
  }
}
//Generate JSX code for error message
const renderErrorMessage = (name) => name === errorMessages.name && (<div className="errormsg">{errorMessages.message}</div>);


  // JSX code for login form
const renderForm =(
  <div className="form">
    <form onSubmit={handleSubmit}>
      <div className="input-log">
        <label>Username</label>
        <input type="text" placeholder='username' name='uname' required />
        {renderErrorMessage('uname')}
      </div>
      <div className="input-log">
        <label>Password</label>
        <input type="password" placeholder="password" name='pass' required />
        {renderErrorMessage('pass')}
      </div>
      <div className="button-log">
        <input type="submit" value='Sign in'/>
      </div>
    </form>
  </div>
);

  return (
    <div className="logpage">
      <div className="login-form">
        <div><img src={logo} alt="not available" id='logo'/></div>
        <div className="title">Have an account?</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );

}

export default Login;

