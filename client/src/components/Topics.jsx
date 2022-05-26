import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
// import {Link, useNavigate} from 'react-router-dom'

    
const Topics = (props) => {
    const [topic, setTopic] = useState({})
    // const [quotes, setQuotes] = useState({})
    const { id } = useParams();
    // const navigate = useNavigate();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/quotes/${id}`)
            .then(res => {setTopic(res.data)
            console.log(res)})
            .catch(err => console.error(err));
    }, [id]);
    console.log(props)
    
    return (
        <div>
            <div> 
                <h1 style={{textAlign:"center"}}>THIS IS All Quotes by AUTHOR Page</h1>
            </div>
            <div className="all-quotes">
                {props.allQuotes.map((topicshow) => {
                return (
                    <div key={topicshow._id} className="aquote-box">
                        <p>"{topicshow.quote}"</p>
                        <p style={{textAlign:"end"}}>{topicshow.name}</p>
                    </div>
                    )
                })
            }
            </div>
        </div>
    );
}





    
export default Topics;



