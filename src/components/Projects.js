import React from 'react';
import { Tab, ListGroup, Row, Col } from 'react-bootstrap';
import {Button} from 'react-bootstrap';

export default function Projects() {
    const contentTextAlign = {
        textAlign: 'left'
    }
    return (
        <div>
            <h4>Projects</h4>
            <hr />
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#bbbautoschool">
                <Row>
                    <Col sm={4}>
                        <ListGroup>
                            
                            <ListGroup.Item action href="#helloCloud">
                                Hello Cloud
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>

<Col sm={8}>
                         <Tab.Content style={contentTextAlign}>
                             
                             <Tab.Pane eventKey="#helloCloud">
                                 <p>A hands-on workshop designed for students of Towson University, along with <a href="https://www.codebyalex.com/" target="_blank" rel="noopener noreferrer">Alex Wilson</a>, about the basics of cloud development using AWS with an emphasis on development in conjunction with DevOps.</p>
                                 <a href="https://github.com/CodeByAlex/HelloCloud"><Button variant="outline-info">Starter Code</Button></a>
                             </Tab.Pane>
                         </Tab.Content>
                     </Col>

                </Row>
            </Tab.Container>
            <hr />
        </div>
    );
}
