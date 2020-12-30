import React from 'react';
import ViewPortComponent from './ViewPortComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <ViewPortComponent></ViewPortComponent>
      {/* <SceneComponent antialias onSceneReady={onSceneReady} onRender={onRender} id='viewport' /> */}
    </div>
  );
}

export default App;