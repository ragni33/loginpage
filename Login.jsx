import React from "react";
import { Container, Button, Nav, Navbar} from "react-bootstrap";


export class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <>
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">WEB DEV</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <br />
        <div className="base-container" style={ {backgroundColor: "white"} }>
            <div className="header"><h2>Login </h2></div>
            <div className="content">
                <div className="image">
                    <img src="/images/imglogo.png"  width={"700px"} height={"700px"} />
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username"> Username </label>
                        <input type='text' name="username" placeholder="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"> Password </label>
                        <input type='password' name="password" placeholder="password" />
                    </div>
                </div>
                <br />
            </div> <div className="footer">
    
            <Button variant="primary">Register Here </Button>{' '}
  
    </div>
    </div>
    </>
}
}