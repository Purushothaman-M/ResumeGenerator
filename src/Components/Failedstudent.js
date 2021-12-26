import React from 'react'

export default function Failedstudent(props) {

    
    const initial= localStorage.getItem("data")
    const list=JSON.parse(initial)
    console.log("list--->",list)



   


    return (
        <div style={{display:"flex", border: "2px solid rgb(162, 0, 255)",width:"90vw"}}>
        <div  style={{display:"flex", border: "2px solid yellow",width:"45vw",}}>
<h2 style={{textAlign:"center"}}>Male</h2>
<div style={{marginTop:"15%",}}>
  { list&&list!==null&&list.map((el,i)=>{
        let passname=""
return ( el.index.map((e,i)=>{

console.log("el--->",e)
if(e.mark<=40&&el.gender==="male"){
    passname=el.name
}
}),
<div>{passname}</div>
)
    })}
  </div>
        </div>
<div  style={{display:"flex", border: "2px solid lightgreen",width:"45vw",justifyContent:"center"}}>
<h2 style={{textAlign:"center"}}>Female</h2>
<div style={{marginTop:"15%",}}>
{ list&&list!==null&&list.map((el,i)=>{
        let passname=""
return( el.index.map((e,i)=>{

console.log("el--->",e)
if(e.mark<=40&&el.gender==="female"){
    passname=el.name
}
}),
<div>{passname}</div>

)
    })}
</div>
</div>

    </div>
)
}
   
