import {React, useState } from 'react'
import { FcBusinessman } from "react-icons/fc";
import { FaFacebook,FaGithub  } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import './App.css';
import {Link} from 'react-router-dom';
import { Container, Nav, Navbar, Offcanvas, Row, Col, Card, Button, Toast} from 'react-bootstrap';
import ima1 from './apppics/aboutme.jpg';
import ima2 from './apppics/education.jpg';
import ima3 from './apppics/hobbies.jpg';
import ima4 from './apppics/photos.jpg';
import ima5 from './apppics/projects.jpg';
import BackgroundImage from "./assets/bundo-kim-WYb4rb3lnQg-unsplash.jpg";



function Missing() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);


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
              <Nav.Link eventKey="disabled" style={{color:"gray"}}>Home</Nav.Link>
              <Nav.Link as={Link} to="/about" className="nav-link-hover">About</Nav.Link>
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
 
          </Container>
        </Navbar>
        <br />
          <div className="mt-5" style={{paddingTop:"60px"}}>
            <div style={{fontFamily:"Georgia, seriff", 
              display: "flex",
              justifyContent: "center",
              alignItems: "center"}}>
                
            <h1 style={{ color: "white", fontWeight: "bold", fontSize: "clamp(3rem, 5vw, 5rem)"}}>
          Error 404 </h1>
            </div>
          <br />
          <div style={{fontFamily:"Georgia,seriff", color:"white", display: "flex", fontSize:"clamp(1rem, 2.5vw, 2rem)",justifyContent: "center",alignItems: "center"}}>
          <p className='subheading'>Sorry the page is missing or under maintenance <br />
          come back later
          </p>
          </div>
          </div>
          </div>
        <div>
            <h1>Error 404</h1>
        </div>


          <div>
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
export default Missing
