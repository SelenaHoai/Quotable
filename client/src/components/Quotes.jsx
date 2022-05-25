import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import { useParams } from "react-router-dom";
// import {Link, useNavigate} from 'react-router-dom'

    
const Quotes = (props) => {
    const [quotes, setQuotes] = useState({})
    // const { id } = useParams();
    // const navigate = useNavigate();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/quotes/`)
            .then(res => {setQuotes(res.data)
            console.log(res)})
            .catch(err => console.error(err));
    }, []);
    
    
    return (
        <div>
            <div> 

                <h1>THIS IS ALL QUOTES PAGE</h1>
                <p>{quotes.quote}</p>
                <p>{quotes.name}</p>
                <p>{quotes.isFavorite}</p>

            </div>
            <div>{props.allQuotes.map((quote) => {
                return (
                    <div key={quote._id}>
                        <div>
                            <h3>{quotes.quote}</h3>

                        </div>
                    </div>
                    )
                })
            }
            </div>
        </div>
    );
}





    
export default Quotes;



