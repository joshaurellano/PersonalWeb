import {React, useState } from 'react'
import { FcBusinessman } from "react-icons/fc";
import { FaFacebook,FaGithub,FaArrowRight  } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import './App.css';
import {Link} from 'react-router-dom';
import { Container, Nav, Navbar, Offcanvas, Row, Col, Card, Button, Modal, Pagination,Image } from 'react-bootstrap';
import Img1 from './Pics/Img1.jpg';


function About() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [mshow, msetShow] = useState(false);

  const mhandleClose = () => msetShow(false);
  const mhandleShow = () => msetShow(true);
    return (
      <>
          <div style={{
            minHeight:"100vh",
            width: "100vw",
            display:"flex",
            flexDirection:"column",
            paddingTop: "60px",
            position:"relative"
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
              <Nav.Link eventKey="disabled" style={{color:"gray"}}>About</Nav.Link>
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
            <Nav.Link as={Link} to="/home" className="navlink-hover" style={{color:"#001F3F"}} >Home</Nav.Link>
            <Nav.Link eventKey="disabled" style={{color:"gray"}}>About</Nav.Link>
            <Nav.Link as={Link} to="/education" className="navlink-hover" style={{color:"#001F3F"}}>Education</Nav.Link>
            <Nav.Link as={Link} to="/hobbies" className="navlink-hover" style={{color:"#001F3F"}}>Hobbies</Nav.Link>
            <Nav.Link as={Link} to="/photos" className="navlink-hover" style={{color:"#001F3F"}}>Photos</Nav.Link>
          </Nav>
        </Offcanvas.Body>
        </Offcanvas>
            </Container>
          </Navbar>          
        </div>

        <div style={{
          flex:"1", 
          marginLeft:"3rem",
          fontFamily:"Georgia,seriff"}}>

          <Card style={{backgroundColor:"#EAD8B1", marginRight:"3rem"}}>
          <Card.Body style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
    
          <div>
            <h1 style={{fontSize:"2rem",
            }}>Overview</h1>
            <p>This page contains some information about myself. Feel free to check this out!</p><br />
            <Button variant="primary" onClick={mhandleShow}>
        Just some info bout my self
      </Button>

      <Modal show={mshow} onHide={mhandleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Me,Myself and I</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{fontFamily:"Georgia,seriff"}}>Just a random guy who really loves to code. Hopefully lands on a job i would love!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={mhandleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", padding: "1rem" }}>
          <Container>
              <Row>
              <Col xs={6} md={4}>
              <Image src={Img1} roundedCircle style={{ width: '171px', height: '180px' }} />
        </Col>
              </Row>
            </Container>
          </div>
          </Card.Body>
          </Card>
          <Container>
          <Row className="align-items-start">
          <Col lg={6} md={12} style={{ paddingTop: "40px" }}>
          <div style={{paddingTop:"40px"}}>
            <h1 style={{fontSize:"2rem",
            }}>Name</h1>
            <p style={{fontSize:"1rem"}}>Joshua Anthony Sales - Aurellano <br /></p>
            <hr />
          </div>
          <div style={{paddingTop:"40px"}}>
            <h1 style={{fontSize:"2rem",
            }}>Birthday</h1>
            <p style={{fontSize:"1rem"}}>June 1, 1999 (25 years old)</p>
            <hr />
          </div>
          <div style={{paddingTop:"40px"}}>
            <h1 style={{fontSize:"2rem",
            }}>Address</h1>
            <p style={{fontSize:"1rem"}}>077 Zone 1 Marupit Camaligan Camarines Sur</p>
            <hr />
          </div>
          </Col>
          <Col lg={6} md={12} style={{ paddingTop: "40px" }}>
          <div style={{paddingTop:"40px"}}>
            <h1 style={{fontSize:"2rem",
            }}>Contact Number</h1>
            <p style={{fontSize:"1rem"}}>09707907244-TnT <br />
            09656201624 - TM
            </p>
            <hr />
          </div>
          <div style={{paddingTop:"40px"}}>
            <h1 style={{fontSize:"2rem",
            }}>Parents</h1>
            <p style={{fontSize:"1rem"}}>Father : Henry B. Aurellano <br />
            Mother : Mary Jane S. Aurellano
            </p>
            <hr />
          </div>
          </Col>
          </Row>
          </Container>
        </div>
        
        <div style={{ display: "flex", justifyContent: "flex-end", padding: "1rem" }}>
        <Pagination>
        <Pagination.Next as={Link} to="/education"> Education <FaArrowRight />
        </Pagination.Next>
          </Pagination>
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
export default About