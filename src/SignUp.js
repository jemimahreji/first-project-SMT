import React from 'react'
import {useFormik} from 'formik';

function SignUp(){
    const validate = values => {
        const errors = {};

        if (!values.firstName){
            errors.firstName = 'Required';
        } 
        else if (values.firstName.length > 15){
            errors.firstName = 'Must be 15 characters or less';
        }

        if (!values.lastName){
            errors.lastName = 'Required';
        }
        else if(values.lastName.length > 20){
            errors.lastName = 'Must be 20 characters or less';
        }
        if (!values.mobNo){
            errors.mobNo = 'Required';
        }
        else if (values.mobNo.length !== 10){
            errors.mobNo = 'Invalid Mobile number';
        }
        return errors;
    }
    const signupForm = () =>{
        const formik = useFormik({
            initialValues: {
                firstName: '',
                lastName: '',
                mobNo: ''
            },
            validate,
            onSubmit: values => {
                alert(JSON.stringify(values, null, 2));
            }
        });
        return(
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id='firstName' name='firstName' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstName} />
                {formik.touched.firstName && formik.error.firstName ? (<div>{formik.errors.firstName}</div>) : null}

                <label htmlFor="lastName">Last Name</label>
                <input type="text" id='lastName' name='lastName' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastName} />
                {formik.touched.lastName && formik.errors.lastName? (<div>{formik.errors.lastName}</div>) : null}

                <label htmlFor="phone">Mobile Number</label>
                <input type="tel" id='mobNo' name='mobNo' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.mobNo} />
                {formik.touched.mobNo && formik.errors.mobNo? (<div>{formik.errors.mobNo}</div>) : null}

                <button type="submit">Submit</button>
            </form>
        )
    }
    return(
       <center><h1>{signupForm}</h1></center> 
    )
}

export default SignUp