import {React, useState } from 'react'
import { FcBusinessman } from "react-icons/fc";
import { FaFacebook,FaGithub,FaArrowRight  } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import './App.css';
import {Link} from 'react-router-dom';
import { Container, Nav, Navbar, Offcanvas, Row, Col, Card, Button, Modal, Pagination,Image } from 'react-bootstrap';

import pic1 from './hobbiespic/coding.jpg';
import pic2 from './hobbiespic/fixing.jpg';
import pic3 from './hobbiespic/pc.jpg';
import pic4 from './hobbiespic/phone-watching.jpg';
import pic5 from './hobbiespic/uno.jpg';

function Hobbies() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
      <>
          <div style={{
            minHeight:"100vh",
            width: "100vw",
            display:"flex",
            flexDirection:"column",
            paddingTop: "60px",
            position:"relative",
            backgroundColor:"#EAD8B1"
          }}>
          <div>
          <Navbar data-bs-theme="dark" fixed="top" style={{backgroundColor:"#001F3F"}}>
          <Container>
          <div>
          <span className="navbar-toggler-icon" 
          style={{marginRight:"5px", cursor:"pointer"}}
          onClick={handleShow}></span>
          </div>
          <FcBusinessman style={{height:"30px", width:"30px", marginRight:"5px",marginLeft:"5px"}} />
            <Navbar.Brand as={Link} to="/" style={{fontWeight:"bold",fontFamily:"Georgia,seriff", marginLeft:"5px"}}>My Personal Website</Navbar.Brand>
            <Nav className="me-auto" variant="pills">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/About">About</Nav.Link>
              <Nav.Link as={Link} to="/hobbies" className="nav-link-hover">Education</Nav.Link>
              <Nav.Link eventKey="disabled" style={{color:"gray"}}>Hobbies</Nav.Link>
              <Nav.Link as={Link} to="/photos" className="nav-link-hover">Photos</Nav.Link>
            </Nav>
        
        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header style={{backgroundColor:"#001F3F" ,color:"white"}} closeButton>
          <Offcanvas.Title>Main Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='text-dark' style={{backgroundColor:"#F5F5DC"}}>
          <Nav className="flex-column" style={{marginLeft:"15px", fontSize:"1.5rem",color:"black"}}>
            <Nav.Link as={Link} to="/home" className="navlink-hover" style={{color:"#001F3F"}} >Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="navlink-hover" style={{color:"#001F3F"}}>About</Nav.Link>
            <Nav.Link as={Link} to="/education" className="navlink-hover" style={{color:"#001F3F"}}>Education</Nav.Link>
            <Nav.Link eventKey="disabled" style={{color:"gray"}}>Hobbies</Nav.Link>
            <Nav.Link as={Link} to="/photos" className="navlink-hover" style={{color:"#001F3F"}}>Photos</Nav.Link>
          </Nav>
        </Offcanvas.Body>
        </Offcanvas>
            </Container>
          </Navbar>          
        </div>

        <div style={{flex:"1", fontFamily:"Georgia,seriff"}}>
        <div className="mt-5">
            <div style={{fontFamily:"Georgia, seriff", display: "flex",justifyContent: "center",alignItems: "center"}}>
              <Container>
              <Row className='mb-4'>
                  <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={pic1} style={{height:"200px", width:"100%", objectFit:"cover"}} />
                    <Card.Body>
                      <Card.Title>Coding</Card.Title>
                      <Card.Text>
                        Ever since i got into college, I grew to love coding and learn more about it.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  </Col>
                  <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={pic4} style={{height:"200px", width:"100%", objectFit:"cover"}} />
                    <Card.Body>
                      <Card.Title>Watching Anime</Card.Title>
                      <Card.Text>
                        My time killer. This is my way to cope up on stress
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  </Col>
                  <Col>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={pic2} style={{height:"200px", width:"100%", objectFit:"cover"}} />
                    <Card.Body>
                      <Card.Title>Fixing Things</Card.Title>
                      <Card.Text>
                        I love fixing small things like watches Desktop Computers and small electronics.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  </Col>
              </Row>
              <Row>
                <Col>
                <Card style={{ width: '18rem', marginLeft:"12rem"}}>
                    <Card.Img variant="top" src={pic3} style={{height:"200px", width:"100%", objectFit:"cover"}} />
                    <Card.Body>
                      <Card.Title>PC Games</Card.Title>
                      <Card.Text>
                        May it be online or single player campaign. The reason im still on college after many years
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={pic5} style={{height:"200px", width:"100%", objectFit:"cover"}} />
                    <Card.Body>
                      <Card.Title>Playing Card Games</Card.Title>
                      <Card.Text>
                        Out family bonding. We love playing uno cards and solitaire
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              </Container>
      </div>
      </div>    
        </div>

          <div>
          <footer style={{
          backgroundColor:"#001F3F",
          fontFamily: "Georgia",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height:"7rem"}}>
            Created by Joshua Anthony S. Aurellano || 2024
            <p style={{paddingTop:"2px"}}>Find me on my Social Media Accounts</p>
            <div>
            <a href="https://www.facebook.com/aurellanojoshuaanthony/"
              target="_blank"
              rel="noopener noreferrer">
            <FaFacebook style={{color:"white", margin: "0 0.5rem"}} />
            </a>
            <a href="https://x.com/joshaurellano"
              target="_blank"
              rel="noopener noreferrer">
            <FaSquareXTwitter style={{color:"white", margin: "0 0.5rem"}} />
            </a>
            <a href="https://github.com/joshaurellano"
              target="_blank"
              rel="noopener noreferrer">
            <FaGithub style={{color:"white", margin: "0 0.5rem"}} />
            </a>
            </div>
          </footer>
          </div>
        
        </div>
      </>    
    )
  
}
export default Hobbies
