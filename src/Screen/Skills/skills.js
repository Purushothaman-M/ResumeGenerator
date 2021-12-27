import { useFormik } from 'formik';
import {Button} from 'react-bootstrap';
import React,{useState} from 'react';
import Select from 'react-select';



export  default function Skills(props) {
const[empty,setempty]=useState()

    
    const onSubmit=(values)=>{
  
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
        <div className="Experience container">
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
   <div className="row">
   <div className="col-md-4">
   <label>Employer</label><br/>
   <input className="input" placeholder="e.g.IBM"></input>
   </div>

   <div className="col-md-2">
       <label>Start date</label><br/>
      <Select  placeholder="Month" ></Select>
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
         </form>
         </div>
          </div>
      </div>
      );
        } 
