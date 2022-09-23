import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import { useParams } from "react-router-dom";
// import {Link, useNavigate} from 'react-router-dom'

    
const Quotes = (props) => {
    const [quotes, setQuotes] = useState({})
    const { removeFromDom } = props;
    // const { id } = useParams();
    // const navigate = useNavigate();
    
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
            {/* <div style={{backgroundColor:"rgb(172, 141, 175)"}}> 
                <h1 style={{textAlign:"center", color:"white"}}>ALL QUOTES</h1>
            </div> */}
            <div style={{paddingTop:10, paddingLeft:10, paddingRight:10}}>
                <img src="./images/leaves.jpg" width="100%"></img>
            </div>
            <div className="all-quotes">
                {props.allQuotes.map((quoteshow) => {
                return (
                    <div key={quoteshow._id} className="quote-box">
                        <p>"{quoteshow.quote}"</p>
                        <p style={{textAlign:"end"}}>{quoteshow.name}</p>
                        {/* <img src={"./images/trash1.png"} onClick={(e) => {deleteQuote(quoteshow._id)}} style={{width:35, height:30, cursor:"pointer"}} /> */}
                    </div>
                    )
                })
            }
            </div>
        </div>
    );
}





    
export default Quotes;



