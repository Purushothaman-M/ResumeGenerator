import React, {  useEffect, useState } from "react";

export default function List(props) {
  
const initial= localStorage.getItem("data")
const list=JSON.parse(initial)
console.log("list--->",list)

  return (
      <div style={{display:"flex", border: "2px solid rgb(162, 0, 255)",width:"90vw"}}>
          <div  style={{display:"flex", border: "2px solid yellow",width:"45vw",}}>
<h2 style={{textAlign:"center"}}>Male</h2>
<div style={{marginTop:"15%",}}>
    {list && list!==undefined && list.map((el)=>{
if(el.gender==="male"){
    return(
        <div>
            {el.name}
        </div>
    )
}    
    })}
    </div>
          </div>
<div  style={{display:"flex", border: "2px solid lightgreen",width:"45vw",justifyContent:"center"}}>
<h2 style={{textAlign:"center"}}>Female</h2>
<div style={{marginTop:"15%",}}>
  { list && list!==undefined &&list.map((el,i)=>{
    console.log("el-->",el)
if(el.gender==="female"){
    return(
        <div>
            {el.name}
        </div>
    )
}     
    })}
</div>
</div>

      </div>
  )
}
