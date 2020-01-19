import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Container from '@material-ui/core/Container'
import Home from './pages/Homepage'


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Container maxWidth="md">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;