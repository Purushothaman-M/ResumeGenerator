import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useFormik } from "formik";

  
export default function Formdata() {
  const [clear, setClear] = useState(true);
  const [data, setData] = useState(()=>{
      const initial = localStorage.getItem("data")
      return  initial?JSON.parse(initial):null
  })

  useEffect(()=>{
localStorage.setItem("data",JSON.stringify(data))
  },[data])

  
    /////////////////////////////////////  function for onsumit
    const onSubmit =  (values,{resetForm}) => {
      if(data===null){       //condition for data initial state
      setData([values])                  // if data value is null updating state 
      }
      else if(data!==null){        // condition for second time data onsubmit
        data.filter(el=>el.name ===values.name).length>0 && alert("user")  //condition for checking values and 
       let filterdata= data.filter(el=>el.name!==values.name)
        setData([...filterdata,values])
      }
      resetForm()
    } 
    ////////////////////////////////
    const validate = values =>{
      let errors={}
      if(!values.id){
        errors.id ="Required"
      }
      if(!values.name){
        errors.name = "Required"
      }else if (/^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/.test(values.name)){
    errors.name ="Invalid Format"
      }
      if(!values.gender){
        errors.gender="Required"
      }
      if(!values.noOfSubjects){
        errors.noOfSubjects="Required"
      }
      return errors
    }
  ////////////////////////////////
  const formik=useFormik({
    initialValues:{
      id:"",
      name:"",
      gender:"",
      noOfSubjects:[],
      index:[] 
    },
    onSubmit,
    validate,
    // enableReinitialize:true
  })
  ////////////////////////////////
   const subjectCount = () => {
    let subModel = {
      sub: "",
      mark: "",
    };
    let index=formik.values.index
    let count = formik.values.noOfSubjects
    for (let i = 0; i < count; i++) {
      index.push(subModel);
    }
   setClear(!clear)
  };
  ///////////////////////////////////
   const clearbutton = () => {
    
    formik.values.index = [];
    formik.values.noOfSubjects=[]
    setClear(!clear)
  };
  //////////////////////////////////
  console.log("data--->",data)
  return(
    
    <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
    <div style={{ width: "50vw", flexDirection: "row", display: "flex", }}>
     
    <form onSubmit={formik.handleSubmit}>
      <div style={{ width: "25vw", height: "100vh",border: '2px solid rgb(255, 165, 0)'}}
      >
        <div style={{ flexDirection: "column" }}>
          <h1 style={{ textAlign: "center" }}>Data</h1>
  
          <label htmlFor="id" style={{ marginLeft: 10 }}>
            {" "}
            ID{" "}
            <input
              placeholder="Id"
              name="id"
              id="id"
              style={{ height: 30, marginLeft: 10, marginTop: 10 }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.id}
              type="number"
              // autoComplete={"off"}
            />
  {formik.touched.id && formik.errors.id &&(<div style={{color:"#cc25b0"}}>{formik.errors.id}</div>)}
          </label>
        
          <br />
          <label style={{ marginLeft: 10 }}>
            {" "}
            Name{" "}
            <input
              placeholder="Name"
              name="name"
              style={{ height: 30, marginLeft: 10, marginTop: 10 }}
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
              // autoComplete={"off"}
            />
            {formik.touched.name && formik.errors.name ?(<div style={{color:"#cc25b0"}}>{formik.errors.name}</div>):null}
          </label>
          <br />
          <label style={{ marginLeft: 20 }}>
            {" "}
            Male{" "}
            <input
              name="gender"
              type="radio"
              style={{ height: 30, marginLeft: 10, marginTop: 10 }}
              onChange={formik.handleChange}
              value="male"
            />
          </label>
          <label style={{ marginLeft: 20 }}>
            {" "}
            Female{" "}
            <input
              name="gender"
              type="radio"
              style={{ height: 30, marginLeft: 10, marginTop: 10 }}
              onChange={formik.handleChange}
              value="female"
            />
          </label>
          <br />
          <label style={{ marginLeft: 40 }}>
            {" "}
            NoOfSubject{" "}
            <input
              placeholder="0"
              name="noOfSubjects"
              style={{
                height: 30,
                marginLeft: 10,
                marginTop: 10,
                width: 50,
              }}
              onChange={formik.handleChange}
              value={formik.values.noOfSubjects}
              onBlur={formik.handleBlur}
            />
            {formik.touched.noOfSubjects && formik.errors.noOfSubjects ?(<div style={{color:"#cc25b0"}}>{formik.errors.noOfSubjects}</div>):null}
          </label>
  
          {clear ? (
            <input  type="button" value="get"  style={{ marginLeft: 10 }} onClick={()=>subjectCount()}/>
          
          ) : ( 
             <input  type="button" value="Clear"  style={{ marginLeft: 10 }} onClick={()=>clearbutton()}/>
            
           )} 
          {formik.values.index.map((item, i) => {
          
            return (
  
              <div
                style={{
                  flexDirection: "row",
                  marginTop: 10,
                  marginLeft: 20,
                }}
              > 
                <input
                  style={{ height: 30 }}
                  placeholder="subject"
                  onChange={formik.handleChange}
                  type="text"
                  name={`index[${i}].sub`}
                  value={formik.values.index[i].sub}
                />
                <input
                  style={{ height: 30, width: 50, marginLeft: 20 }}
                  placeholder="Mark"
                  onChange={formik.handleChange}
                  name={`index[${i}].mark`}
                  value={formik.values.index[i].mark}
                />
               
              </div>
            );
          })}
          <br />
          <input 
            style={{ marginLeft: 10 }}
            type="submit" 
          />
          
          </div>
        </div>
  
  </form> 
  </div>
  </div>
  )
  }