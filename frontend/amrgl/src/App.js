import React from 'react';
import View from './components/controllerview/ViewWithControl';
import Scaleline from './components/controllerview/viewer/ScalelineComponent';
import './components/controllerview/ViewWithControl.css';
import Footer from './components/footer/FooterComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <View></View>
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