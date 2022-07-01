import React, { useState } from 'react'

function Calculator() {

    const [weightVal, setWeightValue] = useState(0.9)
    const [value, setValue] = useState(38)
    
    const selectWeight = (e) =>{
        setWeightValue(e.target.value)
    }

    const selectHeight = (e)=>{
        setValue(e.target.value)
    }
    const [gender, setGender] = useState('boy')
    
    //setting gender
    const selectGender = (e) =>{
        setGender(e.target.value)
    }

    //setting current and selected date
    const defaultDate = {
        date : new Date().toISOString().slice(0,10)
    }
    const [dob, setdob] = useState(defaultDate.date)

    const selectDate =(e)=>{
        setdob(e.target.value)
    }

    //calculating number of days between dates
    const getNumberOfDays = (startDate, endDate) =>{
        const date1 = new Date(startDate);
        const date2 = new Date(endDate);
        
        //one day in milliseconds
        const oneDay = 1000 * 60 * 60 * 24;

        //calculating the time difference between the two dates
        const diffInTime = date2.getTime() - date1.getTime();
       
        //calculating the no. of days between two dates
        const diffInDays = Math.round(diffInTime / oneDay);

        return diffInDays;
    }

    const[result, setResult] = useState('')

    const handleSubmit = (event) =>{
        event.preventDefault();
        const defaultGender = 'boy'

        if (gender !== defaultGender){
            if (weightVal < 10){
                if (getNumberOfDays(dob, defaultDate.date)<5){
                    setResult('normal')
                }
                else{
                    console.log(weightVal)
                    setResult('Severly Underweight')
                }
            }
            else if (weightVal>10 && weightVal<50){
                console.log(weightVal)
                setResult('Moderately Underweight')
            }
            else if (weightVal>50){
                console.log(weightVal)
                setResult('normal')
            }
            else{
                setResult('invalid input')
            }

        }
        else{
            setResult('')
        }
        
    }
    

    const renderBmiForm = (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <div className="form-group-gender">
                    <legend className="gender-label">
                       <h2>Gender
                        <sup className='mandatory-star'>*</sup></h2> 
                    </legend>
                    
                    <input type="radio" className="form-check-input" name='gender' id='boy' value='boy' onChange={selectGender} defaultChecked/>
                    <label htmlFor="boy" className='boy-label'>Boy</label>
                    
                    <input type="radio" className="form-check-input" name='gender' id='girl' value='girl' onChange={selectGender}/>
                    <label htmlFor="girl" className='girl-label'>Girl</label>
                    <br /><h3>{gender}</h3>
                </div>
                <div className="form-group-dob">
                    <div className="dob-label-input">
                        <label htmlFor="inputDob" className='dob-label'>
                           <h2>Date of Birth 
                        <sup className='mandatory-star'>*</sup>   </h2> 
                        </label>
                        <input type="date" className="form-date-input" id='dob' name='dob'  value={dob} 
                        onChange={selectDate}/>
                        <h3>Dob: {dob}</h3><h3>Today's date: {defaultDate.date}</h3><br />                     
                        <h3>Number of days: {getNumberOfDays(dob, defaultDate.date)}</h3> 
                    </div>
                </div>
                <div className="form-group-height-weight">
                    <h2 className="range-label">Height (CM)
                    <sup className="mandatory-star">*</sup>
                    </h2>
                    <div className="range-slider">
                        <div className='Styled-range'>
                            <input type="range" id='height-cal' name='height' min='38' max='150'
                             value={value} onChange={selectHeight} />
                            <span className='ht-text'><br />*Height should be between 38 to 150</span>
                        </div>
                        <div className="height-text">
                            <input type="number" className='height-value' id='height-text-box' name='heightText'  
                            min={38} max={150} value={value} onChange={selectHeight} /> <br />
                            <span className="ht-text-below">CM</span>
                        </div>
                    </div>
                </div>
                <div className="form-group-height-weight">
                    <h2 className="range-label">Weight (Kg)
                    <sup className="mandatory-star">*</sup>
                    </h2>
                    <div className="range-slider">
                        <div className='Styled-range'>
                            <input type="range" id='weight-cal' name='weight' min='0.90' max='58.0' value={weightVal} 
                            onChange={selectWeight} />
                            <span className='wt-text'><br />*Weight should be between 0.90 to 58</span>
                        </div>
                        <div className="weight-text">
                            <input type="number" className='weight-value' id='weight-text-box' name='weighText'  placeholder='0.90' 
                            min={0.90} max={58.0} value={weightVal} onChange={selectWeight} /> <br />
                            <span className="wt-text-below">KG</span>
                        </div>
                    </div>
                </div>
                <div className="result-button">
                    <input type='submit' id='bmi-button' value='Show Results'/>
                </div>
            </form>
            <div>
                Growth result: {result}
            </div>
        </div>
    )
  return (
    renderBmiForm
  );
}


export default Calculator;