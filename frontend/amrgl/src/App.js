import React from 'react';
import ViewPortComponent from './ViewPortComponent';
import Nav from './NavigationComponent';
import Scaleline from './ScalelineComponent';
import './NavigationComponent.css';
import Footer from './FooterComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className = "Navigation">
      <Nav></Nav>
      </div>
      <div className = "BottomView">
      <ViewPortComponent>
      </ViewPortComponent>
      </div>
      <div className = "Scaleline">
      <Scaleline></Scaleline>
      </div>
      <div className = "Footer">
      <Footer></Footer>
      </div>
    </div>
  );
}

export default App;