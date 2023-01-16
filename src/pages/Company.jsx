import React from "react";
import Form from "../components/Form"
import CompanyCard from "../components/CompanyCard";


function Companies() {
    return (


        <div>

        <div className="companies">
            
            <div className="company-text">

                <p>Rakennusinsinöörejä ja -mestareita valmistuu Turussa vuosittain noin 200 ja heistä lähes jokainen työllistyy nopeasti viimeistään valmistumisen jälkee eri rakennusalan tehtäviin. Opiskelijamme valmistuvat rakennusalan eri työtehtäviin joita ovat muun muassa johto-, esimies-, suunnittelutehtävät sekä erilaiset konsultointitehtävät. Opiskelijamme sijoittujat niin korjausrakentamisen, uudisrakentamisen kuin myös infrarakentamisen osaamisalueille.</p>
                <p>Opiskelijayhdistys TROK ry tekee jatkuvaa yhteistyötä monien yritysten kanssa taatakseen opiskelijoille laajan ja kattavan kuvan tulevaisuuden työpaikoista.</p>
                <p>Ota yhteyttä, niin keskustellaan miten Teidän yrityksenne voi hyödyntää TROKia uusien osaajien etsinnässä!</p>

            </div>

            </div>
            
            <div className="container-company">

            

            <CompanyCard title="Yhteistyökumppanit" desc="TROKin yhteistyökumppanit vaihtelevat eri kokoisista rakennusalan yrityksistä Turun yökerhoihin, sekä pienempiin alamme opiskelijoita kiinnostaviin yrityksiin. Yhteistyömuotoja eri tahojen kanssa ovat esimerkiksi haalarisponsoroinnit, yhteiset tapahtumat, yritys-esittelyt ja somekanavissamme näkyvät työpaikkailmoitukset." cta="Ota yhteyttä"/>
            <CompanyCard title="Haalarit" desc="Opiskelijat haalareineen ovat tuttu näky Turun katukuvassa. Rakennusalanopiskelijoita aloittaa Turussa vuosittain lähes 200 ja valtaosa heistä ostaa itselleen TROKin kautta upeat mustat haalarit varustettuna raidalla, jonka neon keltainen väri tulee suoraan rakennusalalta. Haalarit näkyvät opiskelijatapahtumissa läpi vuoden ainakin kolmen vuoden ajan. Haalarimme ovat siis otollinen mainospaikka juuri Sinun yrityksellesi!
Usein opiskelijat kesätyöpaikkaa hakiessaan katsovat ensimmäisinä omia haalareitaan.
Mikäli kiinnostuit mainospaikasta haalareissamme, ota yhteyttä!" cta="Ota yhteyttä"/>
            <CompanyCard title="Yritysvierailut" desc="TROK tarjoaa jäsenilleen monia mahdollisuuksia osallistua yritysvierailuille, eli excursioille. Vierailuissa yritykset pääsevät kertomaan heidän yrityksestää, käyttämään opiskelijoita työmailla sekä toimistoilla. Excursiot mahdollistavat myös suoraan rekrytoimiseen vierailijoiden joukosta. Opiskelijalle vierailut tarjoavat uusia kokemuksia yrityksestä ja mahdollisuuden verkostoitua työelämässä olevien rakennusinsinöörien tai -mestareiden kanssa. Mikäli yrityksesi kaipaa innokkaita ja osaavia rakennusalan tulevia ammattilaisia riveihinsä, ole yhteydessä meihin! Turussa opiskelevat rakennusalan opiskelijat erikoistuvat laajasti eri osaamispoluille, joten kaipaamianne tulevaisuuden asiantuntijoita löytyy varmasti." cta="Ota yhteyttä"/>
            
            </div>
            </div>
        
    )
}

export default Companies;