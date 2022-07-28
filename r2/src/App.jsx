import { useEffect, useState } from 'react';
import './bootstrap.css';
import './App.scss';
import AnimalsContexts from './Components/AnimalsContexts';
import Create from './Components/Create';
import List from './Components/List';
import { create, read, destroy } from './functions/localstorage';
import Edit from './Components/Edit';

const keyLock = 'myFantasticZoo';
const animalsTypes = [
  {id: 1,  type: 'Antis'},
  {id: 2,  type: 'Avis'},
  {id: 4,  type: 'Antilopas'},
  {id: 5,  type: 'Bebras'},
  {id: 6,  type: 'Briedis'},
  {id: 7,  type: 'Barsukas'},
];


function App(){

  const [modalData, setModalData] = useState(null);
  const[lastUpdate, setLastUpsdate] = useState(Date.now())

  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [animals, setAnimals] = useState(null);


  useEffect(() => {
    setAnimals(read(keyLock));
  }, [lastUpdate]);

  useEffect(() => {
    if(null === createData){
      return;
    }
    create(keyLock, createData);
    setLastUpsdate(Date.now());
  }, [createData])

  useEffect(() => {
    if(null === deleteData){
      return;
    }
    destroy(keyLock, deleteData);
    setLastUpsdate(Date.now());
  }, [deleteData])



  return (
    <AnimalsContexts.Provider value={{
      animalsTypes, setCreateData, animals,setDeleteData, modalData,
      setModalData
    }}>

      
    <div className="container">
      <div className="row">
        <div className="col-4">
          <Create></Create>
        </div>
        <div className="col-8">
          <List></List>
        </div>
      </div>
    </div>
    <Edit></Edit>
    </AnimalsContexts.Provider>
  );
}

export default App;
