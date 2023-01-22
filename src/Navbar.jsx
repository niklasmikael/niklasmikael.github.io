import React, {useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import troklogo from "./images/trok-logo-white.png"
import hamburger from "./images/hamburger-menu-icon-white.png"




function Navbar() {

const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  const [drop, setDrop] = useState(false);

  const toggleDrop = () => {
    console.log("Kissa")
    setDrop(!drop);
  }

    return(

        <div>

            

            <nav>
            
            <ul className="nav-list">

            <div className="nav-top-logo">

                <a href="/"><img width="443px" height="175px" src={troklogo}/></a>

            </div>



                
            
                <img onClick={toggleDrop} className="hamburger-menu" src={hamburger} alt="hamburger menu icon"/>
                <li className={drop ? "nav-list-item" : "nav-list-hide"}><Link to="/">Etusivu</Link></li>


                <li onClick={toggleClass} className={drop ? "nav-list-trok" : "nav-list-hide"}><a>TROK ry</a>

                    <ul className={isActive ? "nav-list-dropdown" : "hidden"}> {/*Toggles dropdown*/}

                    <li className="nav-list-item"><Link to="/kilta">Kilta</Link></li>
                    <li className="nav-list-item"><Link to="/saannot">Säännöt</Link></li>
                    <li className="nav-list-item"><Link to="/hallitus">Hallitus</Link></li>
                    <li className="nav-list-item"><Link to="/toimisto">Toimisto</Link></li>

                    </ul>
                
                </li>
                


                
                <li className={drop ? "nav-list-item" : "nav-list-hide"}><Link to="/yrityksille">Yrityksille</Link></li>
                <li className={drop ? "nav-list-item" : "nav-list-hide"}><Link to="/yhteystiedot">Yhteystiedot</Link></li>
                
               
                

               
 
                
                
            </ul>
            
            </nav>
        </div>
       
    )
}

export default Navbar;