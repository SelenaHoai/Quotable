import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";


    
const Topics = (props) => {
    const [quotes, setQuotes] = useState([])    
    const { removeFromDom } = props;
    const { topic } = useParams();
    

    useEffect(() => {
        axios.get(`http://localhost:8000/api/quotes/topics/${topic}`)
            .then(res => {setQuotes(res.data.topic)
            console.log(res)})
            .catch(err => console.error(err));
    }, [topic]);
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
                })}
            </div>
        </div>
    );
}


    
export default Topics;



