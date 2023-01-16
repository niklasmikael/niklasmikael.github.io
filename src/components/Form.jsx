import React from "react";


function Form(){
    return(
        <div className="form">
            <p>Yhteydenottolomake</p>
        <form>
            <div className="form-fields">
                <input type="text" id="input-name" placeholder="Nimi"/>
                <input type="email" id="input-email" placeholder="Sähköpostiosoite"/>
                <input type="text" id="input-subject" placeholder="Aihe"/>
                <textarea name="message "type="text" id="input-message" placeholder="Kirjoita viestisi tähän..."/>
                <button name="submit" type="submit" id="contact-submit" >Lähetä</button>
            </div>
        </form>
        </div> 
    )
}

export default Form;