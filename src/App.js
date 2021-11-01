import Card from './components/Card/Card';
import data from './data';

import './App.scss';

function App() {
  return (
    <div className="App">
      {data.map((person) => 
        <Card {...person}/>
      )}
    </div>
  );
}

export default App;
