import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ListedItems from './Components/ListItem';
import './App.css';

function App() {
  const [list, setList] = useState([])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon').then((response) => {
      setList(response.data.results)
    })
  }, [])

  return (
    <div className="App">
      {list.map((element, index) => {
        return <ListedItems name={element.name} key={index} />
      })}
    </div>
  );
}

export default App;
