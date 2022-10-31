import React, { useEffect, useState } from 'react'
import axios from 'axios';


const Quotes = (props) => {
    const [quotes, setQuotes] = useState({})
    const { removeFromDom } = props;

    
    useEffect(() => {
// do an if statement with two else after it for alltopics & allauthors
        axios.get(`http://localhost:8000/api/quotes`)
            .then(res => {setQuotes(res.data)
            console.log(res)})
            .catch(err => console.error(err));
    }, []);
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
                {props.allQuotes.map((quotesShow) => {
                return (
                    <div key={quotesShow._id} className="quote-box">
                        <p>"{quotesShow.quote}"</p>
                        <p style={{textAlign:"end", fontStyle: "italic"}}>{quotesShow.author}</p>
                        {/* <img src={"./images/trash1.png"} onClick={(e) => {deleteQuote(quotesShow._id)}} style={{width:35, height:30, cursor:"pointer"}} /> */}
                    </div>
                    )
                })
            }
            </div>
        </div>
    );
}


    
export default Quotes;



