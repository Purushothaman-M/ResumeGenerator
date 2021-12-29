import { useFormik } from 'formik'
import {Button} from "react-bootstrap"
import React, { useState } from 'react'
import Editor from '../../Components/Quill'
import { useHistory } from 'react-router'

export default function Objective({location:{state}}) {
  let history=useHistory()
  // let temp=JSON.parse(JSON.stringify(state))

  const onSubmit=(values)=>{
    let val=values
      // let objectiveval={...val,...temp}
      // console.log("skilldata",objectiveval)
  }

const formik=useFormik({
  initialValues:{
    objectivedata:""
  },
  onSubmit
})
const [editor, setEditor] = useState({
  content: formik.values.objectivedata || ""
})
function handleChange(content){
  setEditor({content})
}
  return (
    <div className='Objective'>
       <form>
      <div className='container'>
<h2>OBJECTIVE</h2>
<div className='subcontain'>
  <div>
    <Editor className="quill"  onChange={handleChange}
			value={editor.content} onBlur={(value)=>formik.setFieldValue("objectivedata",  "" + editor.content)}/>
  </div>
  <div>
 
  </div>
</div>
      
      <div className="row">
        <div className="colimd-6">
      <Button className='Back' onClick={history.goBack} >{"Back"}</Button>
      <Button className='Submit' type="submit" >{"SUBMIT"}</Button></div></div>
      </div> 
      </form>  
    </div>
  
  )
}
