import React from "react";
import Form from "../components/Form"
import { Link } from "react-router-dom";


function Contact() {

    
    return(

        <div className="container">

            <div className="contact-info">
            <h2>Yhteystiedot</h2>
            
            <p>Toimisto: toimisto@trok.fi</p>
            <p><Link to="/hallitus">Hallituksen yhteystiedot</Link></p>
            <p>Toimiston sijainti koululla: Huone 101 Datacityssä</p>
            </div>
            

            <Form />

            <div>
    
            
            </div>
            

            
        </div>
    )
}

export default Contact;