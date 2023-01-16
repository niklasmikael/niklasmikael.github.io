import React from "react";

function CompanyCard({title, desc, cta }) {

    

    
    return(
        <div className="company-cards">

            <div className="companycard-title">
                <h2>{title}</h2>
            </div>

            <div className="description">
                <p>{desc}</p>     
            </div>

            { cta == ''

            ?

            <div></div>

            :
            
            <div className="cta-button">
                <button><a>{cta}</a></button>
            </div>

            }
            




        </div>
    )
}

export default CompanyCard;