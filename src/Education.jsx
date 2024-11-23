import {React, useState } from 'react'
import { FcBusinessman } from "react-icons/fc";
import { FaFacebook,FaGithub,FaArrowRight  } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import './App.css';
import {Link} from 'react-router-dom';
import { Container, Nav, Navbar, Offcanvas, Row, Col, Card, Button, Modal, Pagination,Image } from 'react-bootstrap';
import college from './Pics/college.jpg';
import elem from './Pics/elem.jpg';
import highschool from './Pics/highschool.jpg';



function Education() {
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
              <Nav.Link as={Link} to="/About">About</Nav.Link>
              <Nav.Link eventKey="disabled" style={{color:"gray"}}>Education</Nav.Link>
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
            <Nav.Link as={Link} to="/about" className="navlink-hover" style={{color:"#001F3F"}}>About</Nav.Link>
            <Nav.Link eventKey="disabled" style={{color:"gray"}}>Education</Nav.Link>
            <Nav.Link as={Link} to="/hobbies" className="navlink-hover" style={{color:"#001F3F"}}>Hobbies</Nav.Link>
            <Nav.Link as={Link} to="/projects" className="navlink-hover" style={{color:"#001F3F"}}>Projects</Nav.Link>
            <Nav.Link as={Link} to="/photos" className="navlink-hover" style={{color:"#001F3F"}}>Photos</Nav.Link>
          </Nav>
        </Offcanvas.Body>
        </Offcanvas>
            </Container>
          </Navbar>          
        </div>

        <div style={{flex:"1", fontFamily:"Georgia,seriff"}}>
          <Container fluid>
            <Row>
              <Col lg={6} style={{ padding: 0 }}>
              <div style={{
                    backgroundImage: `url(${college})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100%',
                    minHeight: '300px',
                    color: 'white',
                    padding: '1rem',
                    textShadow:"2px 2px 4px rgba(0, 0, 0, 0.7)"}}>
              <h1 style={{fontSize:"2rem",
              }}>College</h1>
              <p style={{fontSize:"1rem"}}>
                *Naga College Foundation <br/>
                Bachelor of Science in Information Sytem <br />
                2019 - Present <br />
                <br />
                *Bicol State College of Applied Sciences and Technology <br />
                Entertainment and Multimedia Computing <br />
                2017-2018 <br />
                Bachelor of Science in Electronics and Communication Engineering <br />
                2015 -2017
              </p>
              <hr />
            </div>
              </Col>
              <Col lg={6} style={{ padding: 0 }}>
              <Row style={{ padding: 0 }}>
              <div style={{
                      backgroundImage: `url(${highschool})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      height: '100%',
                      minHeight: '300px',
                      color: 'white',
                      padding: '1rem',
                      textShadow:"2px 2px 4px rgba(0, 0, 0, 0.7)"}}>
              <h1 style={{fontSize:"2rem",
              }}>High School</h1>
              <p style={{fontSize:"1rem"}}>Camaligan National High School <br />
              2011 - 2015
              </p>
              <hr />
              </div>
              </Row>
              <Row style={{ padding: 0 }}>
              <div style={{
                      backgroundImage: `url(${elem})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      height: '100%',
                      minHeight: '300px',
                      color: 'white',
                      padding: '1rem',
                      textShadow:"2px 2px 4px rgba(0, 0, 0, 0.7)"
                    }}>
            <h1 style={{fontSize:"2rem",
            }}>Elementary</h1>
            <p style={{fontSize:"1rem"}}>Marupit Elementary School <br />
            2005-2011 <br />
            </p>
            <hr />
          </div>
              </Row>
              </Col>
            </Row>
          </Container>

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
export default Education
