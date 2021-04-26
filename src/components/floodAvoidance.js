import React from 'react'
// import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import { Navbar } from 'react-bootstrap'

class FloodingMap extends React.Component {
  render() {
    return (
      <div className='App'>
        <iframe 
          width="100%" 
          height="600" 
          src="https://app.powerbi.com/view?r=eyJrIjoiM2QxZGUyMmUtMjM0ZS00ZmZiLWJkZDMtMWYwMjQ5NTM0MzYwIiwidCI6IjhlNjM0Z
          TY3LTlkNjYtNDZkMi1hNTI5LWUxYjcwOGM1ZDhiYyIsImMiOjEwfQ%3D%3D&pageName=ReportSection" 
          frameborder="0" 
          allowFullScreen="true">
        </iframe>
      </div>
      )
  }
}
export default FloodingMap
