import React from 'react';
import ViewPortComponent from './components/viewer/ViewPortComponent';
import Nav from './components/navigation/NavigationComponent';
import Scaleline from './components/viewer/ScalelineComponent';
import './components/navigation/NavigationComponent.css';
import Footer from './components/footer/FooterComponent';
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