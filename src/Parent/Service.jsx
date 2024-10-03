import React from "react"
import Spareact from "./Spareact"
import Spaangulare from"./Spaangular"
import { Link,Outlet } from "react-router-dom"
import Spaangular from "./Spaangular"
function Service(){
    return(
        <div>
            <h2>Our Services </h2>
            <ul>   
            <Link to="/Service/react"><li>React Developer</li></Link>
            <Link to="/Service/angular"><li>Angulare Developer</li></Link>
           <Outlet></Outlet>

            </ul>
        </div>
    )
}
export default Service
























