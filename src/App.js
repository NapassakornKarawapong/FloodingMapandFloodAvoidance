import './App.css'
import './components/floodingMap'
import {Navbar, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      {/* <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Project II</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home"><h4>Home</h4></Nav.Link>
          <Nav.Link href="/floodingMap"><h4>Flooding Map</h4></Nav.Link>
          <Nav.Link href="/floodAvoidance"><h4>Flood Avoidance</h4></Nav.Link>
        </Nav>
      </Navbar> */}
          <iframe 
          width="100%" 
          height="600" 
          src="https://app.powerbi.com/view?r=eyJrIjoiZGQ3ZmU5ZTctNzgyOS00NjQ2LTgwOTktMDIwM2YyZjZkOTU1IiwidCI6IjhlNjM0Z
          TY3LTlkNjYtNDZkMi1hNTI5LWUxYjcwOGM1ZDhiYyIsImMiOjEwfQ%3D%3D&pageName=ReportSection2b6cb3ba55a41534e5c7" 
          frameborder="0" 
          allowFullScreen="true">
          </iframe>
    </div>
  )
}

export default App
