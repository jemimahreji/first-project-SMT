import React, { useState } from 'react'
import image1 from './icon2.jpg';
import image2 from './mom6.jpg';
import image3 from './pills2.jpg';

function Monitor () {
    const [count,setCount] = useState(0)
    const [disable, setDisable] = useState(false);

    const counter = () =>{
        setCount(count + 1)
    }
    const disableSubmit = () =>{
        setDisable(true)
        var radio = document.forms[0];
        radio[0].checked = true;
        var pill = document.getElementById('pill');
        pill.style.borderColor = 'white'
        pill.style.opacity = 0.4
        setTimeout(() => {
            setDisable(false)
            radio[0].checked = false;
            pill.style.borderColor = 'black'
            pill.style.opacity = 1
            console.log('Button Activated')
            console.log('Radio Button Unchecked')
            console.log('image active')
        },3000)
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
    }
    const renderImgForm = (
        <div>
        <form onSubmit={handleSubmit}>
            <input type="radio" id='rad' name='imageButton'/>IFA button
            <br />
            <input type="image" id='pill' src={image3} alt='submit'
            style={{border: '2px solid black', opacity: 1}} height='60' width='100' onClick={() => {counter(); disableSubmit(); changeColour()}} disabled={disable}/>
        </form>
        <div>Number of times clicked: {count}</div>
        </div>
    )
    const changeColour = ()=>{
        var chCol = document.getElementById('img1')
        chCol.style.borderWidth = '5px 5px';
        chCol.style.borderColor = 'red'
        chCol.style.opacity = 1
    }


    const collage = (
        <div>
            <div>
            <img id='img1' src={image2} alt="darken" style={{border: '2px solid black', opacity: 0.5}} height='200' width='300'/>
            <img src={image1} alt="stethoscope" height='100' width='170'/>
        </div>
        </div>
    )

    return(
        <div>
        <h2>Monitoring tool</h2>
        {renderImgForm}
        <div>
            {collage}
        </div>
        </div>
    );
}

export default Monitor