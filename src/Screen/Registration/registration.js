import { useFormik } from "formik";
import {Button, Container} from "react-bootstrap";
import { useState } from 'react';
function App() {

  const[register,setregister]=useState()

  const  initialValues={
    Firstname:"",
    Lastname:"",
    Email:"",
    Phone:"",
    Password:"",
    Confirmpassword:""}

   const validate=(values)=>{
    
    let errors={}

    if(!values.Firstname)
    {
      errors.Firstname="Required"
    }

    if(!values.Lastname)
    {
      errors.Lastname="Required"
    }

    if(!values.Email)
    {
      errors.Email="Required"
    }
    else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.Email)))
    {
      errors.Email="Invalid Email"
    }

    if(!values.Phone)
    {
      errors.Phone="Required"
    }
    else if(!(/^([+]\d{2})?\d{10}$/.test(values.Phone)))
    {
      errors.Phone="Invalid Phone Number"
    }
  
    if(!values.Password)
    {
      errors.Password="Required"
    }
    else if(!((values.Password.length>=8)&&(values.Password.length<=12)))
    {
      errors.Password="Character length should be between 8 and 12"
    }
    else if(!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/.test(values.Password)))
   {
     errors.Password=" characters should contain at least one numeric digit one uppercase and one lowercase letter"
   }



    if(!values.Confirmpassword)
    {
      errors.Confirmpassword="Required"
    }
    else if(values.Password!==values.Confirmpassword)
    {
       errors.Confirmpassword="Password Doesn't Match"
    }

    return errors
   }

   const onSubmit=(values,{resetForm})=>{
     setregister([values])

     resetForm()
   }
  
  const formik=useFormik({
   initialValues,
   validate,
   onSubmit
   
  })
// console.log("passwordlength",formik.values.Phone.length)
  console.log("State",register)
// console.log("fomrik.errors",formik.errors)
  // console.log("formik",formik.values)
  return (
<div>

 <Container>

 <form onSubmit={formik.handleSubmit}>
   <h1 style={{marginLeft: 18}}>REGISTRATION</h1>

<div style={{marginTop:20}}>
<label style={{fontSize:20,marginLeft: 10, marginTop: 20,fontWeight:"bold"}} htmlFor="Firstname"> First Name</label><br/>
  <input type="text" name="Firstname" id="Firstname" value={formik.values.Firstname} onChange={formik.handleChange}
   style={{ height: 27, width: 250, marginLeft: 10,marginTop:7 }} onBlur={formik.handleBlur}></input><br/>
   {formik.touched.Firstname && formik.errors.Firstname? <div style={{color:"red", marginLeft: 10}}>{formik.errors.Firstname}</div> : null}
   </div>

<div style={{marginTop:20}}>
<label style={{fontSize:20,marginLeft: 10, marginTop: 20,fontWeight:"bold"}} htmlFor="Lastname"> Last Name</label><br/>
  <input style={{ height: 27, width: 250, marginLeft: 10,marginTop:7 }} type="text" name="Lastname" id="Lastname"
  value={formik.values.Lastname} onChange={formik.handleChange} onBlur={formik.handleBlur}></input><br/>
  {formik.touched.Lastname && formik.errors.Lastname? <div style={{color:"red", marginLeft: 10}}>{formik.errors.Lastname}</div> : null}
  </div>
  
  <div style={{marginTop:20}}>
<label style={{fontSize:20,marginLeft: 10, marginTop: 20,fontWeight:"bold"}} htmlFor="Email"> Email</label><br/>
  <input style={{ height: 27, width: 250, marginLeft: 10,marginTop:7 }} type="email" name="Email" id="Email"
  value={formik.values.Email} onChange={formik.handleChange} onBlur={formik.handleBlur} ></input><br/>
  {formik.touched.Email && formik.errors.Email? <div style={{color:"red", marginLeft: 10}}>{formik.errors.Email}</div> : null}
  </div>

  <div style={{marginTop:20}}>
<label style={{fontSize:20,marginLeft: 10, marginTop: 20,fontWeight:"bold"}} htmlFor="Phone"> Phone</label><br/>
  <input style={{ height: 27, width: 250, marginLeft: 10,marginTop:7 }} type="number" name="Phone" id="Phone"
  value={formik.values.Phone} onChange={formik.handleChange} onBlur={formik.handleBlur}></input><br/>
  {formik.touched.Phone && formik.errors.Phone? <div style={{color:"red", marginLeft: 10}}>{formik.errors.Phone}</div> : null}
  </div>

  <div style={{marginTop:20}}>
<label style={{fontSize:20,marginLeft: 10, marginTop: 20,fontWeight:"bold"}} htmlFor="Password"> Password</label><br/>
  <input style={{ height: 27, width: 250, marginLeft: 10,marginTop:7 }} type="password" name="Password" id="Password"
   value={formik.values.Password} onChange={formik.handleChange} onBlur={formik.handleBlur}></input><br/>
   {formik.touched.Password && formik.errors.Password? <div style={{color:"red", marginLeft: 10}}>{formik.errors.Password}</div> : null}
  </div>

  <div style={{marginTop:20}}>
<label style={{fontSize:20,marginLeft: 10, marginTop: 20,fontWeight:"bold"}} htmlFor="Confirmpassword"> Confirm Password</label><br/>
  <input style={{ height: 27, width: 250, marginLeft: 10,marginTop:7 }} type="password" name="Confirmpassword" id="Confirmpassword"
  value={formik.values.Confirmpassword} onChange={formik.handleChange} onBlur={formik.handleBlur}></input><br/>
  {formik.touched.Confirmpassword &&formik.errors.Confirmpassword? <div style={{color:"red", marginLeft: 10}}>{formik.errors.Confirmpassword}</div> : null}
</div>


<Button className="loginBtn loginBtn-hover" style={{marginTop:20,fontSize:20,marginLeft: 10}} type="submit">Register</Button>






 </form>
</Container>


 </div>



   
   
  );
}

export default App;

