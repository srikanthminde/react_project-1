import React from "react";
import { Link, Outlet } from "react-router-dom";

function All_links(){
return(
    <div>
    <Link to="/home">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to="/about">About</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to="/contact">Contact</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to="/service">Service</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Outlet></Outlet>
    </div>
)
}

export default All_links;