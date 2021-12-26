import React, { useState } from "react";
import { BrowserRouter as Router,Route,Link,Switch,Redirect} from "react-router-dom";
import Objective from "./Screen/Objective/Objective";
import PersonalInfo from "./Screen/Personalinfo/personalinfo";
import Education from "./Screen/Education/education"
import Home from "./Screen/Home/home";
import Errorpage from "./Screen/Errorpage/errorpage";
import Experience from "./Screen/Experience/Experience";

export default function App() {


 return(

  <Router>
    
   <nav>
    <Link to="/">Home</Link>
    <Link style={{marginLeft:20}} to="/Objective">Objective</Link>
    <Link style={{marginLeft:20}} to="/PersonalInfo">PersonalInfo</Link>
    <Link style={{marginLeft:20}} to="/Education">Education</Link>
    <Link style={{marginLeft:20}} to="/Experience">Experience</Link>

   </nav>
      <Switch>
     <Route path="/" exact component={Home}  />
     <Route path="/Objective" exact component={Objective} />
     <Route path="/PersonalInfo" exact component={PersonalInfo} />
     <Route path="/Education" exact component={Education} />
     <Route path="/Experience" exact component={Experience} />

     <Route path="*" component={Errorpage}/>
   </Switch>
  </Router>
   
 )
}

