import { useFormik } from 'formik'
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
    <div className='contain'>
       <form>
      <div className='container'>
<h2>OBJECTIVE</h2>
<div className='subcontain'>
  <div>
    <Editor className="quill"  onChange={handleChange}
			value={editor.content} onBlur={(value)=>formik.setFieldValue("data",  "" + editor.content)}/>
  </div>
  <div>
  <button className='submitbnt' >{"SUBMIT"}</button>
  </div>
</div>
      </div> 
      </form>  
    </div>
  
  )
}
