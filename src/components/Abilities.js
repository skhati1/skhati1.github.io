import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faGlobe, faLaptopCode, faScroll } from '@fortawesome/free-solid-svg-icons';

const noBullets = {
    textAlign: 'left',
    paddingLeft: '40%',
    marginTop: '20px',
    listStyleType: 'circle'
}
export default function Abilities() {
    return (
        <div>
            <h4>Abilities</h4>
            <br />
            <Container>
                <Row>
                    <Col sm>
                        <h1><FontAwesomeIcon icon={faLaptopCode} /></h1>
                        <ul style={noBullets}>
                            <li>.NET Core (C#)</li>
                            <li>Node JS</li>
                            <li>Java</li>
                            <li>Python</li>
                        </ul>
                    </Col>
                    <Col sm>
                        <h1><FontAwesomeIcon icon={faDatabase} /></h1>
                        <ul style={noBullets}>
                            <li>Microsoft SQL Server</li>
                            <li>PostgreSQL</li>
                        </ul>
                    </Col>
                    <Col sm>
                        <h1><FontAwesomeIcon icon={faGlobe} /></h1>
                        <ul style={noBullets}>
                            <li>ReactJs</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                        </ul>
                    </Col>
                    <Col sm>
                        <h1><FontAwesomeIcon icon={faScroll} /></h1>
                        <ul style={noBullets}>
                            <li>Bash</li>
                            <li>Powershell</li>
                        </ul>
                    </Col>
                </Row>

            </Container>
        </div >
    );
}
