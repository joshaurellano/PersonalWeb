import {React, useState } from 'react'
import { FcBusinessman } from "react-icons/fc";
import { FaFacebook,FaGithub,FaArrowRight  } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import './App.css';
import {Link} from 'react-router-dom';
import { Container, Nav, Navbar, Offcanvas, Row, Col, Card, Button, Modal, Pagination,Image } from 'react-bootstrap';

import Carousel from 'react-bootstrap/Carousel';
import Img1 from './Pics/Img1.jpg';
import Img2 from './Pics/Img2.jpg';
import Img3 from './Pics/Img3.jpg';



function Photos() {
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
            backgroundColor:"#F5F5DC"}}>
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
              <Nav.Link as={Link} to="/About">About</Nav.Link>
              <Nav.Link as={Link} to="/education" className="nav-link-hover">Education</Nav.Link>
              <Nav.Link as={Link} to="/hobbies" className="nav-link-hover">Hobbies</Nav.Link>
              <Nav.Link eventKey="disabled" style={{color:"gray"}}>Photos</Nav.Link>
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
            <Nav.Link as={Link} to="/about" className="navlink-hover" style={{color:"#001F3F"}}>About</Nav.Link>
            <Nav.Link as={Link} to="/education" className="navlink-hover" style={{color:"#001F3F"}}>Education</Nav.Link>
            <Nav.Link as={Link} to="/hobbies" className="navlink-hover" style={{color:"#001F3F"}}>Hobbies</Nav.Link>
            <Nav.Link eventKey="disabled" style={{color:"gray"}}>Photos</Nav.Link>
          </Nav>
        </Offcanvas.Body>
        </Offcanvas>
            </Container>
          </Navbar>          
        </div>

        <div style={{flex:"1", fontFamily:"Georgia,seriff"}}>
          <div>
          <Card style={{backgroundColor:"#EAD8B1"}}>
            <Card.Body >
            <h1>Photos Section</h1><br />
            <p>Here is some of my photos and a little bit of story behind it</p>
            </Card.Body>
            </Card>
          </div>
          
          
          <Card style ={{backgroundColor:"#EAD8B1",
            height:"400px",
            width:"400px",
            margin: "auto",
            overflow: "hidden"
          }}>
            <Card.Body style={{ padding: 0 }}>
            <Carousel style={{ height: "100%", width: "100%" }}>
      <Carousel.Item interval={1000}>
        <img
            className="carousel-image"
            style={{ width: '400px', height: '400px' , objectFit: "cover", objectPosition:"center",position:"relative"}}
            src={Img1}
            alt="First slide"
            />
        <Carousel.Caption style={{fontFamily:"Georgia"}}>
          <h3>First business attire after getting back to school</h3>
          <p>@ Aurellano Residence</p>
        </Carousel.Caption>
      </Carousel.Item>
    
      <Carousel.Item interval={500}>
        <img
            className="carousel-image"
            style={{width: '400px', height: '400px', objectFit: "cover", objectPosition:"center",position:"relative"}}
            src={Img2}
            alt="Second slide"
            />
        <Carousel.Caption style={{fontFamily:"Georgia"}}>
          <h3>Unexpected Jamming</h3>
          <p>@ Pasacao</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
            className="carousel-image"
            src={Img3}
            style={{width: '400px', height: '400px', objectFit: "cover", objectPosition:"center",position:"relative"}}
            alt="Third slide"
            />
        <Carousel.Caption style={{fontFamily:"Georgia"}}>
          <h3>Family get together</h3>
          <p>@ Celine Choi Kitchen</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </Card.Body>

          </Card>

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
  );
}
export default Photos
