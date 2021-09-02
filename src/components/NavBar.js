import React from 'react'

import PropTypes from 'prop-types'
 import { Link } from 'react-router-dom'
export default function NavBar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          {/* <a className="navbar-brand" href="#">{props.title}</a> */}

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <a className="nav-link dropdown-toggle" cref="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">File</a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" cref="#">New Project</a></li>
                  <li><a className="dropdown-item" cref="#">Open Project</a></li>
                  <li><a className="dropdown-item" cref="#">Save Project Spy</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" cref="#">Recent Project Spy</a></li>
                  <li><a className="dropdown-item" cref="#">Recent Test Case Spy</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" cref="#">Restart</a></li>
                  <li><a className="dropdown-item" cref="#">Quit</a></li>

                </ul>
              </li>
              <li className="nav-item">
              <a className="nav-link dropdown-toggle" cref="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Automation</a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" cref="#">Object Heal</a></li>
                  <li><a className="dropdown-item" cref="#">Object Spy</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" cref="#">Image Spy</a></li>
                  <li><a className="dropdown-item" cref="#">Mobile Spy</a></li>
                  <li><a className="dropdown-item" cref="#">Inject Script</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" cref="#">Create CM Project</a></li>

                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" cref="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  TestData
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" cref="#">Import Test Data</a></li>
                  <li><a className="dropdown-item" cref="#">Multiple Environment</a></li>
                </ul>
              </li>
             
            </ul>
            <li className="nav-item">
              <a className="nav-link dropdown-toggle" cref="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Configuration</a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" cref="#">Run Settings</a></li>
                  <li><a className="dropdown-item" cref="#">Browser Configuration </a></li>
                  <li><a className="dropdown-item" cref="#">Test Management Configuration </a></li>
                  <li><hr className="dropdown-divider"/></li>
                  {/* <li><a className="dropdown-item" cref="#">Schedule Run</a></li> */}
                  <li><Link className="dropdown-item" to="/about">start Server </Link></li>
                 

                </ul>
              </li>
              <li className="nav-item">
              <a className="nav-link dropdown-toggle" cref="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Tools</a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" cref="#">Exproratory</a></li>
                  <li><a className="dropdown-item" cref="#">BDD </a></li>
                  <li><a className="dropdown-item" cref="#">Har Compare </a></li>

           
                 

                </ul>
              </li>
              <li className="nav-item">
              <a className="nav-link dropdown-toggle" cref="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Window</a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" cref="#">Test Design </a></li>
                  <li><a className="dropdown-item" cref="#">Test Execution  </a></li>
                  <li><a className="dropdown-item" cref="#">View Report</a></li>

           
                 

                </ul>
              </li>
              <li className="nav-item">
              <a className="nav-link dropdown-toggle" cref="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Help</a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" cref="#">Show Logs </a></li>
                  <li><a className="dropdown-item" cref="#">Raise Issue </a></li>
                  <li><a className="dropdown-item" cref="#">Contact US </a></li>

           
                 

                </ul>

              </li>
<div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode}   type="checkbox"  id="flexSwitchCheckDefault"/>
  <label style={{color:props.mode==='dark'?'blue':'black'}} className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.text}</label>
</div>
            

          </div>
        </div>
      </nav>
    )
}
NavBar.propTypes={
    
    title:PropTypes.string}
