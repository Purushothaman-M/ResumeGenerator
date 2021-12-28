import React,{useState} from 'react';
import 'react-quill/dist/quill.snow.css';
import Select from 'react-select';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useFormik } from 'formik';
import {Button} from 'react-bootstrap';
import { useHistory } from 'react-router';
// import "../../vikramcss.css"




export default function App () {

let history=useHistory()
 const options=[
    {label:"January",value:"January"},
    {label:"February",value:"February"},
    {label:"March",value:"March"},
    {label:"April",value:"April"},
    {label:"May",value:"May"},
    {label:"June",value:"June"},
    {label:"July",value:"July"},
    {label:"August",value:"August"},
    {label:"September",value:"September"},
    {label:"October",value:"October"},
    {label:"November",value:"November"},
    {label:"December",value:"December"}
]


const options1=[
  { value:"2021",label:"2021" },
  { value:"2020",label:"2020" },
  { value:"2019",label:"2019" },
  { value:"2018",label:"2018" },
  { value:"2017",label:"2017" },
  { value:"2016",label:"2016" },
  { value:"2015",label:"2015" },
  { value:"2014",label:"2014" },
  { value:"2013",label:"2013" },
  { value:"2012",label:"2012" },
  { value:"2011",label:"2011" },
  { value:"2010",label:"2010" },
  { value:"2009",label:"2009" },
  { value:"2008",label:"2008" },
  { value:"2007",label:"2007" },
  { value:"2006",label:"2006" },
  { value:"2005",label:"2005" },
  { value:"2004",label:"2004" },
  { value:"2003",label:"2003" },
  { value:"2002",label:"2002" },
  { value:"2001",label:"2001" },
  { value:"2000",label:"2000" },
  { value:"1999",label:"1999" },
  { value:"1998",label:"1998" },
  { value:"1997",label:"1997" },
  { value:"1996",label:"1996" },
  { value:"1995",label:"1995" },
  { value:"1994",label:"1994" },
  { value:"1993",label:"1993" },
  { value:"1992",label:"1992" },
  { value:"1991",label:"1991" },
  { value:"1990",label:"1990" },
  { value:"1989",label:"1989" },
  { value:"1988",label:"1988" },
  { value:"1987",label:"1987" },
  { value:"1986",label:"1986" },
  { value:"1985",label:"1985" },
  { value:"1984",label:"1984" },
  { value:"1983",label:"1983" },
  { value:"1982",label:"1982" },
  { value:"1981",label:"1981" },
  { value:"1980",label:"1980" },
  { value:"1979",label:"1979" },
  { value:"1978",label:"1978" },
  { value:"1977",label:"1977" },
  { value:"1976",label:"1976" },
  { value:"1975",label:"1975" },
  { value:"1974",label:"1974" },
  { value:"1973",label:"1973" },
  { value:"1972",label:"1972" },
  { value:"1971",label:"1971" },
  { value:"1970",label:"1970" },
  { value:"1969",label:"1969" },
  { value:"1968",label:"1968" },
  { value:"1967",label:"1967" },
  { value:"1966",label:"1966" },
  { value:"1965",label:"1965" },
  { value:"1964",label:"1964" },
  { value:"1963",label:"1963" },
  { value:"1962",label:"1962" },
  { value:"1961",label:"1961" },
]

// const [selected,setSelected]=React.useState(false)
const onSubmit=(values)=>{
  
  setexperience(values)

  history.push("/education")
  }

const formik=useFormik({
  initialValues:{
    resume:[{
    employer:"",
    jobtitle:"",
    city:"",
    state:"",
    startmonth:"",
    startyear:"",
    endmonth:"",
    endyear:""}],
    data:"",
  presentlywork:[false]},
    
    onSubmit
})


const [editor, setEditor] = useState({
  content: formik.values.data || ""
})



const [experience, setexperience] = useState('')
// const[number,setnumber]=useState(1)
const[empty,setempty]=useState()


const defaultvalue=(value)=>{
  // console.log("default",value)
return options? options.find(options=>options.value===value):""
}


function handleChange(content){
  setEditor({content})
}

const Resume=()=>{
 
  let length=formik.values.resume.length
  let index= length-1;
  
  let additionaldata={
    employer:"",
    jobtitle:"",
    city:"",
    state:"",
    startmonth:"",
    startyear:"",
    endmonth:"",
    endyear:""}
  
  for(let i=index;i<length;i++)
  {
    formik.values.resume.push(additionaldata)
   formik.values.presentlywork.push(false)

  }
 setempty(index)

}

const Remove=()=>{
  
  
  
  let length=formik.values.resume.length
 
  if(formik.values.resume.length>1)
  {
    formik.values.resume.pop()
  }
  
  setempty(length)
}
  
// const handleMonth=(value,index)=>{
//   console.log("value-->",value, "index-->",index);
  
// }

const checkbox=()=>{
  let length= formik.values.resume.length
   let index=length-1

   for(let i=index;i<length;i++)
   {
    formik.setFieldValue(`presentlywork[${i}]`,!formik.values.presentlywork[i])
    formik.setFieldValue(`resume[${i}].endmonth`,"")
    formik.setFieldValue(`resume[${i}].endyear`,"")
   }
}


 console.log("presentlywork",formik.values.presentlywork)
console.log("formik.values",formik.values) 

	    return (
	      <div className="Experience container">
          
        <div className="top">


        <div className="row">

        <div className="col">
        <h5>EXPERIENCE</h5>
        <p>List your work experience, from the most recent to the oldest. Feel free to use our pre-written examples.</p> 
        </div>
        </div>

       <div  className="middle">
       <form onSubmit={formik.handleSubmit}>
       


             { formik.values.resume.map((item,i)=>{
    return (
     
     

   <>
     <div className="row">
     <div className="col-md-4">
     <label>Employer</label><br/>
     <input className="input" placeholder="e.g.IBM" name={`resume[${i}.employer]`}
      value={formik.values.resume[i].employer} onChange={formik.handleChange}></input>

     </div>

     <div className="col-md-4">
     <label>Job title</label><br/>
     <input className="input" placeholder="e.g.Engineer" name="jobtitle" name={`resume[${i}.jobtitle]`}
      value={formik.values.resume[i].jobtitle} onChange={formik.handleChange}></input>
     </div>
       </div>


       <div className="row ">
       
       <div className="col-md-4">
       <label>City</label><br/>
       <input className="input" placeholder="e.g.Chennai" name="city" name={`resume[${i}.city]`}
      value={formik.values.resume[i].city} onChange={formik.handleChange} ></input>
       </div>

       <div className="col-md-4">
       <label>State</label><br/>
       <input className="input" placeholder="e.g.Tamil Nadu" name="state" name={`resume[${i}.state]`}
      value={formik.values.resume[i].state} onChange={formik.handleChange}></input>
       </div>
         </div>


         <div className="row">
       
       <div className="col-md-2">
       <label>Start date</label><br/>
      <Select  placeholder="Month" options={options} onChange={(value)=>{formik.setFieldValue(`resume[${i}].startmonth`,value.value)}}
        value={defaultvalue(formik.values.resume.startmonth)} ></Select>
       </div>

       <div className="col-md-2">
      <Select className="select-year" placeholder="Year" options={options1} 
      onChange={(value)=>{formik.setFieldValue(`resume[${i}].startyear`,value.value)}} value={defaultvalue(formik.values.resume.startyear)}></Select>
       </div>

         
       
       <div className="col-md-2">
       <label>End date</label><br/>
      <Select  placeholder="Month" options={options} 
      onChange={(value)=>{formik.setFieldValue(`resume[${i}].endmonth`,value.value)}} value={defaultvalue(formik.values.resume.endmonth)}
      isDisabled={formik.values.presentlywork[i]}></Select>
       </div>

       <div className="col-md-2">
      <Select  className="select-year"  placeholder="Year" options={options1} 
      onChange={(value)=>{formik.setFieldValue(`resume[${i}].endyear`,value.value)}} value={defaultvalue(formik.values.resume.endyear)}
      isDisabled={formik.values.presentlywork[i]}></Select>
       </div>
        </div>

       
        <div className="row"> 
          <div className="col-md-4 offset-6">
          <input className="Checkbox" type="checkbox" checked={formik.values.presentlywork[i]} 
          onClick={checkbox}></input>
          <label>I presently work here</label>
            </div>
             </div>

         {/* </div>  */}
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
           


            <div className="row text-editor">
            <label>Job description</label>
          <div className="col-md-6">
          <ReactQuill  theme="snow"   onChange={handleChange}
			     value={editor.content} onBlur={(value)=>formik.setFieldValue("data",  "" + editor.content)}/>
            </div>

            <div className="col-md-6">
              <div className="career-field">
              <p>Choose your career field and sub-field to find relevant pre-written examples.</p>
              </div>
            
            </div>
            <div className="Button">
            <Button className="Back" onClick={history.goBack}>BACK</Button>
            <Button className="Submit" type="submit">SUBMIT</Button>
           </div>
            </div>
 

           
          
           




           </form>
           </div>

          





            </div>
        </div>
	    );
	
}