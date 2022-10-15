import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Main from './views/Main'
import Navbar from './components/Navbar'
import Form from './components/Form';
import Quotes from './components/Quotes'
import Topics from './components/Topics';
import Authors from './components/Authors';
import {Routes, Route} from 'react-router-dom';



const App = () => {
  const [allQuotes, setAllQuotes] = useState([]);
  // const [update, setUpdate] = useState(false);

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
  //     })vi
  // }, [update])

  const removeFromDom = QuoteId => {
      setAllQuotes(allQuotes.filter((quoteshow) => quoteshow._id !== QuoteId));
  }



  return (
    <div>
      {/* <Main/> */}
      <Navbar/>
      <div>
        <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/quotes' element={<Quotes allQuotes={allQuotes} removeFromDom={removeFromDom} />} />
            <Route path='/quotes/new' element={<Form setAllQuotes={setAllQuotes} allQuotes={allQuotes}/>} />
            <Route path='/quotes/topics/:topic' element={<Topics allQuotes={allQuotes} removeFromDom={removeFromDom} />} />
            <Route path='/quotes/authors/:author' element={<Authors allQuotes={allQuotes} removeFromDom={removeFromDom} />} />
            {/* <Route path='/quotes/:id' element={<View/>}/> */}
            {/* <Route path='/quotes/:id' element={<View setUpdate = {setUpdate} update = {update}/>} /> */}
        </Routes>
        </div>

    </div>
  );
}

export default App;
