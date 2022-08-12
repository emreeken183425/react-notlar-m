import './App.css';
import Counter from './components/Counter'
import IncreaseCounter from './components/IncreaseCounter'
import DecreaseCounter from './components/DecreaseCounter'
import IncreaseByTwoCounter from './components/IncreaseByTwoCounter'
function App() {

  return (
    <div className="app">
     
<Counter />
<IncreaseCounter />
<DecreaseCounter />
<IncreaseByTwoCounter />

    </div>
  );
}

export default App;
