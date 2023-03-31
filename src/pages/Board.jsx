import React, { useState, useEffect } from "react";
import Card from "../components/Card"


function Board() {

    const year = new Date();


    const [board,setBoard]=useState([]);
    // API call to server to fetch office schedule
    const getBoard = () => {
        fetch(`http://my.trok.fi/api/get/board`,
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

                        if (board[i].title !== 'Puheenjohtaja' || board[i].title !== 'Varapuheenjohtaja' ) {
                        
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

                        if (board[i].boardDepartment === 'Media ja viestintä') {
                        
                            return (
                            
                                <Card title={board[i].title} name={board[i].fName} email={board[i].email} key={i} />      
                            );

                            }

                            return null;
                    })
                    }
                </div>
 
            </div>
        </div>   
    )
}

export default Board;