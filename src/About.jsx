import {React, useState } from 'react'
import { FcBusinessman } from "react-icons/fc";
import { MdDateRange } from "react-icons/md";
import { ImAddressBook } from "react-icons/im";
import { FaFacebook,FaGithub,FaArrowRight,FaUser,FaPhone  } from "react-icons/fa";
import { LuUsers2 } from "react-icons/lu";
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
            position:"relative",
            backgroundColor:"#F5F5DC"
          }}>
          <div>
          <Navbar data-bs-theme="dark" fixed="top" collapseOnSelect expand="lg" style={{backgroundColor:"#001F3F"}}>
          <Container>
          <div style={{display:"flex"}}>
          <span className="navbar-toggler-icon" 
          style={{cursor:"pointer"}}
          onClick={handleShow}></span>
          </div>
          <FcBusinessman style={{
            height:"30px", 
            width:"30px"}} />
            <Navbar.Brand as={Link} to="/" style={{display:"flex", 
              alignItems:"center",
              fontWeight:"bold",
              fontFamily:"Georgia,seriff" 
            }}>My Personal Website</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" variant="pills">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link eventKey="disabled" style={{color:"gray"}}>About</Nav.Link>
              <Nav.Link as={Link} to="/education" className="nav-link-hover">Education</Nav.Link>
              <Nav.Link as={Link} to="/hobbies" className="nav-link-hover">Hobbies</Nav.Link>
              <Nav.Link as={Link} to="/photos" className="nav-link-hover">Photos</Nav.Link>
            </Nav>
            <Nav className="ms-auto d-flex align-items-center">
            <Navbar.Text>Visit my Social Media Channels</Navbar.Text>
            <div>
            <a href="https://www.facebook.com/aurellanojoshuaanthony/"
              target="_blank"
              rel="noopener noreferrer">
            <FaFacebook style={{color:"white", margin: "0 0.5rem", fontSize:"30px"}} />
            </a>
            <a href="https://x.com/joshaurellano"
              target="_blank"
              rel="noopener noreferrer">
            <FaSquareXTwitter style={{color:"white", margin: "0 0.5rem", fontSize:"30px"}} />
            </a>
            <a href="https://github.com/joshaurellano"
              target="_blank"
              rel="noopener noreferrer">
            <FaGithub style={{color:"white", margin: "0 0.5rem", fontSize:"30px"}} />
            </a>
            </div>
            </Nav>
            </Navbar.Collapse>
        
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
            <h1 style={{ fontSize: "2rem"}}
            >Overview</h1>
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
          <div style={{ display: "flex", justifyContent: "flex-end"}}>
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
          <div>
          <Container>
          <Row className="align-items-start">
          <Col lg={6} md={12} style={{ paddingTop: "40px" }}>
          <div style={{paddingTop:"40px"}}>
            <h1 style={{fontSize:"2rem",
            }}><FaUser /> Name</h1>
            <p style={{fontSize:"1rem"}}>Joshua Anthony Sales - Aurellano <br /></p>
            <hr />
          </div>
          <div style={{paddingTop:"40px"}}>
            <h1 style={{fontSize:"2rem",
            }}><MdDateRange /> Birthday</h1>
            <p style={{fontSize:"1rem"}}>June 1, 1999 (25 years old)</p>
            <hr />
          </div>
          <div style={{paddingTop:"40px"}}>
            <h1 style={{fontSize:"2rem",
            }}><ImAddressBook /> Address</h1>
            <p style={{fontSize:"1rem"}}>077 Zone 1 Marupit Camaligan Camarines Sur</p>
            <hr />
          </div>
          </Col>
          <Col lg={6} md={12} style={{ paddingTop: "40px" }}>
          <div style={{paddingTop:"40px"}}>
            <h1 style={{fontSize:"2rem",
            }}><FaPhone /> Contact Number</h1>
            <p style={{fontSize:"1rem"}}>09707907244-TnT <br />
            09656201624 - TM
            </p>
            <hr />
          </div>
          <div style={{paddingTop:"40px"}}>
            <h1 style={{fontSize:"2rem",
            }}><LuUsers2 /> Parents</h1>
            <p style={{fontSize:"1rem"}}>Father : Henry B. Aurellano <br />
            Mother : Mary Jane S. Aurellano
            </p>
            <hr />
          </div>
          </Col>
          </Row>
          </Container>
          </div>
        </div>
       
        {/* <div style={{ display: "flex", justifyContent: "flex-end", padding: "1rem" }}>
        <Pagination>
        <Pagination.Next as={Link} to="/education"> Education <FaArrowRight />
        </Pagination.Next>
          </Pagination>
        </div>
       */}
        
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
