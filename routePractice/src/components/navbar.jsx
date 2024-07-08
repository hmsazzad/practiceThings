import React from "react";
import { Link } from "react-router-dom";
import Contact from "./contact";
import Service from "./service";
import Counter from "./counter";
import About from "./about";

function Navbar() {
  return (
    <div className="bg-blue-500 px-[50px]
    py-[20px] flex flex-col">
      <Link to={"/"}>Home</Link>
      <Link to={"/service"}>Service</Link>
      <Link to={"/counter"}>Counter</Link>
      <Link to={"/about"}>About</Link>
    </div>
  );
}

export default Navbar;
