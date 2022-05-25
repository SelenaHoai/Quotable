import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import { useParams } from "react-router-dom";
// import {Link, useNavigate} from 'react-router-dom'

    
const Quotes = (props) => {
    const [quotes, setQuotes] = useState({})
    // const { id } = useParams();
    // const navigate = useNavigate();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/quotes`)
            .then(res => {setQuotes(res.data)
            console.log(res)})
            .catch(err => console.error(err));
    }, []);
    console.log(props)
    
    return (
        <div className="all-quotes">
            <div> 
                <h1 style={{color:"white", textAlign:"center"}}>THIS IS ALL QUOTES PAGE</h1>
            </div>
            <div>{props.allQuotes.map((quoteshow) => {
                return (
                    <div key={quoteshow._id} className="aquote-style">
                        <p>"{quoteshow.quote}"</p>
                        <p style={{textAlign:"end"}}>{quoteshow.name}</p>
                    </div>
                    )
                })
            }
            </div>
        </div>
    );
}





    
export default Quotes;



