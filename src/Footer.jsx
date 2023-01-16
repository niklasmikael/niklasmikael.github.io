import React from "react";
import fblogo from "./images/fb-logo.png"
import instalogo from "./images/insta-logo.png"
import linktree from "./images/linktree.png"

function Footer() {
    return(
        <div className="footer">
            <footer>
                <div className="footer-content">


                    
                    <div className="footer-address">

                        <div className="text">
                        <p>TROK Ry</p>
                        <p>Joukahaisenkatu 3</p>
                        <p>20520, Turku</p>
                        <p>toimisto@trok.fi</p>
                        <p>Y-tunnus: 2675325-4</p>

                        <div className="social-logos">
                        <img src={fblogo}/>
                        <img src={instalogo}/>
                        <img src={linktree}/>

                        </div>
                        </div>

                        

                    </div>
                

                    
                    
                    
                        
                        
                    

                    

                    
               
                        
                        

                </div>
                    
                    

                    
                
            </footer>
        </div>
    )
}

export default Footer;