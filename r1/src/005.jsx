import './App.css';
import Kosmosas from './Components/005/Kosmosas';
import Kn from './Components/005/Kn';
import Labas from './Components/005/Labas';
import ReactBase3 from './Components/005/ReactBase3';
import rand from './Functions/rand';
import ReactBase4 from './Components/005/ReactBase4';
import ReactBase5 from './Components/005/ReactBase5';
import ReactBaseList1 from './Components/005/ReactBaseList1';
import ReactBaseList2 from './Components/005/ReactBaseList2';
import ReactBaseList3 from './Components/005/ReactBaseList3';
import ReactBaseList4 from './Components/005/ReactBaseList4';
import ReactBaseList5 from './Components/005/ReactBaseList5';

const  geltona = 'yellow';
const  ms = {color: geltona, backgroundColor: 'skyblue'};
const mas= ['Pilkis', 'Murkis', 'Gagarinas' ];
const massp=['blue', 'red'];
const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];


function App() {
  const pasisveikinimas = 'labas Seni ! Kaip gyveni';
  const pasisveikinimas3 = "Zebrai ir Bebrai";
  const header41 = "Sveiki atvyke";
  const header42 = "Ką jus gero";
  const tekstas51 = "testskas510";
  const tekstas52 = "testas520";
  const spalva5="green";
  return (
    <div className="App">
      <header className="App-header">
        
        {dogs.map((n,i) => <ReactBaseList1 key={i} dog1={n}></ReactBaseList1>)}
        {dogs.sort().map((n,i) => <ReactBaseList2 key={i} skaic2={dogs.length-i} dog2={n}></ReactBaseList2>)}
        {dogs.map((n,i) => <ReactBaseList3 key={i} skaic3={dogs.length-i} dog3={n}></ReactBaseList3>)}
        {dogs.map((n,i) => <ReactBaseList4 key={i} dog4={n}></ReactBaseList4>)}
        {dogs.map((n,i) => <ReactBaseList5 key={i} skaic5={dogs[i].length} dog5={n}></ReactBaseList5>)}
        <ReactBase5 text51={tekstas51} text52={tekstas52} color5={spalva5} />
        <ReactBase4 text111={header41} text2={header42} />
        <ReactBase3 pasis3={pasisveikinimas3} spalva3={massp[rand(0,1)]}/>
        {
           massp.map((spalva,i) => <ReactBase3 key={i} pasis3={'mapas'} spalva3={spalva}/>)
        }
        <Labas  pasis={pasisveikinimas}></Labas>
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
