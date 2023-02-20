import React from "react";
import reactLogo from "../src/assets/react.svg"
import "./Navbar.css"

export default function Navbar() {
    return (
        <nav className="navbar">
            <img className="logo" src={reactLogo}/>
            <h1>React Test Page</h1>
        </nav>
    )
}