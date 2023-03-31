import React from "react";
import { Link } from "react-router-dom";

function CompanyCard({title, desc, cta }) {

    

    
    return(
        <div className="company-cards">

            <div className="companycard-title">
                <h2>{title}</h2>
            </div>

            <div className="description">
                <p>{desc}</p>     
            </div>

            { cta === ''

            ?

            <div></div>

            :
            
            <div className="cta-button">
                <Link to="/yhteystiedot"><button>{cta}</button></Link>
            </div>

            }
            




        </div>
    )
}

export default CompanyCard;