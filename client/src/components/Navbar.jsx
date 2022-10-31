import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Navbar = (props) => {
    const [allAuthors, setAllAuthors] = useState([]);
    const [allTopics, setAllTopics] = useState([]);
    const navigate = useNavigate();
    

  useEffect (() => {
    let tempAuthors = [];
    props.allQuotes.forEach(quotes => {
      if (!tempAuthors.includes(quotes.author)) {
        tempAuthors.push(quotes.author)
      }
    })
    setAllAuthors(tempAuthors);

    console.log(allAuthors)
  }, [props.allQuotes])


  useEffect (() => {
    let tempTopics = [];
    props.allQuotes.forEach(quotes => {
      if (!tempTopics.includes(quotes.topic)) {
        tempTopics.push(quotes.topic)
      }
    })
    setAllTopics(tempTopics);

    console.log(allTopics)
  }, [props.allQuotes])


  const goToQuotes = () => {
      navigate("/quotes");
  }

  const showAuthorDropdown = () => {
      document.getElementById("dropdown_author_content").style.display="inherit";
  }

  const hideAuthorDropdown = () => {
      document.getElementById("dropdown_author_content").style.display="none";
  }

  const showTopicDropdown = () => {
    document.getElementById("dropdown_topic_content").style.display="inherit";
}

const hideTopicDropdown = () => {
    document.getElementById("dropdown_topic_content").style.display="none";
}


  return (
    <div className="nav-bar">
      <div>
        <a href="/"><img src="/images/Quotable-logoblk.png" alt="QuotableLogo" width="230" height="130"></img></a>
      </div>
      <div className="nav-bar">
        <button className="allQuotes" onClick={goToQuotes}>Quotes</button>
        <div className="dropdown" onMouseOver={showAuthorDropdown} onMouseOut={hideAuthorDropdown}>
          <button className="dropbtn">Authors <i className="fa fa-caret-down"></i></button>
          <div id="dropdown_author_content">{
            allAuthors.map((author,idx) => {
              return (
                <div key={idx}>
                  <Link to={`/quotes/authors/${author}`}>{author}</Link>
                </div>
              )
            })
          }</div>
        </div>
        
        <div>
        <div className="dropdown" onMouseOver={showTopicDropdown} onMouseOut={hideTopicDropdown}>
          <button className="dropbtn">Topics <i className="fa fa-caret-down"></i></button>
          <div id="dropdown_topic_content">{
            allTopics.map((topic,idx) => {
              return (
                <div key={idx}>
                  <Link to={`/quotes/topics/${topic}`}>{topic}</Link>
                </div>
              )
            })
          }</div>
        </div>
        </div>
      </div>
      {/* <div className="nav-bar">
        <button onClick="#" style={{marginRight:10, color:"blue", backgroundColor:"white"}}>Register</button>
        <button onClick="#" style={{marginRight:10, color:"green"}}>Login</button>
      </div> */}
    </div>
  );
}


export default Navbar;
