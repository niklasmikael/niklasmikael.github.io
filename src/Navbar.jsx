import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import troklogo from "./images/trok-logo-white.png"



function Navbar() {

    return(

        <div>

            

            <nav>
            
            <ul className="nav-list">

            <div className="nav-top-logo">

                <img width="443px" height="175px" src={troklogo}/>

            </div>

                
            

                <li className="nav-list-item"><Link to="/">Etusivu</Link></li>


                <li className="nav-list-trok"><Link to="/">TROK Ry</Link>

                    <ul className="nav-list-dropdown">

                    <li className="nav-list-item"><Link to="/kilta">Kilta</Link></li>
                    <li className="nav-list-item"><Link to="/saannot">Säännöt</Link></li>
                    <li className="nav-list-item"><Link to="/hallitus">Hallitus</Link></li>
                    <li className="nav-list-item"><Link to="/toimisto">Toimisto</Link></li>

                    </ul>
                
                </li>
                


                
                <li className="nav-list-item"><Link to="/yrityksille">Yrityksille</Link></li>
                <li className="nav-list-item"><Link to="/yhteystiedot">Yhteystiedot</Link></li>
                
               
                

               
 
                
                
            </ul>
            
            </nav>
        </div>
       
    )
}

export default Navbar;