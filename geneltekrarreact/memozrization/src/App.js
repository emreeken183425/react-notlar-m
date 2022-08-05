
import './App.css';
import {useState,useMemo,useCallback} from 'react';
import Header from './components/Header';
import Usememo from './components/Usememo';
import ThemeContext from './context/ThemeContext';
import Buton from './components/Buton';
function App() {
  const [number, setNumber] = useState(0);
  const data = useMemo(()=>{
    return {name:"emre",number}
  },[number])

const increment=useCallback(()=>{
  setNumber(number+1)
},[])

  return (
    <div className="App">

      <ThemeContext.Provider value="dark" >
          <Buton>
            merhaba
           
          </Buton>
      </ThemeContext.Provider>
      {/* <br/><br/>
      <hr/>
      <Header number={number < 5 ? 0 : number} increment={increment}  />
      <hr/>
      <Usememo data={data} />
      <h1>{number}</h1>
      <button onClick={()=> setNumber(number+1) } >INC</button> */}

    </div>
  );
}

export default App;
