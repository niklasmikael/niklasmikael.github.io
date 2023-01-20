import React, { useState, useEffect } from "react";
import Card from "../components/Card"


function Board() {

    const year = new Date();


    const [board,setBoard]=useState([]);
    // API call to server to fetch office schedule
    const getBoard = () => {
        fetch(`http://localhost:3000/api/get/board`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        )
        .then(function(response){
            console.log(response)
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson)
            setBoard(myJson);
        });
            
        }
    // Store schedule to a variable
    useEffect(()=>{

        getBoard()
        
        },[])









    return(
        <div className='container'>

            
                <div className='header'>
                <h1>Hallituksen jäsenet {year.getFullYear()} </h1>
                </div>
            
            <div className='board-cards'>

            <h2>Puheenjohtajisto</h2>


                <div className="cards">

                

                
                    {
                    board.map((item, i) => {

                        if (board[i].boardDepartment === 'Puheenjohtajisto') {
                        
                            return (
                                
                                <Card title={board[i].title} name={board[i].fName} email={board[i].email} key={i} />    
                                  
                            );

                            }

                            return null;
                    })
                    }

                </div>

                    <h2>Rahastonhoito</h2>


                <div className="cards">
                    {
                    board.map((item, i) => {

                        if (board[i].boardDepartment === 'Rahastonhoito') {
                        
                            return (
                            
                                <Card title={board[i].title} name={board[i].fName} email={board[i].email} key={i} />      
                            );

                            }

                            return null;
                    })
                    }

                </div>


                <h2>Media ja viestintä</h2>

                
                <div className="cards">

                {
                    board.map((item, i) => {

                        if (board[i].boardDepartment === 'Media ja viestintä') {
                        
                            return (
                            
                                <Card title={board[i].title} name={board[i].fName} email={board[i].email} key={i} />      
                            );

                            }

                            return null;
                    })
                    }
                </div>
                


                <h2>Tapahtumavastaavat</h2>

                <div className="cards">

                {
                    board.map((item, i) => {

                        if (board[i].boardDepartment === 'Tapahtumavastaavat') {
                        
                            return (
                            
                                <Card title={board[i].title} name={board[i].fName} email={board[i].email} key={i} />      
                            );

                            }

                            return null;
                    })
                    }

                </div>

                    <h2>Muu hallitus</h2>

                <div className="cards">

                    {
                    board.map((item, i) => {

                        if (board[i].boardDepartment === 'Muu hallitus') {
                        
                            return (
                            
                                <Card title={board[i].title} name={board[i].fName} email={board[i].email} key={i} />      
                            );

                            }

                            return null;
                    })
                    }

                </div>








                {/*

                <div className='pj'>
            
                <Card title={board.title} name={board.fName} email={board.email} />
                <Card title="Varapuheenjohtaja" name="Lauri Linnemäki" email="toimisto@trok.fi"/>
                
                
                </div>

                <h2>Rahastonhoito</h2>

                <div className='money'>
                <Card title="Varapuheenjohtaja ja rahastonhoito" name="Katarina Jokinen" email="laskutus@trok.fi"/>
                </div>

                <h2>Media ja viestintä</h2>

                <div className='media-comm'>

                <Card title="Media ja viestintä" name="Mari Nahkala" email="toimisto@trok.fi"/>
                <Card title="Media ja viestintä" name="Oona Viitanen" email="toimisto@trok.fi"/>
                </div>

                <h2>Tapahtumavastaavat</h2>
                 
                <div className='events'>
                <Card title="Tapahtumat" name="Albert Koskinen" email="tapahtumat@trok.fi"/>
                <Card title="Tapahtumat" name="Veera Silvonen" email="tapahtumat@trok.fi"/>
                </div>

                <h2>Muu hallitus</h2>

                <div className='others'>
                <Card title="Edunvalvonta" name="Foley Fiona" email="toimisto@trok.fi"/>
                <Card title="Työelämä ja excursiot" name="Niklas Erland" email="toimisto@trok.fi"/>
                <Card title="Haalarit" name="Niklas Kaamanen" email="toimisto@trok.fi"/>
                </div>
                
        
            */}
            </div>
            
            

        </div>
        
        
    )
}

export default Board;