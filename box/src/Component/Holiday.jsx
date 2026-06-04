import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import "bootstrap/dist/css/bootstrap.min.css";
import Teacher from './Teacher';
import { useNavigate } from "react-router-dom";

 const Holiday = () => {
     const navigate = useNavigate();
  return (
   <>
    <Nav/>
          <div
        className="text-center text-white py-5"
        style={{
          background:
            "linear-gradient(109.6deg, rgba(102,51,153,1) 11.2%, rgba(255,159,64,1) 91.1%)",
        }}
      >
        <h1 className="fw-bold">About Us</h1>
        <p>Learn More About Our Engineering Institute</p>
      </div>

      {/* About Section */}
      <div className="container my-5">
        <div className="row align-items-center">

          {/* Left Image */}
          <div className="col-12 col-md-6 mb-4">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
              alt="about"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Right Content */}
          <div className="col-12 col-md-6">
            <h2 className="fw-bold mb-3">Who We Are</h2>
            <p>
              We are a leading engineering institute focused on providing
              high-quality education with practical knowledge and industry
              experience. Our goal is to prepare students for real-world
              challenges.
            </p>

            <h4 className="mt-4">Our Mission</h4>
            <p>
              To deliver innovative and career-oriented education that empowers
              students with technical and professional skills.
            </p>

            <h4 className="mt-4">Our Vision</h4>
            <p>
              To become a globally recognized institute for engineering
              excellence and research.
            </p>
          </div>

        </div>
      </div>

    
      <div className="container my-5">
        <div className="row text-center g-4">

          <div className="col-12 col-md-4">
            <div className="card shadow border-0 p-4 h-100">
              <h1>🎓</h1>
              <h5>Qualified Faculty</h5>
              <p>Highly experienced teachers with industry knowledge.</p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card shadow border-0 p-4 h-100">
              <h1>🏫</h1>
              <h5>Modern Campus</h5>
              <p>Advanced labs and infrastructure for practical learning.</p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card shadow border-0 p-4 h-100">
              <h1>💼</h1>
              <h5>Placement Support</h5>
              <p>Strong placement assistance with top companies.</p>
            </div>
          </div>

        </div>
      </div>

      
      <div className="text-center py-5 bg-dark text-white">
        <h2>Start Your Journey With Us 🚀</h2>
        <p>Join our engineering programs and build your future.</p>
          <button
            className="btn btn-success"
            data-bs-dismiss="modal"
            onClick={() => navigate("/teachers")}
          >
            Courses
          </button>
      </div>
    <Footer/>
   </>
  )
}
export default Holiday;