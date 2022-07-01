import React, { useState } from "react";
import img1 from "./App-pics/triangle.png";
import "./Dhanjhul.css";
import img2 from "./App-pics/circle.svg";
import img3 from "./App-pics/tablets.svg";
import img4 from "./App-pics/shots.svg";
import img5 from "./App-pics/registration.svg";
import img6 from "./App-pics/checkup.svg";
import img7 from './App-pics/cross.svg';
import img8 from './App-pics/tick.svg';

function Dhanjhul() {
  const [ifaDisable, setIfaDisable] = useState(false)
  const [checkupDisable, setCheckupDisable] = useState(false);
  const [checkup, setCheckup] = useState(2)
  const [shotDisable, setShotDisable] = useState(1);
  const [disable, setDisable] = useState(false);
  const [checkupDisableNo, setCheckupDisableNo] = useState(1)
  const [shot, setShot] = useState(6);
  const [serial, setSerial] = useState(1);
  const [count, setCount] = useState(0);
  const changeCheckupNo = () =>{
    setCheckup(checkup+1)
    setCheckupDisableNo(checkupDisableNo+1)
  }
  const counter = () => {
    setCount(count + 1);
  };
  const changeSerialNo = () =>{
    setSerial(serial+1)
  }
  const changeShotNo = () =>{
    setShot(shot+1)
    setShotDisable(shotDisable+1)
  }
  const changeStatus = () =>{
    const id1a = 'c'
    const id2a = 'a'
    var n = serial
    var ID1 = id1a + String(n)
    var ID2 = id2a + String(n)
    console.log(ID1, ID2)
    var status = document.getElementById(ID1)
    status.src = img8
    var date = document.getElementById(ID2)
    date.readOnly = true;
  }

  const disableSubmit = () => {
    setIfaDisable(true);
    var tab = document.getElementById("ifa");
    tab.style.opacity = 0.4;
    setTimeout(() => {
      tab.style.opacity = 1;
      setIfaDisable(false);
    }, 5000);
  };
  const changeColourOnCount = () => {
    const a = "i";
    var n = count;
      var b = a + String(n + 1);
      var chCol = document.getElementById(b);
      console.log(b);
      chCol.style.opacity = 1;
  };

  const registered = () =>{
    const ID = document.getElementById('c1');
    ID.src = img8;
    const regImg = document.getElementById('register');
    regImg.style.opacity = 0.4;
  }

  const getShots = () =>{
    const l='c'
    var n = shot
    var b = l + String(n)
    const shotName = document.getElementById(b)
    shotName.src = img8
    const shotImg = document.getElementById('shot');
    shotImg.style.opacity = 0.4;
    setDisable(true); 
    if(shotDisable === 2){
      setDisable(true)
    }
    else{
      setTimeout(()=>{
      shotImg.style.opacity = 1;
      setDisable(false);
    },5000)
    }
  }
  const doCheckup = () =>{
    const l='c'
    var n = checkup
    var b = l + String(n)
    const checkupID = document.getElementById(b)
    checkupID.src = img8
    const checkupImg = document.getElementById('check-health');
    checkupImg.style.opacity = 0.4;
    setCheckupDisable(true); 
    if(checkupDisableNo === 3){
      setCheckupDisable(true)
    }
    else{
      setTimeout(()=>{
      checkupImg.style.opacity = 1;
      setCheckupDisable(false);
    },5000)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const renderDJform = (
    <div>
      <center>
      <form onSubmit={handleSubmit} className="icons-checkup">
        <input
          type="image"
          id="check-health"
          src={img6}
          alt="check-health"
          height="70"
          weight="70"
          onClick={()=> {doCheckup(); changeCheckupNo()}}
          disabled={checkupDisable}
          title = 'ANC check-up'
        />
        <input
          type="image"
          id="shot"
          src={img4}
          alt="shot"
          height="70"
          weight="70"
          onClick={() => {getShots(); changeShotNo()}}
          disabled={disable}
          title = 'Tetanus vaccination'
        />
        <input
          type="image"
          id="register"
          src={img5}
          alt="register"
          height="70"
          weight="70"
          onClick={registered}
          title = 'Registration'
        />
        <input
          type="image"
          id="ifa"
          src={img3}
          alt="ifa"
          height="70"
          weight="70"
          onClick={() => {
            counter();
            changeColourOnCount();
            disableSubmit();
          }}
          disabled={ifaDisable}
          title = 'Iron Folic Tablet'
        />
      </form>
      </center>
    </div>
  );

  const renderTable = (
    <>
    <table className="table">
        <tr>
          <th>S No.</th>
          <th>Services</th>
          <th>Status</th>
          <th>Expected date</th>
          <th>Actual date</th>
        </tr>
        <tr>
          <td>1</td>
          <td>
            Early registration at nearest Health <br />
            center/AWC
          </td>
          <td>
            <img src={img7} id='c1' className='cross' alt="not done" />
          </td>
          <td><input type="date" name="regExpexted" id="e1" /></td>
          <td><input type="date" name="regActual" id="a1"  onChange={ () => {changeStatus(); changeSerialNo()}}/></td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            1st ANC <br /> (BP check/ Blood and Urine examined)
          </td>
          <td>
            <img src={img7}  id='c2' className='cross' alt="not done" />
          </td>
          <td><input type="date" name="anc1Expexted" id="e2" /></td>
          <td><input type="date" name="anc1Actual" id="a2" onChange={ () => {changeStatus(); changeSerialNo()}}/></td>
        </tr>
        <tr>
          <td>3</td>
          <td>2nd ANC</td>
          <td>
            <img src={img7}  id='c3' className='cross' alt="not done" />
          </td>
            <td><input type="date" name="anc2Expexted" id="e3" /></td>
          <td><input type="date" name="anc2Actual" id="a3" onChange={ () => {changeStatus(); changeSerialNo()}}/></td>
        </tr>
        <tr>
          <td>4</td>
          <td>3rd ANC</td>
          <td>
            <img src={img7} id='c4' className='cross' alt="not done" />
          </td>
          <td><input type="date" name="anc3Expexted" id="e4" /></td>
          <td><input type="date" name="anc3Actual" id="a4" onChange={ () => {changeStatus(); changeSerialNo()}}/></td>
        </tr>
        <tr>
          <td>5</td>
          <td>
            Weight Gain from 6th month <br /> of pregnancy
          </td>
          <td>
            <img src={img7} id='c5' className='cross' alt="not done" />
          </td>
          <td><input type="date" name="wgtExpexted" id="e5" /></td>
          <td><input type="date" name="awgtActual" id="a5" onChange={ () => {changeStatus(); changeSerialNo()}}/></td>
        </tr>
        <tr>
          <td>6</td>
          <td>TT shot 1</td>
          <td>
            <img src={img7} id='c6' name='TT1' className='cross' alt="not done" />
          </td>
          <td><input type="date" name="TT1Expexted" id="e6" /></td>
          <td><input type="date" name="TT1tActual" id="a6" onChange={ () => {changeStatus(); changeSerialNo()}}/></td>
        </tr>
        <tr>
          <td>7</td>
          <td>TT shot 2</td>
          <td>
            <img src={img7} id='c7' name='TT2' className='cross' alt="not done" />
          </td>
            <td><input type="date" name="TT2Expexted" id="e7" /></td>
          <td><input type="date" name="TT2tActual" id="a7" onChange={ () => {changeStatus(); changeSerialNo()}}/></td>
        </tr>
        <tr>
          <td>8</td>
          <td>
            IFA Consumption  (from 4th month of<br /> pregnancy at least 90
            tablets){" "}
          </td>
          <td><input type='number' name="ifaTaken" id="IFAc" value={count} readOnly/></td>
        </tr>
      </table>
    </>
  );

  return (
    <div>
      <center>
        <h1>Dhan-Jhul - self monitoring tool for women</h1>
      </center>
      <div>
        {renderDJform}
      </div>
      <div>{renderTable}</div>
      <div className="dhanJhul">
            <img src={img1} alt="Dhanjhul contents" height="300" width="600" />
      </div>
        <div className="grid-container">
          <div id="i1" className="grid-item">
            <img src={img2} alt="circle" height="20" width="20" />
          </div>
          <div id="i2" className="grid-item">
            <img src={img2} alt="circle" height="20" width="20" />
          </div>
          <div id="i3" className="grid-item">
            <img src={img2} alt="circle" height="20" width="20" />
          </div>
          <div id="i4" className="grid-item">
            <img src={img2} alt="circle" height="20" width="20" />
          </div>
          <div id="i5" className="grid-item">
            <img src={img2} alt="circle" height="20" width="20" />
          </div>
          <div id="i6" className="grid-item">
            <img src={img2} alt="circle" height="20" width="20" />
          </div>
          <div id="i7" className="grid-item">
            <img src={img2} alt="circle" height="20" width="20" />
          </div>
          <div id="i8" className="grid-item">
            <img src={img2} alt="circle" height="20" width="20" />
          </div>
          <div id="i9" className="grid-item">
            <img src={img2} alt="circle" height="20" width="20" />
          </div>
          <div id="i10" className="grid-item">
            <img src={img2} alt="circle" height="20" width="20" />
          </div>
          <div id="i11" className="grid-item">
            <img src={img2} alt="circle" height="20" width="20" />
          </div>
          <div id="i12" className="grid-item">
            <img src={img2} alt="circle" height="20" width="20" />
          </div>
        </div>
    </div>
  );
}

export default Dhanjhul;
