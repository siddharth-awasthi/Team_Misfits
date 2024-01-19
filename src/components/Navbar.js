import { Component } from "react";
import "./Navbar.css";
import "./Home"
import "./Data"
import "./about"


class Navbar extends Component{
    state= { clicked: false };
    handleClick =()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render() {
    return(
    <>
    <nav>
        <a href="https://www.sih.gov.in/sih2023PS" target="_blanck">
        <img src="g.png" className="navimg" alt="" />
        </a>
        <div>
            <ul id="ul" className={this.state.clicked? "#ul active": "#ul"} >
                <li><a href="#home">Home</a></li>
                <li><a href="#abt">About</a></li>
                <li><a href="#skl">Data</a></li>
                <li><a href="index.html">Ppt</a></li>
                <li><a href="index.html"></a></li>
            </ul>
        </div>
        <div id="mobile" onClick={this.handleClick}>
            <i id = "bar" 
            className={this.state.clicked ? "fas fa-times":"fas fa-bars"}></i>
        </div>
    </nav>
    </>
    )
}
}

export default Navbar;