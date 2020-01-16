import React from 'react';
import './App.css';
import MyImage from './testPhoto/profilePhoto.jpg';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Container from '@material-ui/core/Container'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Card image={MyImage} 
        username='ashannon1990'
        datePosted='November 13, 2019'
        description='Got some professional headshots done, really like how this one turned out. What do you guys think?' 
        commenter="theGreatestEva2"
        comment="looks great broski"
        />
      </Container>
    </div>
  );
}

export default App;