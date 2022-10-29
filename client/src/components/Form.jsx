import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'


// EXPORT
const Form = (props) => {
    const [author, setAuthor] = useState("");
    const [topic, setTopic] = useState("");
    const [quote, setQuote] = useState("");

    const [isFavorite, setIsFavorite] = useState(true);

    const [errors, setErrors] = useState([]); 
    const navigate = useNavigate();

    // function to submit and create a product
    const createQuote = (e) => {
        e.preventDefault();
        
        //create the obj
        const newQuote = {
            author,
            topic,
            quote,
            isFavorite,
        }
        console.log(newQuote);

        // go to the server and pass the obj using post
        // match the post route with the SERVER ROUTE
        axios.post("http://localhost:8000/api/quotes/new", newQuote)
        .then(res => {
            console.log("SUCCESS", res.data)
            props.setAllQuotes([...props.allQuotes,res.data]);
            navigate('/quotes', {replace:true})
        })
        .catch(err => {
            console.log(err)
            const errorResponse = err.data.errors; 
            const errorArr = []; 

            for (const key of Object.keys(errorResponse)) { 
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })
    }

    function handleCheckBox1 () {
        setIsFavorite ((currentCondition) => {
            return setIsFavorite(!currentCondition);
        })
    }

        
    // const handleCancel = () => {
    //     navigate('/author', {replace:true})
    // }

    // const handleCancel = (e) => {
    //     e.preventDefault()
    //     navigate('/quotes')
    // }
        
    return (
        <div className="add-quote">
            <div className="add-form">
                <div style={{textAlign:"center", margin:10, marginBottom:30}}>
                    <h2>Add Quote</h2>
                </div>
                <form onSubmit={createQuote}>
                    <div>
                        <div className="d-flex justify-content-between">
                            <label for="inputAuthorName">Author Name:</label> 
                            <input type="text" onChange={(e) =>setAuthor(e.target.value)} value={author} /> <br />
                        </div>
                        <div className="d-flex justify-content-between mt-2 mb-2">
                            <label for="inputTopic">Topic:</label>  
                            <input type="text" onChange={(e) =>setTopic(e.target.value)} value={topic} /> <br />
                        </div>
                        <div className="d-flex justify-content-between">
                            <label for="inputQuote">Quote:</label>  
                            <input type="text" onChange={(e) =>setQuote(e.target.value)} value={quote} /><br />
                        </div>
                    </div>
                    <div>
                        <div className="mt-2">
                            <input onClick={handleCheckBox1} onChange={(e) => setIsFavorite(e.target.value)} value={isFavorite} checked={isFavorite ? 'checked' : ''} type="checkbox" /> Favorite
                        </div>
                        {errors.map((err, index) => <p key={index} style={{color:"red"}}>{err}</p>)}
                        <div style={{display:"flex", justifyContent:"center"}}>
                            <button className="btn btn-secondary mt-4 mb-3">Add Quote</button> 
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}


// // EXPORT
// const Form = (props) => {
//     const [author, setAuthor] = useState("");
//     const [topic, setTopic] = useState("");
//     const [quote, setQuote] = useState("");

//     const [isFavorite, setIsFavorite] = useState(true);

//     const [errors, setErrors] = useState([]); 
//     const navigate = useNavigate();

//     // function to submit and create a product
//     const createQuote = (e) => {
//         e.preventDefault();

//         //create the obj
//         const newQuote = {
//             author,
//             topic,
//             quote,
//             isFavorite,
//         }
//         console.log(newQuote);

//         // go to the server and pass the obj using post
//         // match the post route with the SERVER ROUTE
//         axios.post("http://localhost:8000/api/quotes/new", newQuote)
//         .then(res => {
//             console.log("SUCCESS", res.data)
//             props.setAllQuotes([...props.allQuotes,res.data]);
//             navigate('/quotes', {replace:true})
//         })
//         .catch(err => {
//             const errorResponse = err.response.data.errors; 
//             const errorArr = []; 
//             for (const key of Object.keys(errorResponse)) { 
//                 errorArr.push(errorResponse[key].message)
//             }
//             setErrors(errorArr);
//         })
//     }

//     function handleCheckBox1 () {
//         setIsFavorite ((currentCondition) => {
//             return setIsFavorite(!currentCondition);
//         })
//     }

        
//     // const handleCancel = () => {
//     //     navigate('/author', {replace:true})
//     // }

//     // const handleCancel = (e) => {
//     //     e.preventDefault()
//     //     navigate('/pirates')
//     // }
        
//     return (
//         <div className="add-quote-page">
//             <div className="add-form">
//                 <div style={{display:"flex", justifyContent:"space-between", margin:10}}>
//                     <h2>Add Quote</h2>
//                     <button><Link to={"/"} style={{textDecoration:"none", color:"black", paddingLeft:10, paddingRight:10}}>Home</Link></button>
//                 </div>
//                 <form onSubmit={createQuote}>
//                     <div>
//                         <label>Author Name: </label>
//                         <select onChange={(e) =>setAuthor(e.target.value)} value={author}>
//                             <option value="reesewitherspoon">Reese Witherspoon</option>
//                             <option value="elberthubbard">Elbert Hubbard</option>
//                             <option value="mothertheresa">Mother Theresa</option>
//                             <option value="thichnhathanh">Thich Nhat Hanh</option>
//                             <option value="Stephen Chbosky">Stephen Chbosky</option>
//                         </select>
//                     </div>
//                     <div style={{marginTop:10, marginBottom:10}}>
//                         <label>Topic: </label>
//                         <select onChange={(e) =>setTopic(e.target.value)} value={topic}>
//                             <option value="motivation">Motivation</option>
//                             <option value="travel">Travel</option>
//                             <option value="love">Love</option>
//                         </select>
//                     </div>
//                     <div>
//                         <label>Quote: </label>
//                         <input onChange={(e) =>setQuote(e.target.value)} value={quote}/><br />
//                     </div>
//                     <div>
//                         <div style={{marginTop:10}}>
//                             <input onClick={handleCheckBox1} onChange={(e) => setIsFavorite(e.target.value)} value={isFavorite} checked={isFavorite ? 'checked' : ''} type="checkbox" /> Favorite
//                         </div>
//                         {errors.map((err, index) => <p key={index} style={{color:"red"}}>{err}</p>)}
//                         <div style={{display:"flex", justifyContent:"center"}}>
//                             <button style={{margin:10}}>Add Quote</button> 
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

export default Form

