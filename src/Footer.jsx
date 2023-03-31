import React from "react";
import fblogo from "./images/fb-logo.png"
import instalogo from "./images/insta-logo.png"


function Footer() {
    return(
        <div className="footer">
            <footer>
                <div className="footer-content">


                    
                    <div className="footer-address">

                        <div className="text">
                            <p>TROK Ry</p>
                            <p>Lemminkäisenkatu 30</p>
                            <p>20520, Turku</p>
                            <p>toimisto@trok.fi</p>
                            <p>Y-tunnus: 2675325-4</p>

                        </div>


                        <div className="social-logos">

                            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/trokry"><img src={fblogo} alt="facebook logo"/></a>
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/trokry/"><img src={instalogo} alt="instagram logo"/></a>
                        
                        </div>

                        

                    </div>
                

                    
                    
                    
                        
                        
                    

                    

                    
               
                        
                        

                </div>
                    
                    

                    
                
            </footer>
        </div>
    )
}

export default Footer;