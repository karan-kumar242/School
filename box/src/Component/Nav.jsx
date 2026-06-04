import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {

  const [open, setOpen] = useState(false);

  return (
    <>
      
      <div className="bg-warning text-white py-2"
        style={{ position: "sticky", top: 0, zIndex: "1000" }}>
        <div className="container">
          <div className="row align-items-center text-center text-md-start">
            <div className="col-12 col-md-6">
              <h6 className="m-0">123456 Darbhange@School.com</h6>
            </div>
            <div className="col-12 col-md-6 text-md-end">
              <h6 className="m-0">Bihar, Darbhanga</h6>
            </div>
          </div>
        </div>
      </div>

      
      <nav className="navbar navbar-expand-lg navbar-light bg-white"
        style={{
          position: "sticky",
          top: "40px",
          zIndex: 1000,
          boxShadow: "0 8px 8px rgba(0,0,0,0.2)"
        }}>

        <div className="container-fluid px-4">

          
          <Link to="/" className="navbar-brand d-flex align-items-center gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/a/ae/Darbhanga_College_of_Engineering_logo.png"
              width="60"
              alt="logo"
            />
            <h5 className="m-0">Darbhanga School <br />of Engineering</h5>
          </Link>

          {/* Toggle Button */}
          <button
            className="navbar-toggler"
            onClick={() => setOpen(!open)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className={`collapse navbar-collapse justify-content-end ${open ? "show" : ""}`}>
            <ul className="navbar-nav mb-2 mb-lg-0">

              <li className="nav-item" style={{ padding: "10px 20px" }}>
                <Link className="nav-link" to="/">Home</Link>
              </li>

              <li className="nav-item" style={{ padding: "10px 20px" }}>
                <Link className="nav-link" to="/teachers">Courses</Link>
              </li>

              <li className="nav-item" style={{ padding: "10px 20px" }}>
                <Link className="nav-link" to="/contacts">Contact</Link>
              </li>

              <li className="nav-item" style={{ padding: "10px 20px" }}>
                <Link className="nav-link" to="/section">Gallery</Link>
              </li>

              <li className="nav-item" style={{ padding: "10px 20px" }}>
                <Link className="nav-link" to="/holidays">About</Link>
              </li>

              <li className="nav-item" style={{ padding: "10px 20px" }}>
                <Link
                  to="/apply"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    background: "darkblue",
                    padding: "10px 30px",
                    borderRadius: "5px"
                  }}
                >
                  Apply Now
                </Link>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </>
  )
}

export default Nav;