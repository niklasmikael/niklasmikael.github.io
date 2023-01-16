import React from 'react';
import helmet from '../images/trok-kypara.png'
import { Link } from "react-router-dom";
import Logobar from "../components/Logobar"



function Home() {


    return(
        
        <div className="container"> 


                <div className='info'>

                    <div className='info-text info-text-left'>
                        <h2>Tietoa yhdistyksestä</h2>
                        <p>Turun Ammattikorkeakoulun Rakennusalan Opiskelijoiden Kilta TROK ry, on vuonna 2013 perustettu kilta, jonka jäseniksi voivat liittyä kaikki Turun ammattikorkeakoulun rakennusalan opiskelijat.</p>
                        <button><Link to="/kilta">Lue lisää meistä!</Link></button>
                    </div>

                    <div className='info-img right-img'>
                      <img src={helmet} alt="picture of a helmet"/>
                    </div>

                </div>

                <hr />


                <div className='info'>

                    <div className='info-img left-img'>
                        <img src={helmet} alt="picture of a helmet"/>
                    </div>

                    <div className='info-text info-text-right'>
                        <h2>Jäseneksi liittyminen</h2>
                        <p>Jäseneksi liittymisen hyötyjä ovat mm. tämä ja tämä</p>
                        <button><a target="_blank" href="https://kide.app/memberships/2b9e77bc-5f47-4b24-9497-b76ae5bf6bb6">Liity jäseneksi</a></button>
                    </div>


            
                </div>
                
                <hr />

                <Logobar />

                <hr />
                
            

               

{/*Facebook embed*/}
                <div className='facebook-feed instagram-feed'>

                    <div class="fb-page" data-href="https://www.facebook.com/trokry" data-tabs="timeline" data-width="500" data-height="550" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                        
                        <blockquote cite="https://www.facebook.com/trokry" class="fb-xfbml-parse-ignore">

                            <a href="https://www.facebook.com/trokry">TROK ry</a>
                            
                        </blockquote>

                </div>

                </div>
           
                    
                    
         </div>
        

                 
        
    )
}

export default Home;
