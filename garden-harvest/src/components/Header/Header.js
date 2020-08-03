import React from 'react'
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, Image } from 'react-bootstrap'


function Header() {

  const thisMonth = () =>{
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let d = new Date();
    let monthName=months[d.getMonth()];
    return monthName
  }

  return (
    <div>
      <Navbar expand="lg" style={{ backgroundColor:'rgb(36 112 25)', color:'white' }} >
        {/* NAVBAR BRAND if we want to change to a logo, couldnt find a nice generic one */}
        <Navbar.Brand href="#homepage" style={{ color:'white' }} >Crop Calendar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          { /*  Link to Calendar with general dates/deadlines to plant XYZ vegetables */ }
            <Nav.Link href="#calendar" style={{ color:'white' }} >Calendar</Nav.Link>
            { /* Link to suggested plants that should be planted in a given season */ }
            <Nav.Link href="#seasonal" style={{ color:'white' }} >{thisMonth()} Seasonals</Nav.Link>
            <Nav.Link href="#plants" style={{ color:'white' }} ></Nav.Link>
            <NavDropdown title={<span className="my-auto" style={{ color:'white' }}>More</span>} id="nav-dropdown">
              <NavDropdown.Item href="#action/3.1">All Plants</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Search by Zipcode</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Glossary</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">FAQ</NavDropdown.Item>    {/* LINK TO FAQ PAGE */}
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="warning">Search</Button>
          </Form>
          {/* Button to view profile */}
          <Button className='rounded-circle' variant="secondary" style={{ marginLeft:10}} ><Image src="https://cdn1.iconfinder.com/data/icons/elasto-gardening-tools-and-machinery/26/14-GARDEN-TOOLS-READY_garden-tools-512.png" height={26} width={20}  alt='profile'></Image></Button>
        </Navbar.Collapse>
      </Navbar>
      
    </div>
  )
}

export default Header