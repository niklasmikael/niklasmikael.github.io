import React from "react";


function Card({title, name, email}) {
    return (
        <div className="card">

            <div className="card-title">
            <p>{title}</p>
            </div>

            <div className="card-name-email">
            <p id="card-name">{name}</p>
            <p>{email}</p>
            </div>
            

        </div>
    )
}

export default Card;