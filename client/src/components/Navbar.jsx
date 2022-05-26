import React, {useState} from 'react';



const Navbar = () => {
    const [name, setAuthorName] = useState("");
    const [topic, setTopicName] = useState("");


  return (
    <div className="nav-bar">
      <div>
        <h3>QUOTABLE</h3>
      </div>
      <div className="nav-dropmenu">
        <a href="/quotes">Quotes</a>
        <div style={{marginLeft:30, marginRight:30}}>
          <label for="authors">Authors: </label>
          <select onChange={(e) => setAuthorName(e.target.value)} value={name}>
            <option value="tonyrobbins">Tony Robbins</option>
            <option value="roybennett">Roy Bennett</option>
            <option value="isaacnewton">Isaac Newton</option>
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
          <label for="topics">Topics: </label>
          <select onChange={(e) => setTopicName(e.target.value)} value={topic}>
            <option value="inspiration">Inspiration</option>
            <option value="motivation">Motivation</option>
            <option value="travel">Travel</option>
            <option value="philosophy">Philosophy</option>
            <option value="reminder">Reminder</option>
            <option value="change">Change</option>
            <option value="love">Love</option>
          </select>
        </div>
      </div>
      <div>
        <button onClick="#" style={{marginRight:10}}>Register</button>
        <button onClick="#">Login</button>
      </div>
    </div>
  );
}

export default Navbar;
