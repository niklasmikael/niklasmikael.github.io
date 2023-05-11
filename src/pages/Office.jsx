import React, { useState, useEffect } from "react";
import _ from 'lodash';




function Office() {


    Date.prototype.getWeek = function() {
        var date = new Date(this.getTime());
        date.setHours(0, 0, 0, 0);
        // Thursday in current week decides the year.
        date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
        // January 4 is always in week 1.
        var week1 = new Date(date.getFullYear(), 0, 4);
        // Adjust to Thursday in week 1 and count number of weeks from date to week1.
        return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
                              - 3 + (week1.getDay() + 6) % 7) / 7);
      }

    const date = new Date();
    const week = date.getWeek();

    

    const [data,setData]=useState([]);
    // API call to server to fetch office schedule
    const getData = () => {
        fetch(`https://my.trok.fi/api/getOne/${week}`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        )
        .then(function(response){
            
            return response.json();
        })
        .then(function(myJson) {

            if (_.isEmpty(myJson)) {
                setData({
                    "monday": "-",
                    "tuesday": "-",
                    "wednesday": "-",
                    "thursday": "-",
                    "friday": "-",
                    "info": "-",
                })
            } else {
                setData(myJson);
            }
            
            
        });
            
        }

        useEffect(() => {
            getData();
          }, []);

    

    return (
        <div className="container">

            <p>TROKin toimisto sijaitsee Lemminkäisenkadun kampuksella tilassa LEM_B013. Päivitämme jokaisen viikon aukioloajat somekanavissamme ennen jokaisen viikon alkua.</p>
            <p>Tervetuloa oleskelemaan toimistolle kahvikupposen kanssa oven ollessa auki!</p>
            <p>Toimisto toimii kaikille opiskelijoille päivystysaikana ajanviettopaikkana sekä jäsenpalvelupisteenä.</p>
            <p>Toimistolla voitte kavereiden kanssa ottaa luentojen välissä kupin kahvia, tehdä koulutöitä tai muuten vaan hengailla hallituslaisten kanssa.</p>
            <p>Toimistolla myydään tapahtumalippuja, haalarimerkkejä ja muita oheistuotteita. Tule kurkkaamaan mitä kaikkea kivaa toimistolta löytyy!</p>
            <p>Nähdään toimistolla!</p>

            <hr />

            {<p>Viikko {date.getWeek()}</p>}

            <h2>Aukioloajat tällä viikolla</h2>

            <div className="open-hours">

                <div className="days">

                    <p>Maanantai: </p>
                    <p>Tiistai: </p>
                    <p>Keskiviikko: </p>
                    <p>Torstai: </p>
                    <p>Perjantai: </p>
                </div>

                <div className="times">

                

                    <p>{data.monday}</p>
                    <p>{data.tuesday}</p>
                    <p>{data.wednesday}</p>
                    <p>{data.thursday}</p>
                    <p>{data.friday}</p>
                    

                

                </div>

                
            </div>

            <div>
                
                    <p>{data.info}</p>

            </div>

            
            

            
            
            
            
            


        </div>
  );
    
}

export default Office;