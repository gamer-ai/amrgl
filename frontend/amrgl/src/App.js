import React from 'react';
import View from './components/controllerview/ViewWithControl';
import './components/controllerview/ViewWithControl.css';
import Footer from './components/footer/FooterComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <View></View>
      <div className = "Footer">
      <Footer></Footer>
      </div>
    </div>
  );
}

export default App;