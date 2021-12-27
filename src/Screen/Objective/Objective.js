import { useFormik } from 'formik'
import {Button} from "react-bootstrap"
import React, { useState } from 'react'
import Editor from '../../Components/Quill'

export default function Objective(props) {

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
      </div> 

      <Button className='Submit' type="submit" >{"SUBMIT"}</Button>
      </form>  
    </div>
  
  )
}
