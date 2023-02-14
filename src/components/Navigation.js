import React from 'react';
import { Navbar, OverlayTrigger, Tooltip, Button} from 'react-bootstrap';
import logo from '../images/logo.png'
function renderTooltip(props) {
    return (
      <Tooltip id="button-tooltip" {...props}>
        saurabh@khatiwada.dev
      </Tooltip>
    );
}

export default function Navigation() {
    return (
        <div>
            <Navbar>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="SK Logo" width='36' height='36' />
                    &nbsp; &nbsp;khatiwada.dev
                    </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    <OverlayTrigger
                            placement="right"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip}>
                            <Button href='mailto:saurabh@khatiwada.dev' variant="outline-success">Email</Button>
                        </OverlayTrigger>
                        &nbsp;&nbsp;&nbsp;
                        <a href="https://www.linkedin.com/in/saurabhkhatiwada/" target="_blank" rel="noopener noreferrer" >LinkedIn</a>
                        &nbsp;&nbsp;&nbsp;
                        <a href="https://github.com/skhati1/" target="_blank" rel="noopener noreferrer">Github</a>

                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
