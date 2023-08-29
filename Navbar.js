import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.company_name}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">{props.option1}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">{props.option2}</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    </div>
  )
}

Navbar.propTypes={
  company_name: PropTypes.string,
  option1: PropTypes.string,
  option2: PropTypes.string,
  option3: PropTypes.string
}

// Navbar.defaultProps={
//   company_name: 'Set Name Here',
//   option1: 'set option1',
//   option2: 'set option2',
//   option3: 'set option3'
// }