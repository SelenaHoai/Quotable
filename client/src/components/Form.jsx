import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'


// EXPORT
const Form = (props) => {
    const [name, setName] = useState("");
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
            name,
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
            const errorResponse = err.response.data.errors; 
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
    //     navigate('/pirates')
    // }
        
    return (
        <div className="add-quote-page">
            <div className="add-form">
                <div style={{display:"flex", justifyContent:"space-between", margin:10}}>
                    <h2>Add Quote</h2>
                    <button><Link to={"/"} style={{textDecoration:"none", color:"black", paddingLeft:10, paddingRight:10}}>Home</Link></button>
                </div>
                <form onSubmit={createQuote}>
                    <div>
                        <label>Author Name: </label>
                        <select onChange={(e) =>setName(e.target.value)} value={name}>
                            <option value='Tony Robbins'>Tony Robbins</option>
                            <option value='Roy Bennett'>Roy Bennett</option>
                            <option value='Isaac Newton'>Isaac Newton</option>
                            <option value="Stephen King">Stephen King</option>
                            <option value="Thich Nhat Hanh">Thich Nhat Hanh</option>
                            <option value="Mother Theresa">Mother Theresa</option>
                            <option value="Ralph W. Emerson">Ralph W. Emerson</option>
                            <option value="Helen Keller">Helen Keller</option>
                            <option value="Roy T. Bennett">Roy T. Bennett</option>
                            <option value="Arthur Ashe">Arthur Ashe</option>
                            <option value="Lao Tzu">Lao Tzu</option>
                            <option value="Andre Gide">Andre Gide</option>
                            <option value="Ibn Battuta">Ibn Battuta</option>
                            <option value="Anita Desai">Anita Desai</option>
                        </select>
                    </div>
                    <div style={{marginTop:10, marginBottom:10}}>
                        <label>Topic: </label>
                        <select onChange={(e) =>setTopic(e.target.value)} value={topic}>
                            <option value="Inspiration">Inspiration</option>
                            <option value="Motivation">Motivation</option>
                            <option value="Travel">Travel</option>
                            <option value="Philosophy">Philosophy</option>
                            <option value="Reminder">Reminder</option>
                            <option value="Change">Change</option>
                            <option value="Love">Love</option>
                        </select>
                    </div>
                    <div>
                        <label>Quote: </label>
                        <input onChange={(e) =>setQuote(e.target.value)} value={quote}/><br />
                    </div>
                    <div>
                        <div style={{marginTop:10}}>
                            <input onClick={handleCheckBox1} onChange={(e) => setIsFavorite(e.target.value)} value={isFavorite} checked={isFavorite ? 'checked' : ''} type="checkbox" /> Favorite
                        </div>
                        {errors.map((err, index) => <p key={index} style={{color:"red"}}>{err}</p>)}
                        <div style={{display:"flex", justifyContent:"center"}}>
                            <button style={{margin:10}}>Add Quote</button> 
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form

