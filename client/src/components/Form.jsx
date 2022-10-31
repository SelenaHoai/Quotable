import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


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

        
    return (
        <div className="add-quote">
            <div className="add-form">
                <div style={{textAlign:"center", margin:10, marginBottom:30}}>
                    <h2>New Quote</h2>
                </div>
                <form onSubmit={createQuote}>
                    <div>
                        <div className="d-flex justify-content-between">
                            <label htmlFor="inputAuthorName" style={{fontSize:18}}>Author Name:</label> 
                            <input type="text" onChange={(e) =>setAuthor(e.target.value)} value={author} />
                        </div>
                        <div className="d-flex justify-content-between mt-3 mb-3">
                            <label htmlFor="inputTopic" style={{fontSize:18}}>Topic: </label>
                            <select onChange={(e) =>setTopic(e.target.value)} value={topic}>
                                <option value="- Select -">- Select Topic -</option>
                                <option value="Motivational">Motivational</option>
                                <option value="Travel">Travel</option>
                                <option value="Love">Love</option>
                                <option value="Reminder">Reminder</option>
                                <option value="Inspiring">Inspiring</option>
                                <option value="Funny">Funny</option>
                            </select>
                        </div>
                        <div className="d-flex justify-content-between">
                            <label htmlFor="inputQuote" style={{fontSize:18}}>Quote:</label>  
                            <input type="text" onChange={(e) =>setQuote(e.target.value)} value={quote} />
                        </div>
                    </div>
                    <div>
                        <div className="mt-3" style={{fontSize:18}}>
                            <input onClick={handleCheckBox1} onChange={(e) => setIsFavorite(e.target.value)} value={isFavorite} checked={isFavorite ? 'checked' : ''} type="checkbox" /> Favorite
                        </div>
                        {errors.map((err, index) => <p key={index} style={{color:"red"}}>{err}</p>)}
                        <div style={{display:"flex", justifyContent:"center"}}>
                            <button className="btn btn-secondary mt-4 mb-3" style={{fontSize:18}}>Add Quote</button> 
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Form

