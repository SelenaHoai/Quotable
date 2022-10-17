import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
// import {Link, useNavigate} from 'react-router-dom'

    
const Authors = (props) => {
    // const [topic, setTopic] = useState({})
    const [quotes, setQuotes] = useState([])
    const { removeFromDom } = props;
    const { author } = useParams();
    // const navigate = useNavigate();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/quotes/authors/${author}`)
            .then(res => {setQuotes(res.data.author)
            console.log(res)})
            .catch(err => console.error(err));
    }, [author]);
    console.log(props)
    
    // DELETE
    const deleteQuote = (QuoteId) => {
        axios.delete(`http://localhost:8000/api/quotes/delete/${QuoteId}`) // make a request to the DB to delete
        .then(res => {
            removeFromDom(QuoteId);
        })
        .catch(err => console.error(err));
    }


    return (
        <div>
            <div className="all-quotes">
                {quotes.map((quotesShow) => {
                return (
                    <div key={quotesShow._id} className="quote-box">
                        <p>"{quotesShow.quote}"</p>
                        <p style={{textAlign:"end"}}>{quotesShow.author}</p>
                    </div>
                    )
                })
            }
            </div>
        </div>
    );
}


    
export default Authors;



