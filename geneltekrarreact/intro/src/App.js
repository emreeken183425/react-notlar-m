
import './App.css';
import Header from './components/Header.jsx'
import Users from './components/Users'
import Counter from './components/Counter.jsx';
import ExampleInput from './components/ExampleInput';
import UseeffectExample from './components/UseeffectExample.jsx'

const friends=["ahmet","mehmet","habip"]
function App() {
  return (
    <div >
      {/* <Header/> */}
      {/* <Counter/> */}
      {/* <ExampleInput/> */}
      <UseeffectExample/>
     
      {/* <Users
       name="emre"
       surname= "eken"
       isLoggedIn={true}
       age={30}
       friends={friends}
      /> */}
      
    </div>
  );
}

export default App;
