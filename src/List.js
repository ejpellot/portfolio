import React from 'react'
import {BrowserRouter as Router, NavLink} from 'react-router-dom'
const List =()=>{

    return(
        
        <div className = "tab">
        <NavLink to = "/"
        className = "inactive"
        activeStyle={{ fontWeight: "bold" }}
        exact>Home</NavLink>|
         <NavLink to = "/aboutme"
        className = "inactive"
        activeStyle={{ fontWeight: "bold"  }}>About Me</NavLink>
        
    </div>
   
    )

}
export default List;