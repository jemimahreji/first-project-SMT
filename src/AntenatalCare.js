import React, {useState} from "react";
import "./AntenatalCare.css";
import img1 from "./App-pics/9months.png";
import img2 from "./App-pics/reg.png";
import img3 from "./App-pics/checkups.png";
import img4 from "./App-pics/ttshot.png";
import img5 from "./App-pics/weight.png";
import img6 from "./App-pics/ifapills.png";
import img7 from './App-pics/box3.png'
import img8 from './App-pics/registration.svg'
import img9 from './App-pics/status-rect2.svg'
import img10 from './App-pics/checkup.svg'

function AntenatalCare() {
  const lmp = '2022-04-01'
  const defaultDate = {
        date : new Date().toISOString().slice(0,10)
    }
  const [regDate, setRegDate] = useState();  //date input for registration
  const [ancDate1, setAncDate1] = useState(defaultDate.date);
  const [ancDate2, setAncDate2] = useState();
  const [ancDate3, setAncDate3] = useState();

  const selectRegMonth = (endDate) =>{
    // const lmp = '2022-04-01'
    const date1 = new Date(lmp);
    const date2 = new Date(endDate);
    const result = date2.getMonth() - date1.getMonth() + 12 * (date2.getFullYear() - date1.getFullYear())
    console.log('date: ',date1, date2)
    console.log('months: ',date2.getMonth() - date1.getMonth())
    console.log('months thru year: ',date2.getFullYear() - date1.getFullYear())
    console.log('diff in months: ',result)
    console.log(endDate)
    return(
      result
    )
  }
  const selectblockReg = (actualDate) =>{
    var regMonth = selectRegMonth(actualDate)
    const l = 'r'
    const n = regMonth
    var b = l + String(n)
    console.log(b)
    const regMonthBlock = document.getElementById(b) 
    regMonthBlock.src = img9
  }
  const selectblockAnc = (actualDate) =>{
    var regMonth = selectRegMonth(actualDate)
    const c = 'a'
    var n = regMonth
    var b = c + String(n)
    console.log(b)
    const ancMonthBlock = document.getElementById(b) 
    ancMonthBlock.src = img9
  }
  const [weight, setWeight] = useState(60)  //weight gain checked
  const selectWeight = (e) =>{
    setWeight(e.target.value)
  }
   const monthTimer = () =>{
    var wtGainMonth = selectRegMonth(defaultDate.date)
    const c = 'w'
    var n = wtGainMonth
    var b = c + String(n)
    console.log('weight timer',b)
    const wgtId = document.getElementById(b)  
    wgtId.readOnly = true
   }
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const renderForm = (
    <div className="clickImg">
      <form onSubmit={handleSubmit}>
        <div>
          <input type="image" src={img8} alt='early registration' id='reg-Button'
            onClick={()=>{selectblockReg(defaultDate.date)}} title='registration' height='80' width='80'/>
        </div>
        <div>
          <input type="image" src={img10} alt='anc check up' id='ANC Checkups'
          onClick={()=>{selectblockAnc(defaultDate.date)}} title='ANC Checkups' height='80' width='80'/>
        </div>
      </form>
    </div>
  )
  return (
    <div>
      {monthTimer}
      <center>
        <h2>ANTENATAL CARE</h2>
        <h3>Regular checkup is essential during pregnancy</h3>
      </center>
      <div>
        {renderForm}
      </div>
      <div className="wrapper">
        <div className="child" id="i1">
          <img src={img1} alt="9 months pregnancy" height="150" width="720" />
        </div>
        <div className="child" id="i2">
          Register with the health centre in the 1st trimester
        </div>
        <div className="child" id="i3">
          <img src={img2} alt="Early registration" width="100" height="100" />
        </div>
        <div className="child" id="i4">
          <img src={img7} alt="status box" width='80' height='100' id='r1'/>
        </div>
        <div className="child" id="i5">
          <img src={img7} alt="status box" width='80' height='100' id='r2'/>
        </div>
        <div className="child" id="i6">
          <img src={img7} alt="status box" width='80' height='100' id='r3'/>
        </div>
        <div className="child" id="i7">
          <img src={img7} alt="status box" width='80' height='100' id='r4'/>
        </div>
        <div className="child" id="i8">
          <img src={img7} alt="status box" width='80' height='100' id='r5'/>
        </div>
        <div className="child" id="i9">
          <img src={img7} alt="status box" width='80' height='100' id='r6'/>
        </div>
        <div className="child" id="i10">
          <img src={img7} alt="status box" width='80' height='100' id='r7'/>
        </div>
        <div className="child" id="i11">
          <img src={img7} alt="status box" width='80' height='100' id='r8'/>
        </div>
        <div className="child" id="i12">
          <img src={img7} alt="status box" width='80' height='100' id='r9'/>
        </div>
        <div className="child" id='date1'>
          <input type="date" id='d1' value={regDate} onChange={(e)=>{setRegDate(e.target.value)}}/>
        </div>
        <div className="child" id="i13">
          Have at least 3 antenatal checkups, after registration.
        </div>
        <div className="child" id="i14">
          <img src={img3} alt="ANC checkups" width="100" height="100" />
        </div>
        <div className="child" id="i15">
          <img src={img7} alt="status box" width='80' height='100' id='a1'/>
        </div>
        <div className="child" id="i16">
          <img src={img7} alt="status box" width='80' height='100' id='a2'/>
        </div>
        <div className="child" id="i17">
          <img src={img7} alt="status box" width='80' height='100' id='a3'/>
        </div>
        <div className="child" id="i18">
          <img src={img7} alt="status box" width='80' height='100' id='a4'/>
        </div>
        <div className="child" id="i19">
          <img src={img7} alt="status box" width='80' height='100' id='a5'/>
        </div>
        <div className="child" id="i20">
          <img src={img7} alt="status box" width='80' height='100' id='a6'/>
        </div>
        <div className="child" id="i21">
          <img src={img7} alt="status box" width='80' height='100' id='a7'/>
        </div>
        <div className="child" id="i22">
          <img src={img7} alt="status box" width='80' height='100' id='a8'/>
        </div>
        <div className="child" id="i23">
          <img src={img7} alt="status box" width='80' height='100' id='a9'/>
        </div>
        <div className="child" id='date2'>
          <input type="date" id='d2' value={ancDate1} onChange={(e)=>{setAncDate1(e.target.value)}} />
          <input type="date"  id="d3" value={ancDate2} onChange={(e)=>{setAncDate2(e.target.value)}} />
          <input type="date" id='d4'value={ancDate3} onChange={(e)=>{setAncDate3(e.target.value)}} />  
        </div>
        {/* onInput={selectblockAnc(ancDate1)} */}
        <div className="child" id="i24">
          Have weight checkup at each visit. Gain at least 10- 12 kg. during
          pregnancy. Gain at least 1 kg every month during the last 6 months of
          pregnancy.
        </div>
        <div className="child" id="i25">
          <img src={img5} alt="weight gain" width="100" height="100" />
        </div>
        <div className="child" id="i26">
          <img src={img7} alt="status box" width='80' height='100'/>
          <input type="number" className='w' id='w1' onChange={selectWeight} min='30' max='150' />
        </div>
        <div className="child" id="i27">
          <img src={img7} alt="status box" width='80' height='100'/>
          <input type="number" className='w' id='w2' onChange={selectWeight} min='30' max='150' />
        </div>
        <div className="child" id="i28">
          <img src={img7} alt="status box" width='80' height='100'/>
          <input type="number" className='w' id='w3' onChange={selectWeight} min='30' max='150' />
        </div>
        <div className="child" id="i29">
          <img src={img7} alt="status box" width='80' height='100'/>
          <input type="number" className='w' id='w4'  onChange={selectWeight} min='30' max='150' />
        </div>
        <div className="child" id="i30">
          <img src={img7} alt="status box" width='80' height='100'/>
          <input type="number" className='w' id='w5' onChange={selectWeight} min='30' max='150' />
        </div>
        <div className="child" id="i31">
          <img src={img7} alt="status box" width='80' height='100'/>
          <input type="number" className='w' id='w6' onChange={selectWeight} min='30' max='150' />
        </div>
        <div className="child" id="i32">
          <img src={img7} alt="status box" width='80' height='100'/>
          <input type="number" className='w' id='w7' onChange={selectWeight} min='30' max='150' />
        </div>
        <div className="child" id="i33">
          <img src={img7} alt="status box" width='80' height='100'/>
          <input type="number" className='w' id='w8' onChange={selectWeight} min='30' max='150' />
        </div>
        <div className="child" id="i34">
          <img src={img7} alt="status box" width='80' height='100'/>
          <input type="number" className='w' id='w9' onChange={selectWeight} min='30' max='150' />
        </div>
        <div className="child" id='date3'>
          <input type="date" />
        </div>
        <div className="child" id="i35">
          Take two T.T. Injections. T.T.1 when pregnancy is confirmed and T.T.2
          after 1 month. (Fill in the date) *Give one dose of T.T. if previously
          vaccinated within 3 years.
        </div>
        <div className="child" id="i36">
          <img src={img4} alt="TT shots" width="100" height="100" />
        </div>
        <div className="child" id="i37">
          <img src={img7} alt="status box" width='80' height='100'/>
        </div>
        <div className="child" id="i38">
          <img src={img7} alt="status box" width='80' height='100'/>
        </div>
        <div className="child" id="i39">
          <img src={img7} alt="status box" width='80' height='100'/>
        </div>
        <div className="child" id="i40">
          <img src={img7} alt="status box" width='80' height='100'/>
        </div>
        <div className="child" id="i41">
          <img src={img7} alt="status box" width='80' height='100'/>
        </div>
        <div className="child" id="i42">
          <img src={img7} alt="status box" width='80' height='100'/>
        </div>
        <div className="child" id="i43">
          <img src={img7} alt="status box" width='80' height='100'/>
        </div>
        <div className="child" id="i44">
          <img src={img7} alt="status box" width='80' height='100'/>
        </div>
        <div className="child" id="i45">
          <img src={img7} alt="status box" width='80' height='100'/>
        </div>
        <div className="child" id='date4'>
          <input type="date" />
        </div>
        <div className="child" id="i46">
          Take one tablet of iron folic acid a day for at least 6 months after
          first trimester. Take at least 180 tablets.{" "}
        </div>
        <div className="child" id="i47">
          <img src={img6} alt="ifa pills" width="100" height="100" />
        </div>
        <div className="child" id="i48">
          <img src={img7} alt="status box" width='80' height='100'/>
        </div>
        <div className="child" id="i49">
          <img src={img7} alt="status box" width='80' height='100'/>
        </div>
        <div className="child" id="i50">
          <img src={img7} alt="status box" width='80' height='100'/>
        </div>
        <div className="child" id="i51">
          <img src={img7} alt="status box" width='80' height='100'/>
        </div>
        <div className="child" id="i52">
          <img src={img7} alt="status box" width='80' height='100'/>
        </div>
        <div className="child" id="i53">
          <img src={img7} alt="status box" width='80' height='100'/>
        </div>
        <div className="child" id="i54">
          <img src={img7} alt="status box" width='80' height='100'/>
        </div>
        <div className="child" id="i55">
          <img src={img7} alt="status box" width='80' height='100'/>
        </div>
        <div className="child" id="i56">
          <img src={img7} alt="status box" width='80' height='100'/>
        </div>
        <div className="child" id='date5'>
          <input type="date" />
        </div>
      </div>
      <div>
        1st month weight: {weight}
      </div>
    </div>
  );
}

export default AntenatalCare;
