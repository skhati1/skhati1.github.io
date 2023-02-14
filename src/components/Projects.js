import React from 'react';
import { Tab, ListGroup, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { GetGithubProjects } from '../business-logic/getGithubProjects';

export default function Projects() {
    const [repos, setRepos] = React.useState([])
    const contentTextAlign = {
        textAlign: 'left'
    }
    React.useEffect(() => {
        const runner = async () => {
            const res = await GetGithubProjects()
            setRepos(res)
        }
        runner()
    }, [])
    return (
        <div>
            <h4>Projects</h4>
            <hr />
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#helloCloud">
                <Row>
                    <Col sm={4}>
                        <ListGroup>
                            <ListGroup.Item action href="#helloCloud">
                                Hello Cloud
                            </ListGroup.Item>
                            {repos.map(repo =>
                                <ListGroup.Item action href={`#${repo.name}`}>
                                    {repo.name}
                                </ListGroup.Item>
                            )}
                        </ListGroup>
                    </Col>
                    <Col sm={8}>
                        <Tab.Content style={contentTextAlign}>
                            <Tab.Pane eventKey="#helloCloud">
                                <p>A hands-on workshop designed for students of Towson University, along with <a href="https://www.codebyalex.com/" target="_blank" rel="noopener noreferrer">Alex Wilson</a>, about the basics of cloud development using AWS with an emphasis on development in conjunction with DevOps.</p>
                                <a href="https://github.com/CodeByAlex/HelloCloud"><Button variant="outline-info">Source Code</Button></a>
                            </Tab.Pane>
                            {repos.map(repo =>
                                <Tab.Pane eventKey={`#${repo.name}`}>
                                    <p>{repo.description ? repo.description : `Check out this project on its own live site!`}</p>
                                    <Button href={repo.code} variant="outline-info">Source Code</Button>
                                    &nbsp;
                                    <Button href={repo.url} variant="outline-info">Live Demo</Button>
                                </Tab.Pane>
                            )}
                        </Tab.Content>
                    </Col>

                </Row>
            </Tab.Container>
            <hr />
        </div>
    );
}
