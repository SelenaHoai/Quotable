import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Form from '../components/Form';
import Quotes from '../components/Quotes'
// import Topics from '../components/Topics';
// import Authors from '../components/Authors';
import {Routes, Route} from 'react-router-dom';


const Main = () => {
    const [allQuotes, setAllQuotes] = useState([]);
    // const [update, setUpdate] = useState(false);vifdfd

    useEffect (() => {
        axios.get("http://localhost:8000/api/quotes")
        .then(res => {
            console.log(res.data);
            setAllQuotes(res.data)
        })
        .catch(err => {
            console.log("XXXX", err);
        })
    }, [])


    // useEffect (() => {
    //     axios.get("http://localhost:8000/api/quotes")
    //     .then(res => {
    //         console.log(res.data);
    //         setAllQuotes(res.data)
    //     })
    //     .catch(err => {
    //         console.log("XXXX", err);
    //     })
    // }, [update])

    // const removeFromDom = quoteId => {
    //     setAllQuotes(allQuotes.filter((quote) => quote._id !== quoteId));
    // }

    return (
        <div>
            <Routes>
                <Route path='/quotes' element={<Quotes/>} />
                <Route path='/quotes/new' element={<Form setAllQuotes = {setAllQuotes} allQuotes = {allQuotes}/>} />
                {/* <Route path='/quotes/:id' element={<View/>}/> */}
                {/* <Route path='/quotes/:id' element={<View setUpdate = {setUpdate} update = {update}/>} /> */}

            </Routes>
        </div>
    )
}

export default Main;