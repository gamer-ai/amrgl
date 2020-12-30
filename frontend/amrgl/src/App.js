import React from 'react';
import ViewPortComponent from './ViewPortComponent';
import AddIcon from '@material-ui/icons/Add';
import './button.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <button id = "floatingButton" className="round select" ><AddIcon></AddIcon></button>
      <ViewPortComponent>
      </ViewPortComponent>
    </div>
  );
}

export default App;