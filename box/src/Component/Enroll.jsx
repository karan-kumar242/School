import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Enroll = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    course: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Enrollment Successful ✅");
    console.log(formData);
  };

  return (
    <>
      <Nav />

      {/* Header */}
      <div
        className="text-center text-white py-5"
        style={{
          background:
            "linear-gradient(179.5deg, rgba(255,230,69,1) 3.3%, rgba(255,157,73,1) 96%)",
        }}
      >
        <h1 className="fw-bold">Enroll Now</h1>
        <p>Join Our Engineering Courses Today 🚀</p>
      </div>

      {/* Form Section */}
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">

            <div className="card shadow-lg border-0 p-4" style={{borderRadius:"15px"}}>
              <h3 className="text-center mb-4">Student Registration</h3>

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Mobile</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="mobile"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Select Course</label>
                  <select
                    className="form-select"
                    name="course"
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choose Course</option>
                    <option>Computer Science Engineering</option>
                    <option>Mechanical Engineering</option>
                    <option>Artificial Intelligence</option>
                    <option>Data Science</option>
                    <option>Cyber Security</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    onChange={handleChange}
                    required
                  />
                </div>

                <button className="btn btn-success w-100">
                  Submit Enrollment
                </button>

              </form>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Enroll;
