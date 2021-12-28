import { useFormik } from 'formik';
import {Button} from 'react-bootstrap';
import React,{useState} from 'react';
import Select from 'react-select';
import { useHistory } from 'react-router';




export  default function Skills(props) {
const[empty,setempty]=useState()
let history=useHistory()


    
const options=[
    {label:"☆☆-Novice",value:"novice"},
    {label:"☆☆☆-Intermediate",value:"intermediate"},
    {label:"☆☆☆☆-Proficient ",value:"proficient "},
    {label:"☆☆☆☆☆-Expert ",value:"expert "},
]

const[data,setdata]=useState()

    const onSubmit=(values)=>{
      setdata([values])
      history.push("/Objective")

        }
      
      const formik=useFormik({
        initialValues:{
            data:[{skill:"",level:""}]
         },
          onSubmit
      })
   
      const Resume=()=>{
 
        let length=formik.values.data.length
        let index= length-1;
        
        let additionaldata={
            skill:"",level:""
         }
        
        for(let i=index;i<length;i++)
        {
          formik.values.data.push(additionaldata)
         
      
        }
       setempty(index)
      
      }
      const Remove=()=>{
       let length=formik.values.data.length
       if(length>1){
        formik.values.data.pop()
       }
       setempty(length)
      }



console.log("formik.values.data",formik.values.data)
    return (
        <div className="Experience  skill container">
      <div className="top">
      <div className="row">
      <div className="col">
      <h5>Skills</h5>
      <p>Highlight Your skills.</p> 
      </div>
      </div>
     <div  className="middle">
     <form onSubmit={formik.handleSubmit}> 
           { formik.values.data.map((item,i)=>{
  return (
 <>


{/* <input className="input" placeholder="e.g.IBM" name={`resume[${i}.employer]`}
      value={formik.values.resume[i].employer} onChange={formik.handleChange}></input> */}

   <div className="city">
   <div className="container">
   <label>Skill</label><br/>
   <input  className='i1' placeholder="e.g.project manager"  name={`data[${i}.skill]`}  onChange={formik.handleChange} value={formik.values.data[i].skill}></input>
   </div>
   <div className="col-md-6">
       <label>Level</label><br/>
      <Select options={options} className='countryi4' placeholder="Select Your Level"  onChange={(value)=>formik.setFieldValue(`data[${i}].level`,value.value)} ></Select>
       </div>
     </div>
       </>
 );
})}

         <div className="row">
         <div className="col-md-4 offset-2">
        <Button className="Addmore" onClick={Resume}>+ ADD MORE </Button>
          </div> 

        
         <div className="col-md-4 ">
        <Button className="REMOVE" onClick={Remove} >- REMOVE</Button>
          </div> </div>
        
         <div
            style={{
              marginTop: 50,
              justifyContent: "space-between",
              display: "flex",
            }}
          >
            <Button
              className="Back"
              style={{ marginTop: 20, fontSize: 20, marginLeft: 10 }}
              onClick={() => history.push("/Education")}
              type="button"
            >
              Cancel
            </Button>
            <Button
              className="Submit "
              style={{ marginTop: 20, fontSize: 20, marginLeft: 10 }}
              type="submit"
            >
              Submit
            </Button>
          </div>
          </form>
         </div>
          </div>

         
      </div>
      );
        } 
