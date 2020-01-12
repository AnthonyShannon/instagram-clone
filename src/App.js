import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import MyImage from './testPhoto/profilePhoto.jpg'

function App() {
  return (
    <div className="App">
        <Navbar />
        <Card username="ashannon1990" imageURL={MyImage} />
    </div>
  );
}

export default App;
