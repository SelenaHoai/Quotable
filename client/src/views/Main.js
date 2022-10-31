import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Main = () => {
    const [ranQuote, setRanQuote] = useState({})


    useEffect(() => {
        setInterval(
            () => axios.get('http://localhost:8000/api/')
            .then(res => {setRanQuote(res.data)}), 
            5000
            )
    }, []);

    
    return (
        <div className="main-page">
            <h3>"{ranQuote.quote}"</h3>
            <h3>{ranQuote.author}</h3>
        </div>
    );
}

export default Main;