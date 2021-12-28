import { useFormik } from 'formik'
import {Button} from "react-bootstrap"
import React, { useState } from 'react'
import Editor from '../../Components/Quill'
import { useHistory } from 'react-router'

export default function Objective(props) {
  let history=useHistory()

  const onSubmit=(values)=>{
    console.log("onsubmit",values)
  }

const formik=useFormik({
  initialValues:{
    data:""
  },
  onSubmit
})
const [editor, setEditor] = useState({
  content: formik.values.data || ""
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
			value={editor.content} onBlur={(value)=>formik.setFieldValue("data",  "" + editor.content)}/>
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
