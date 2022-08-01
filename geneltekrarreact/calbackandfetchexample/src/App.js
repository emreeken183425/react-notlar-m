
import './App.css';
import fetch from 'node-fetch';
function App() {
  return (
    <div >
     
     fetch("https://jsonplaceholder.typicode.com/users")
     .then((data)=>console.log(data.json()))
    
    </div>
  );
}

export default App;
