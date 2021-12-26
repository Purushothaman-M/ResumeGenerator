import React from 'react'
import { BrowserRouter as Router,Route,Switch,Link,} from 'react-router-dom'
import Home from "./Screens/Home"
import Details from "./Screens/Details"
import "./App.css"

export default function App() {
  return (
    <Router>
      <div style={{height:40,width:"100vw",backgroundColor:"#2bffae",flexDirection:"row",justifyContent:"space-around",display:"flex",alignItems:"center"}}>
<Link to="/home"> 
Home
</Link>
<Link to="/details">
  Details
</Link>
      </div>
      <Switch>
        <Route path="/home" exact component={Home}/>
        <Route path="/details" exact component={Details}/>
       
      </Switch>
    </Router>
  ) 
}
 