import React, { useState,useMemo } from 'react'
import {useFormik} from "formik"
import { Button } from 'react-bootstrap'
import Select from 'react-select'
import countryList from 'react-select-country-list'


export default function PersonalInfo(props) {

  const [data,setData]=useState()
  const options = useMemo(() => countryList().getData(), [])


  const onSubmit =  (values,{resetForm}) => {
     alert(JSON.stringify(values, null, 2));
     setData([values])
     resetForm()
  } 
  ////////////////////////////////////
  const validate = values =>{
    let errors={}
    if(!values.firstname){
      errors.firstname = "Required"
    }else if  (/^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/.test(values.firstname)){
  errors.firstname ="Invalid Format"
    }
    if(!values.lastname){
      errors.lastname = "Required"
    }else if (/^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/.test(values.lastname)){
  errors.lastname ="Invalid Format"
    }
    if(!values.address){
      errors.address="Required"
    }
    if(!values.city){
      errors.city="Required"
    }
    if(!values.zipcode){
      errors.zipcode="Required"
    }
    if(!values.emailaddress){
      errors.emailaddress = "Required"
    }else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.emailaddress))){
  errors.emailaddress ="Invalid Format"
    }
    if(!values.phonenumber){
      errors.phonenumber = "Required"
    }
    return errors
  }
  //////////////////////////////////
  const formik=useFormik({
    initialValues:{
     firstname:"",
     lastname:"",
     address:"",
     city:"",
     zipcode:"",
     country:"",
     emailaddress:"",
     phonenumber:""
     
    },
    onSubmit,
    validate,
    // enableReinitialize:true
  })

  const defaultvalue=(value)=>{
    return options?options.find(options=>options.value===value):""
  }


  console.log("data--->",data)
  return (
    <div className='contain'>
      <form onSubmit={formik.handleSubmit}>
      <div className='container'>
<h5>PERSONAL INFO</h5>
<span>Employer Will Use This Information To Contact You</span>
<div className='subcontain'>

  <div className='middle'>
    <div> 
      <label>FULL NAME</label><br/>
   <input className='i1'  placeholder="e.g-John" name="firstname"  onChange={formik.handleChange} value={formik.values.firstname} onBlur={formik.handleBlur}  />
   {formik.touched.firstname && formik.errors.firstname &&(<div style={{color:"#cc25b0"}}>{formik.errors.firstname}</div>)}
   </div>
   <div>
   <label>LAST NAME</label><br/>
   <input className='i1' placeholder="e.g-Deo" name="lastname"   onChange={formik.handleChange} value={formik.values.lastname} onBlur={formik.handleBlur}/>
   {formik.touched.lastname && formik.errors.lastname &&(<div style={{color:"#cc25b0"}}>{formik.errors.lastname}</div>)}
   </div>
  </div>
  <div style={{marginTop:20}}>
   <label>ADDRESS</label><br/>
   <input className='i2'  placeholder="e.g-10,cross street" name="address"   onChange={formik.handleChange} value={formik.values.address} onBlur={formik.handleBlur}/>
   {formik.touched.address && formik.errors.address &&(<div style={{color:"#cc25b0"}}>{formik.errors.address}</div>)}
   </div>
   <div className='city'>
   <div>
   <label>CITY</label><br/>
   <input className='i1' placeholder="e.g.-Gummidipoondi" name="city"  onChange={formik.handleChange} value={formik.values.city} onBlur={formik.handleBlur}/>
   {formik.touched.city && formik.errors.city &&(<div style={{color:"#cc25b0"}}>{formik.errors.city}</div>)}
   </div>
   <div>
   <label>ZIP CODE</label><br/>
   <input className='i3'  placeholder="e.g.-601201" name="zipcode"  onChange={formik.handleChange} value={formik.values.zipcode} onBlur={formik.handleBlur}/>
   {formik.touched.zipcode && formik.errors.zipcode &&(<div style={{color:"#cc25b0"}}>{formik.errors.zipcode}</div>)}
   </div>
   <div style={{marginLeft:50}}>
   <label>COUNTRY</label><br/>
   <Select className='countryi4' options={options} name="country" value={defaultvalue(formik.values.country)} onChange={(value)=>{formik.setFieldValue("country",value.value)}} />
   {/* <input className='countryi4' placeholder="India" name="country" onChange={formik.handleChange} value={formik.values.country} onBlur={formik.handleBlur}/> */}
   {formik.touched.country && formik.errors.country &&(<div style={{color:"#cc25b0"}}>{formik.errors.country}</div>)}
   </div>
   </div>
   <div className='city'>
   <div> 
      <label>EMAIL ADDRESS</label><br/>
   <input className='i1' placeholder="e.g-john_deo@example.com" name="emailaddress" onChange={formik.handleChange} value={formik.values.emailaddress} onBlur={formik.handleBlur}/>
   {formik.touched.emailaddress && formik.errors.emailaddress &&(<div style={{color:"#cc25b0"}}>{formik.errors.emailaddress}</div>)}
   </div>
   <div>
   <label>PHONE NUMBER</label><br/>
   <input className='i1' placeholder="e.g 978-622-6812" name="phonenumber" onChange={formik.handleChange} value={formik.values.phonenumber} onBlur={formik.handleBlur}/>
   {formik.touched.phonenumber && formik.errors.phonenumber &&(<div style={{color:"#cc25b0"}}>{formik.errors.phonenumber}</div>)}
   </div>
   </div>
   <div  style={{marginTop:50,justifyContent:"space-between",display:"flex"}}>
   <Button variant="primary" type="button">Back</Button>
         <Button variant="primary" type="submit"> submit</Button>
        </div>
</div>
      </div>   
     
      </form>
    </div>
  
  )
}
