import React from 'react';
import { Container } from 'react-bootstrap';
import './App.scss';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <header className='App-header'>
        <Container fluid>
          <Header></Header>
        </Container>
      </header>

    </div>
  );
}
export default App;
