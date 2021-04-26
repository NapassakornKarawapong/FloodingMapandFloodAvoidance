import React from 'react'
// import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import { Navbar } from 'react-bootstrap'

class FloodingMap extends React.Component {
  render() {
    return (
      <div className='App'>
      <iframe 
        width="1024" height="1060" 
        src="https://app.powerbi.com/view?r=eyJrIjoiZGQ3ZmU5ZTctNzgyOS00NjQ2L
        TgwOTktMDIwM2YyZjZkOTU1IiwidCI6IjhlNjM0ZTY3LTlkNjYtNDZkMi1hNTI5LWUxYjcwOGM1Z
        DhiYyIsImMiOjEwfQ%3D%3D&pageName=ReportSection" 
        frameborder="0" allowFullScreen="true">
      </iframe>
      </div>
    )
  }
}
export default FloodingMap
