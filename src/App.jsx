import {React, useState } from 'react'
import { FcBusinessman } from "react-icons/fc";
import { FaFacebook,FaGithub  } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import './App.css';
import {Link} from 'react-router-dom';
import { Container, Nav, Navbar, Offcanvas, Row, Col, Card, Button} from 'react-bootstrap';
import ima1 from './apppics/aboutme.jpg';
import ima2 from './apppics/education.jpg';
import ima3 from './apppics/hobbies.jpg';
import ima4 from './apppics/photos.jpg';
import ima5 from './apppics/projects.jpg';
import BackgroundImage from "./assets/bundo-kim-WYb4rb3lnQg-unsplash.jpg";



function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
      <>
          <div style={{
            minHeight:"100vh"
          }}>
          <div style={{
            backgroundImage: `url(${BackgroundImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "510px", 
            width: "100vw",
            paddingTop: "60px",
            position:"relative"
          }}>
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
              <Nav.Link eventKey="disabled" style={{color:"gray"}}>Home</Nav.Link>
              <Nav.Link as={Link} to="/about" className="nav-link-hover">About</Nav.Link>
              <Nav.Link as={Link} to="/education" className="nav-link-hover">Education</Nav.Link>
              <Nav.Link as={Link} to="/hobbies" className="nav-link-hover">Hobbies</Nav.Link>
              <Nav.Link as={Link} to="/photos" className="nav-link-hover">Photos</Nav.Link>
            </Nav>
        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header style={{backgroundColor:"#001F3F" ,color:"white"}} closeButton>
          <Offcanvas.Title>Main Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='text-dark' style={{backgroundColor:"#F5F5DC"}}>
          <Nav className="flex-column" style={{marginLeft:"15px", fontSize:"1.5rem",color:"black"}}>
            <Nav.Link eventKey="disabled" style={{color:"gray"}}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="navlink-hover" style={{color:"#001F3F"}}>About</Nav.Link>
            <Nav.Link as={Link} to="/education" className="navlink-hover" style={{color:"#001F3F"}}>Education</Nav.Link>
            <Nav.Link as={Link} to="/hobbies" className="navlink-hover" style={{color:"#001F3F"}}>Hobbies</Nav.Link>
            <Nav.Link as={Link} to="/photos" className="navlink-hover" style={{color:"#001F3F"}}>Photos</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
          </Container>
        </Navbar>
        <br />
          <div className="mt-5" style={{paddingTop:"60px"}}>
            <div style={{fontFamily:"Georgia, seriff", 
              display: "flex",
              justifyContent: "center",
              alignItems: "center"}}>
            <h1 className="fade-in heading" style={{ color: "white", fontWeight: "bold", fontSize:"5rem"}}>
          My Personal Website </h1>
            </div>
          <br />
          <div style={{fontFamily:"Georgia,seriff", color:"white", display: "flex", fontSize:"2rem",justifyContent: "center",alignItems: "center"}}>
          <p className='subheading'>A website dedicated for my personal information</p>
          </div>
          </div>
          </div>
          <div>
            <Container fluid style={{
                width: "100vw",
                minHeight: "100vh", 
                backgroundColor: "#EAD8B1",
                display: "flex",
                flexDirection:"column",
                justifyContent: "center",
                alignItems: "center",
                padding: "2rem 0" 
            }}>
              <Row className="mb-4 g-4" xs={1} sm={2} lg={3}>
                <Col lg={4} md={6} sm={12}>
                <Card style={{
                  width: '18rem',
                  height: '15rem',
                  backgroundImage: `url(${ima1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  color:"white", 
                  textShadow:"2px 2px 4px rgba(0, 0, 0, 0.7)"}}>
                <Card.Body>
                  <Card.Title>About Me</Card.Title>
                  <Card.Text>
                    Wanna learn about me? Click here
                  </Card.Text>
                  <Button as={Link} to="/about" variant="primary">About Me</Button>
                </Card.Body>
              </Card>
                </Col>
                <Col lg={4} md={6} sm={12}>
                <Card style={{ width: '18rem' ,
                  height: '15rem',
                  backgroundImage: `url(${ima2})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  color:"white",
                  textShadow:"2px 2px 4px rgba(0, 0, 0, 0.7)"}}>
                <Card.Body>
                  <Card.Title>Education</Card.Title>
                  <Card.Text>
                    Get to know where schools i've been to. From elementary to college
                  </Card.Text>
                  <Button as={Link} to="/education" variant="primary">Education</Button>
                </Card.Body>
              </Card>
                </Col>
                <Col lg={4} md={6} sm={12}>
                <Card style={{ width: '18rem' , 
                  height: '15rem',
                  backgroundImage: `url(${ima3})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  color:"white",
                  textShadow:"2px 2px 4px rgba(0, 0, 0, 0.7)"}}>
                <Card.Body>
                  <Card.Title>Hobbies</Card.Title>
                  <Card.Text>
                    Check out my hobbies. Maybe were alike!
                  </Card.Text>
                  <Button as={Link} to="/hobbies" variant="primary">Hobbies</Button>
                </Card.Body>
              </Card>
                </Col>
              </Row>
              <Row className='justify-content-center' xs={1} sm={2} lg={3}>
              <Col lg={6} md={6} sm={12} className='p-3'>
              <Card style={{ width: '18rem' , 
                  height: '15rem',
                  backgroundImage: `url(${ima5})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  color:"white",
                  textShadow:"2px 2px 4px rgba(0, 0, 0, 0.7)"}}> 
                <Card.Body>
                  <Card.Title>Projects</Card.Title>
                  <Card.Text>
                    My beloved Projects. Under development and finished
                  </Card.Text>
                  <Button as={Link} to="/projects" variant="primary">Projects</Button>
                </Card.Body>
              </Card>
                </Col>
                <Col lg={6} md={6} sm={12} className='p-3'>
                <Card style={{ width: '18rem' , 
                  height: '15rem',
                  backgroundImage: `url(${ima4})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  color:"white",
                  textShadow:"2px 2px 4px rgba(0, 0, 0, 0.7)"}}>
                <Card.Body>
                  <Card.Title>Photos</Card.Title>
                  <Card.Text>
                    My trip back to memory lane. Click here to see
                  </Card.Text>
                  <Button as={Link} to="/photos" variant="primary">Photos</Button>
                </Card.Body>
              </Card>
                </Col>
              </Row>
            </Container>
          <footer style={{
          backgroundColor:"#001F3F",
          width:"100vw",
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
export default App
