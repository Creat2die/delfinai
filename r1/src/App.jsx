import './App.css';
import Kosmosas from './Components/005/Kosmosas';
import Kn from './Components/005/Kn';

const  geltona = 'yellow';
const  ms = {color: geltona, backgroundColor: 'skyblue'};
const mas= ['Pilkis', 'Murkis', 'Gagarinas' ];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        HEllo
        {
          mas.map((n, i) => <Kn key={i} name={n}></Kn>)
        }
        <Kosmosas spalva='crimson' krastas='40px'/>
        <Kosmosas spalva={geltona} krastas='20px' manoStilius={ms}/>
      </header>
    </div>
  );
}

export default App;
