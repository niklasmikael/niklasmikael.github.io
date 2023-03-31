import React from "react";
import { Link } from "react-router-dom";


function Contact() {

    
    return(

        <div className="container">

            <div className="contact-info">
                <h2>Yhteystiedot</h2>


                <div className="contact-office">
                <h3>Hallituksen yhteystiedot</h3>
                <Link to="/hallitus"><button>Kaikki yhteystiedot</button></Link>
                </div>
                <div className="contact-office">
                <h3>Toimisto</h3>
                    <p>TROK ry</p>
                    <p>Lemminkäisenkatu 30 - TIERA</p>
                    <p>20520 Turku</p>
                    <p>toimisto@trok.fi</p>
                </div>

                <div className="contact-invoice">
                    <h3>Laskutustiedot</h3>
                    <p>laskutus@trok.fi</p>
                </div>

            {/*</div>
            

            <Form />

            <div>*/}
    
            
            </div>
        </div>
            

            
        
    )
}

export default Contact;