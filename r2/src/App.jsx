import './App.scss';
import './bootstrap.css';
import AnimalsContexts from './Components/AnimalsContexts';
import Create from './Components/Create';


const animalTypes = [
  {id: 1,  type: 'Antis'},
  {id: 2,  type: 'Avis'},
  {id: 4,  type: 'Antilopas'},
  {id: 5,  type: 'Bebras'},
  {id: 6,  type: 'Briedis'},
  {id: 7,  type: 'Barsukas'},
];

function App() {
  return (
    <AnimalsContexts.Provider value={{
      animalTypes
    }}>

      
    <div className="container">
      <div className="row">
        <div className="col-4">
          <Create></Create>
        </div>
        <div className="col-8">
          One of three columns
        </div>
      </div>
    </div>
    </AnimalsContexts.Provider>
  );
}

export default App;
