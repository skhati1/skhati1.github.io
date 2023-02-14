import React from 'react';
import './App.css';
import {Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Abilities from './components/Abilities';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col sm>
            <Navigation />
          </Col>
        </Row>
        <Row>
          <Col sm>
            <Profile />
          </Col>
        </Row>
        <Row>
          <Col sm>
            <Projects />
          </Col>
        </Row>
        <Row>
          <Col sm>
            <Abilities />            
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
