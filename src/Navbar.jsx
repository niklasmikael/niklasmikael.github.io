import React, {useState } from "react";
import { Link } from "react-router-dom";
import troklogo from "./images/trok-logo-white.png"
import hamburger from "./images/hamburger-menu-icon-white.png"




function Navbar() {

const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  const [drop, setDrop] = useState(false);

  const toggleDrop = () => {
    
    setDrop(!drop);
  }

    return(

        <div>

            

            <nav>
            
            <ul className="nav-list">

            <div className="nav-top-logo">

                <a className="nav-top-logo" href="/"><img width="443px" height="175px" src={troklogo} alt="logo"/></a>

            </div>

                <img onClick={toggleDrop} className="hamburger-menu" src={hamburger} alt="hamburger menu icon"/>


                <li onClick={toggleDrop} className={drop ? "nav-list-item" : "nav-list-hide"}><Link to="/">Etusivu</Link></li>
                <li onClick={toggleClass} className={drop ? "nav-list-trok" : "nav-list-hide"}><Link to="#">Trok Ry</Link>

                    <ul onClick={toggleClass} className={isActive ? "nav-list-dropdown" : "hidden"}> {/*Toggles dropdown*/}

                      <li onClick={toggleDrop} className="nav-list-item"><Link to="/kilta">Kilta</Link></li>
                      <li onClick={toggleDrop} className="nav-list-item"><Link to="/saannot">Säännöt</Link></li>
                      <li onClick={toggleDrop} className="nav-list-item"><Link to="/hallitus">Hallitus</Link></li>
                      <li onClick={toggleDrop} className="nav-list-item"><Link to="/toimisto">Toimisto</Link></li>

                    </ul>
                
                </li>
              
                <li onClick={toggleDrop} className={drop ? "nav-list-item" : "nav-list-hide"}><Link to="/yrityksille">Yrityksille</Link></li>
                <li onClick={toggleDrop} className={drop ? "nav-list-item" : "nav-list-hide"}><Link to="/yhteystiedot">Yhteystiedot</Link></li>
                
            </ul>
            
            </nav>
        </div>
       
    )
}

export default Navbar;