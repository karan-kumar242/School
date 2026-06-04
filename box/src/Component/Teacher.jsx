import { useState } from 'react';
import Nav from './Nav'
import Footer from './Footer'
import { FaChalkboardTeacher } from "react-icons/fa";
import { Link } from "react-router-dom";
import Enroll from './Enroll';
import { useNavigate } from "react-router-dom";

 const Teacher = () => {
    const navigate = useNavigate();
    const [selectedCourse, setSelectedCourse] = useState(null);
      const courses = [
  {
    title: "Computer Science Engineering",
    desc: "Learn programming, AI, Data Structures and Software Development.",
    icon: "💻"
  },
  {
    title: "Mechanical Engineering",
    desc: "Study machines, thermodynamics and manufacturing systems.",
    icon: "⚙️"
  },
  {
    title: "Civil Engineering",
    desc: "Design buildings, bridges and infrastructure projects.",
    icon: "🏗️"
  },
  {
    title: "Electrical Engineering",
    desc: "Learn circuits, power systems and electronics.",
    icon: "🔌"
  },
  {
    title: "Electronics Engineering",
    desc: "Work with embedded systems and communication.",
    icon: "📡"
  },
  {
    title: "Artificial Intelligence",
    desc: "Learn Machine Learning, Deep Learning & Data Science.",
    icon: "🤖"
  },

  
  {
    title: "Information Technology",
    desc: "Learn networking, databases and web technologies.",
    icon: "🌐"
  },
  {
    title: "Data Science",
    desc: "Analyze data, build models and extract insights.",
    icon: "📊"
  },
  {
    title: "Cyber Security",
    desc: "Protect systems, networks and data from cyber threats.",
    icon: "🔐"
  }
];
  return (
    <>
    <Nav/>
        
        <div
  className="modal fade"
  id="courseModal"
  tabIndex="-1"
  aria-hidden="true"
>
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">

      <div className="modal-header bg-primary text-white">
        <h5 className="modal-title">
          {selectedCourse?.title}
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
        ></button>
      </div>

      <div className="modal-body text-center">
        <h1>{selectedCourse?.icon}</h1>
        <p>{selectedCourse?.desc}</p>

        <p>
          This course provides in-depth knowledge with practical
          projects and industry-level skills.
        </p>
      </div>

      <div className="modal-footer">
          <button
              className="btn btn-success"
              data-bs-dismiss="modal"
              onClick={() => navigate("/enroll")}
            >
              Enroll Now
            </button>
        <button
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
      </div>

    </div>
  </div>
</div>


         <div
        className="text-center text-white py-5"
        style={{
          background:
            "radial-gradient(circle farthest-corner at 8.3% 21.6%, rgba(252,92,125,1) 13.1%, rgba(106,130,251,1) 90%)",
        }}
      >
        <h1 className="fw-bold">Engineering Courses</h1>
        <p>Explore Our Highly Qualified & Industry-Oriented Programs</p>
      </div>

      
      <div className="container my-5">
        <div className="row g-4">

          {courses.map((course, index) => (
            <div className="col-12 col-sm-6 col-lg-4" key={index}>
              <div
                className="card h-100 text-center shadow-lg border-0"
                style={{
                  borderRadius: "15px",
                  transition: "0.3s",
                }}
              >
                <div className="card-body">
                  <h1>{course.icon}</h1>
                  <h5 className="card-title fw-bold mt-3">
                    {course.title}
                  </h5>
                  <p className="card-text">{course.desc}</p>

                  <button
                    className="btn btn-primary px-4"
                      data-bs-toggle="modal"
                      data-bs-target="#courseModal"
                      onClick={() => setSelectedCourse(course)}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>


    <Footer/>
    </>
  )
}
//note {teachers.map(function(item){
//return(
//<img src="item.img"/>
//<h2>item.name</h2>
//)
//})

export default Teacher;