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
            props.setAllPirates([...props.allPirates,res.data]);
            navigate('/pirates', {replace:true})
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
        <div style={{margin:10}}>
            <div>
                <h2>Add Quotes</h2>
                <button style={{backgroundColor:"blue"}}><Link to={"/"} style={{textDecoration:"none", color:"white"}}>Home</Link></button>
            </div>
            <div>
                <form onSubmit={createQuote}>
                    <div>
                        <label>Author Name: </label>
                        <select onChange={(e) =>setName(e.target.value)} value={name}>
                            <option value='tonyrobbins'>Tony Robbins</option>
                            <option value='roybennett'>Roy Bennett</option>
                            <option value='isaacnewton'>Isaac Newton</option>
                            <option value="stephenking">Stephen King</option>
                            <option value="thichnhathanh">Thich Nhat Hanh</option>
                            <option value="mothertheresa">Mother Theresa</option>
                            <option value="ralphwaldoemerson">Ralph W. Emerson</option>
                            <option value="helenkeller">Helen Keller</option>
                            <option value="roytbennett">Roy T. Bennett</option>
                            <option value="arthurashe">Arthur Ashe</option>
                            <option value="laotzu">Lao Tzu</option>
                            <option value="andregide">Andre Gide</option>
                            <option value="ibnbattuta">Ibn Battuta</option>
                            <option value="anitadesai">Anita Desai</option>
                        </select>
                    </div>
                    <div>
                        <label>Topic: </label>
                        <select onChange={(e) =>setTopic(e.target.value)} value={topic}>
                            <option value="inspiration">Inspiration</option>
                            <option value="motivation">Motivation</option>
                            <option value="travel">Travel</option>
                            <option value="philosophy">Philosophy</option>
                            <option value="reminder">Reminder</option>
                            <option value="change">Change</option>
                            <option value="love">Love</option>
                        </select>
                    </div>
                    <div>
                        <label>Quote: </label>
                        <input onChange={(e) =>setQuote(e.target.value)} value={quote}/><br />
                    </div>
                    <div>
                        <div>
                            <input onClick={handleCheckBox1} onChange={(e) => setIsFavorite(e.target.value)} value={isFavorite} checked={isFavorite ? 'checked' : ''} type="checkbox" /> Favorite
                        </div>
                        {errors.map((err, index) => <p key={index} style={{color:"red"}}>{err}</p>)}
                        <button>Add Quote</button> 
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form

