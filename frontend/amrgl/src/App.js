import React from 'react';
import ViewPortComponent from './ViewPortComponent';
import Nav from './NavigationComponent';
import Scaleline from './ScalelineComponent';
import './NavigationComponent.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className = "TopView">
      <Nav></Nav>
      </div>
      <div className = "BottomView">
      <ViewPortComponent>
      </ViewPortComponent>
      </div>
      <div className = "Scaleline">
      <Scaleline></Scaleline>
      </div>
    </div>
  );
}

export default App;