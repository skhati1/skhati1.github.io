import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

export default function Profile() {
    return (
        <div>
            <Jumbotron fluid style={{background: 'none'}}>
                <Container>
                    <h1>Saurabh Khatiwada</h1>
                    <span>
                    A Full Stack Software Engineer with a keen eye for effective software architecture and developer process improvement. 
                    </span>
                </Container>
            </Jumbotron>
        </div>
    );
}
