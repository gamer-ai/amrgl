import React from 'react';
import ViewPortComponent from './ViewPortComponent';
import Nav from './NavigationComponent';
import './NavigationComponent.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav className = "Nav"></Nav>
      <ViewPortComponent></ViewPortComponent>
    </div>
  );
}

export default App;