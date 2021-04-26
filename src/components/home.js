import React from 'react'
// import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'
class Home extends React.Component {
  render() {
    return (
        <div className = 'App'>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home"><h2>Project II</h2></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home"><h4>Home</h4></Nav.Link>
                    <Nav.Link href="/flooding"><h4>Flooding Map</h4></Nav.Link>
                    <Nav.Link href="/avoidance"><h4>Flood Avoidance</h4></Nav.Link>
                </Nav>
            </Navbar>
        </div>
        
    )
  }
}
export default Home