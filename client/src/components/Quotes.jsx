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
        <div>
            <div style={{backgroundColor:"rgb(172, 141, 175)"}}> 
                <h1 style={{textAlign:"center", color:"white"}}>ALL QUOTES</h1>
            </div>
            <div className="all-quotes">
                {props.allQuotes.map((quoteshow) => {
                return (
                    <div key={quoteshow._id} className="quote-box">
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



