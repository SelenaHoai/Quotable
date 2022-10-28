import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import logoImage from '../../public/images/Quotable-logoblk.png';

// import React, {useState} from 'react';
// import axios from 'axios';
// import {useNavigate, useParams} from 'react-router-dom';
// import { Link } from 'react-router-dom';


const Navbar = (props) => {
    const [allAuthors, setAllAuthors] = useState([]);
    const [allTopics, setAllTopics] = useState([]);
    // const {topic} = useParams();
    // const {author} = useParams();
    const navigate = useNavigate();
    // const [flip, setFlip] = useState("");
    const [errors, setErrors] = useState([]); 
    

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

// ******************************************

// const Navbar = () => {
//   // const [author, setAuthor] = useState("");
//   // const [topic, setTopic] = useState("");
//   const {topic} = useParams();
//   const {author} = useParams();
//   const navigate = useNavigate();
//   // const [flip, setFlip] = useState("");


// const goToQuotes = () => {
//     navigate("/quotes");
// }

// const showAuthorDropdown = () => {
//     document.getElementById("dropdown_author_content").style.display="inherit";
// }

// const hideAuthorDropdown = () => {
//     document.getElementById("dropdown_author_content").style.display="none";
// }

// const showTopicDropdown = () => {
//   document.getElementById("dropdown_topic_content").style.display="inherit";
// }

// const hideTopicDropdown = () => {
//   document.getElementById("dropdown_topic_content").style.display="none";
// }


// return (
//   <div className="nav-bar">
//     <div>
//       <a href="/"><img src="./images/Quotable-logoblk.png" width="230" height="130"></img></a>
//     </div>
//     <div className="nav-bar">
//       <button className="allQuotes" onClick={goToQuotes}>Quotes</button>
//       <div className="dropdown" onMouseOver={showAuthorDropdown} onMouseOut={hideAuthorDropdown}>
//         <button className="dropbtn">Authors <i className="fa fa-caret-down"></i></button>
//         <div id="dropdown_author_content">
//           <a href={`/quotes/authors/reesewitherspoon`} data-id="reesewitherspoon">Reese Witherspoon</a>
//           <a href={`/quotes/authors/elberthubbard`} data-id="elberthubbard">Elbert Hubbard</a>
//           <a href={`/quotes/authors/mothertheresa`} data-id="mothertheresa">Mother Theresa</a>
//           <a href={`/quotes/authors/thichnhathanh`} data-id="thichnhathanh">Thich Nhat Hanh</a>
//           <a href={`/quotes/authors/Stephen Chbosky`} data-id="Stephen Chbosky">Stephen Chbosky</a>
//         </div>
//       </div>
//       <div>
//       <div className="dropdown" onMouseOver={showTopicDropdown} onMouseOut={hideTopicDropdown}>
//         <button className="dropbtn">Topics <i className="fa fa-caret-down"></i></button>
//         <div id="dropdown_topic_content">
//           <a href={`/quotes/topics/love`} data-id="love">Love</a>
//           <a href={`/quotes/topics/motivation`} data-id="motivation">Motivation</a>
//           <a href={`/quotes/topics/travel`} data-id="travel">Travel</a>
//         </div>
//       </div>
//       </div>
//     </div>
//     {/* <div className="nav-bar">
//       <button onClick="#" style={{marginRight:10, color:"blue", backgroundColor:"white"}}>Register</button>
//       <button onClick="#" style={{marginRight:10, color:"green"}}>Login</button>
//     </div> */}
//   </div>
// );
// }

export default Navbar;
