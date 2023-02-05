import React from 'react';
import './App.css';
import {Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Abilities from './components/Abilities';
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta property="og:title" content="Khatiwada.DEV Title" />
        <meta property="og:description" content="Khatiwada.DEV Description" />
        <meta property="og:image" content="https://media.licdn.com/dms/image/C4D03AQGHwXKB6mbaJQ/profile-displayphoto-shrink_800_800/0/1516617257332?e=2147483647&v=beta&t=2esGtJ1kcQIiVwEeSGwzVRX4d5CIcBp_-L_bnoOAzco" />
            </Helmet>
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
