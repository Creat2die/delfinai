import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

    const [jokess, setJokes] = useState([]);

    useEffect(()=>{

        axios.get('https://v2.jokeapi.dev/joke/Programming?amount=10')
        .then(res => setJokes(res.data.jokes));
    }, []);


    return (
      <div className="App">
        <header className="App-header"> 
        <h1> Not funny Joke </h1>
        <p>
            {
                jokess.map(u => <p key={u.id}>{u.joke}</p>)
            }
        </p>
        <p style={{color: 'red'}}>Dvigubas prikolas</p>
        <p>

            {
                jokess.map(u => <p style={{color: 'green'}} key={u.id}>{u.setup} <span style={{color: 'yellow'}}>{u.delivery}</span></p>)
            }
        </p>
        </header>
      </div>
    );
  }
  
  export default App;
  