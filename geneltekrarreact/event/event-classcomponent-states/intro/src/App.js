
import Events from './components/event-intro/Event.jsx';
import Counter from './components/class-components/Counter.jsx'
import UseStateExample from './components/useStateExample/UseStateExample.jsx';
function App() {
  return (
    <div className="App">
    <Events/>
    <Counter count={10} />
    <Counter  />
   <UseStateExample/>



    </div>
  );
}

export default App;
