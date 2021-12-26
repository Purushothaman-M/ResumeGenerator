import React, { useState,useEffect } from 'react'
import Formdata from '../Components/Form'
import { BrowserRouter as Router,Route,Switch,Link,useHistory } from 'react-router-dom'
import List from '../Components/List'
import Failedstudent from "../Components/Failedstudent"
import Passedstudent from "../Components/Passedstudent"

export default function Details(props) {
const [name,setName]=useState(null)

    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(name));
      }, [name]);
   
    return (
        <div style={{display:"flex",flexDirection:"row",height:"100vh" }}>
            <Router basename="details" >
                  <div style={{width:"10%",backgroundColor:"#13f1df",flexDirection:"column",justifyContent:"space-evenly",display:"flex",alignItems:"center"}}>
  <Link to="/list">List</Link>
  <Link to="/entrydata">Enter New Data</Link>
  <Link to="/passedstudent">Passed Student</Link>
  <Link to="/failedstudent">Failed Student</Link>
   </div> 
   <Switch>
   <Route path="/list" exact  component={List}/>
   <Route path="/entrydata" exact component={Formdata}/>
   <Route path="/passedstudent" exact component={Passedstudent}/>
   <Route path="/failedstudent" exact component={Failedstudent}/>
   </Switch>
   </Router>
</div>
    
    )
}
