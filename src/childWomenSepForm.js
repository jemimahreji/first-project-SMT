import { useState } from "react"
import React from 'react'

function ChildWomenSepForm () {
    const [lmp, setlmp] = useState()
    const defaultDate = {
        date : new Date().toISOString().slice(0,10)
    }
    const selectDate =(e)=>{
        setlmp(e.target.value)
    }
    const getNumberOfmonths= (startDate, endDate) =>{
        const date1 = new Date(startDate);
        const date2 = new Date(endDate);
        const result = date2.getMonth() - date1.getMonth() + 12 * (date2.getFullYear() - date1.getFullYear())
        console.log('date: ',date1, date2)
        console.log('months: ',date2.getMonth() - date1.getMonth())
        console.log('months thru year: ',date2.getFullYear() - date1.getFullYear())
        console.log('diff in months: ',result)
        return(
            result
        )
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
    }
    const renderWomenForm = (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='wLabel'>    
                <label>Name:</label>
                <input className='input' type="text" name="womanName" id="woman" 
                value={()=>document.getElementById('Name').value} readOnly/>
                </div>
                <div className='wLabel'>
                <label>Mobile Number:</label>
                <input className='input' type="tel" name="womanMobNo" id="wphone" placeholder='0000-000-000' pattern='[0-9]{4}-[0-9]{3}-[0-9]{3}'
                value={()=>document.getElementById('cphone').value} readOnly/>
                </div>
                <div className='wLabel'>
                <label>category:</label>
                <input type='text' className='input' value='pregnant' name="category" id="prega-child" readOnly/>
                </div>
                <div className='wLabel'>
                <label>Last Menstrual Period: </label>
                <input className='input' type="date" name="mensis" id="LMP" value={lmp} onChange={selectDate} />
                </div>
                <div className='wLabel'>
                <label>Expected Date of delivery:</label>
                <input className='input' type="date" name="ExpDelDate" id="EDD" />
                </div>
                <div className='wLabel'>
                <label>Month of pregnancy</label>
                <input className='input' type="number" name="pregaMonths" id="months" min='1' max='10' value={getNumberOfmonths(lmp, defaultDate.date)} readOnly/>
                </div>
                <div className='wLabel'>
                <label>Actual date of delivery:</label>
                <input className='input' type="date" name="actualDelDate" id="ADT" />
                </div>
                
            </form>
            <div><h3>no. of months: {getNumberOfmonths(lmp, defaultDate.date)}</h3></div>
        </div>
    )
    const renderCommonForm =(
        <div>
            <form onSubmit={renderWomenForm}>
            <div className='cLabel'>    
                <label>Name:</label>
                <input className='input' type="text" name="Name" id="Name" />
            </div>
            <div className='cLabel'>
                <label>Mobile Number:</label>
                <input className='input' type="tel" name="MobNo" id="cphone" placeholder='0000-000-000' pattern='[0-9]{4}-[0-9]{3}-[0-9]{3}' />
            </div>
            <div className='cLabel'>
                <label>category:</label>
                <select className='input' name="category" id="pregaChild">
                    <option value="pregnant">pregnant</option>
                    <option value="child">child</option>
                </select>
            </div>
            <div>
                <input type="submit" />
            </div>
            </form>
        </div>
    )
  return (
    <div>
       <h3>e-SMT</h3>
       <h2>Form (child/woman)</h2> 
       <div>
        {renderCommonForm}
       </div>
       <br />
       {/* <div>
        {renderWomenForm}
       </div> */}
    </div>
  )
}

export default ChildWomenSepForm