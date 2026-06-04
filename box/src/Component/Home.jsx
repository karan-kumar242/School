import React, { useState } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { FaTimes } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaLaptopCode, FaCogs, FaBuilding, FaBolt, FaMicrochip, FaRobot } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
 const Home = () => {
  const navigate = useNavigate();
  const [show,setShow]=useState(false);
  const [met,setMet]=useState(false);
  const [showImage,setShowImage]=useState(true);
  const [mot,setMot]=useState(true);
  const programs = [
  {
    img: "https://cdn-icons-png.flaticon.com/512/2721/2721295.png",
    title: "Computer Science Engineering",
    desc: "Learn programming, AI, and modern technologies to build innovative solutions."
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
    title: "Mechanical Engineering",
    desc: "Understand machines, design systems, and develop real-world mechanical solutions."
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/1684/1684375.png",
    title: "Civil Engineering",
    desc: "Design and build infrastructure like bridges, roads, and buildings."
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
    title: "Electrical Engineering",
    desc: "Work with circuits, power systems, and electrical technologies."
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
    title: "Electronics & Communication",
    desc: "Explore communication systems, microchips, and electronics."
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png",
    title: "AI & Data Science",
    desc: "Dive into artificial intelligence, machine learning, and data analysis."
  }
];
const educators = [
  {
    img: "image1.jpeg",
    name: "Kundan Kumar",
    designation: "Senior Softwear Developer",
    about: "Passionate about simplifying complex physics concepts and inspiring students through practical learning."
  },
  {
    img: "image2.jpeg",
    name: "Shivam Kumar",
    designation: "DSA expert Done Leetcode 600 solve question",
    about: "Dedicated to building strong problem-solving skills and logical thinking in students."
  },
  {
    img: "image3.jpeg",
    name: "Aquib Raza",
    designation: "AI/ML/Pandas/Scikit-learn",
    about: "Specialist in programming, AI, and modern technologies with a hands-on teaching approach."
  },
  {
    img: "image4.jpeg",
    name: "Prince kumar",
    designation: "GATE Aisparants",
    about: "Encourages curiosity and experimentation to make chemistry engaging and fun."
  },
  {
    img: "image5.jpeg",
    name: "Raghav kumar jha",
    designation: "Senior Full Stuck Developer",
    about: "Focuses on real-world applications and practical understanding of mechanical systems."
  },
  {
    img: "image6.jpeg",
    name: "Nikhil Kumar Roy",
    designation: "Python expert AI/ML Btech Cse IIT Patna",
    about: "Guides students in understanding Artifical Intelligence "
  }
];
  
  return (
    <>
     <Nav/>
       {met && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      backgroundColor: "rgba(0,0,0,0.6)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    <div
      style={{
        backgroundColor: "green",
        color: "white",
        padding: "30px",
        borderRadius: "10px",
        textAlign: "center"
      }}
    >
      <h3>Form is Successfully submitted</h3>
      <button
        style={{
          marginTop: "10px",
          padding: "8px 15px",
          backgroundColor: "white",
          color: "green",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
        onClick={() => setMet(false)}
      >
        OK
      </button>
    </div>
  </div>
)}
      {show && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "115vh",
      backgroundColor: "rgba(0,0,0,0.6)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 999
    }}
  >
    <div className="col-md-5">
      <div className="card shadow-lg border-0 rounded-4">
        
        <div className="card-body p-4">
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="m-0">Enquire Now</h4>
            <button 
              className="btn btn-danger"
              onClick={() => setShow(false)}
            >
              <FaTimes />
            </button>
          </div>
          <form className="mt-3"
            onSubmit={(e) => {
    e.preventDefault();   
    setMet(true);         
    setShow(false);      
  }}
          >

            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Full Name" />
            </div>

            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Email Address" />
            </div>

            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Phone Number" />
            </div>

            <div className="mb-3">
              <textarea className="form-control" rows="3" placeholder="Your Message"></textarea>
            </div>

            <div className="d-grid">
              <button 
                type="submit" 
                className="btn fw-bold"
                style={{ backgroundColor: "orange", color: "white" }}
              >
                Submit
              </button>
            </div>

          </form>

        </div>
      </div>
    </div>
  </div>
)}
      
      <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
  
  <div className="carousel-inner">

  
    <div className="carousel-item active">
      <div 
        style={{
          height: "60vh",
          backgroundImage: "url('https://images.unsplash.com/photo-1580582932707-520aed937b7b')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        className="d-flex align-items-center justify-content-center text-white text-center"
      >
        
        <div>
          <h1 className="fw-bold">Modern Facilities and Transport Available</h1>
          <p>We take full responsibility for students within the college premises</p>

          
          <div className="mt-3">
              <button 
                  onClick={() => navigate("/section")}
                  className="btn me-2 fw-bold"
                  style={{ backgroundColor: "orange", color: "white", border: "none" }}
                >
                  View Gallery
                </button>
                      <a 
                      href="#" 
                      onClick={() => setShow(true)}
                      className="btn fw-bold px-4 py-2"
                      style={{ 
                        backgroundColor: "#5a0463",   // dark orange
                        color: "white",
                        border: "none"
                      }}
                    >
                      Enquire Now
                    </a>
          </div>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div 
        style={{
          height: "60vh",
          backgroundImage: "url('https://images.unsplash.com/photo-1509062522246-3755977927d7')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        className="d-flex align-items-center justify-content-center text-white text-center"
      >
        <div>
          <h1 className="fw-bold">Quality Education</h1>
          <p>Learn, Grow and Succeed</p>

          <div className="mt-3">
            <a 
              href="/gallery" 
              className="btn me-2 fw-bold"
              style={{ backgroundColor: "orange", color: "white", border: "none" }}
            >
              View Gallery
            </a>
              <a 
            href="#" 
            onClick={() => setShow(true)}
            className="btn fw-bold px-4 py-2"
            style={{ 
              backgroundColor: "#5a0463",   // dark orange
              color: "white",
              border: "none"
            }}
              >
            Enquire Now
          </a>
          </div>
        </div>
      </div>
    </div>

    {/* Slide 3 */}
    <div className="carousel-item">
      <div 
        style={{
          height: "60vh",
          backgroundImage: "url('https://www.collegebatch.com/static/clg-gallery/darbhanga-college-of-engineering-darbhanga-351878.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        className="d-flex align-items-center justify-content-center text-white text-center"
      >
        <div>
          <h1 className="fw-bold">Join Us Today</h1>
          <p>Build Your Career With Us</p>

          <div className="mt-3">
             <a 
                href="/gallery" 
                className="btn me-2 fw-bold"
                style={{ backgroundColor: "orange", color: "white", border: "none" }}
              >
                View Gallery
              </a>
                <a 
                href="#" 
                onClick={() => setShow(true)}
                className="btn fw-bold px-4 py-2"
                style={{ 
                  backgroundColor: "#5a0463",   // dark orange
                  color: "white",
                  border: "none"
                }}
              >
                Enquire Now
              </a>
          </div>
        </div>
      </div>
    </div>

  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>

  <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>

</div>
<hr style={{
  height: "12px",
  border: "none",
  borderRadius: "20px",
  fontWeight:600,
  background: "linear-gradient(90deg, #e04822, #c65c0b, #009ea9, #0249e2)",
  boxShadow: "0 5px 15px rgba(0,0,0,0.5)"
}} />
  <div className='container-fluid' style={{maxWidth:1200, margin:"auto",marginTop:"20px"}}>
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-12 text-center'>
          <div className='d-flex flex-column align-items-center'>
            <div style={{
              display: "inline-block",
              padding: "4px",
              borderRadius: "50%",
              background: "linear-gradient(90deg, #ff7e5f, #feb47b, #36d1dc, #5b86e5)"
            }}>
        <img 
          src="image.jpeg"
          style={{
            height: 210,
            width: 195,
            borderRadius: "50%",
            display: "block"
          }}
        />
   </div>
            <h2 style={{
              textAlign: "center",
              fontSize: "28px",
              fontWeight: "700",
              lineHeight: "1.6",
              background: "linear-gradient(90deg, #36d1dc, #5b86e5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
              }}>
                Sir Anuj Patel <br />
                <span style={{fontSize:"20px", fontWeight:"500", color:"#000000", WebkitTextFillColor:"#333"}}>
                  CEO Of <br />
                  Darbhanga School of Engineering <br />
                  Leader, 24th Batch<br></br>
                  Favourite Senior of 25th Batch
                </span>
              </h2>
            <p style={{
              fontSize: "17px",
              fontWeight: "500",
              lineHeight: "1.7",
              textAlign: "center",
              maxWidth: "800px",
              margin: "auto",
              color: "#3919ed"
            }}
            >Sir Anuj Patel is a dedicated and inspiring personality known for his passion for teaching and guiding students. He is appreciated for his clear way of explaining concepts and his friendly nature, which makes learning easy and enjoyable. He always motivates students to work hard, stay disciplined, and achieve their goals. His positive attitude and commitment towards education make him a respected and admired mentor. Sir Anuj Patel believes in continuous learning and encourages others to improve their skills and knowledge every day.</p>  
          </div>
        </div>
      </div>
    </div>
  </div>

<div className='container-fluid' style={{
  maxWidth:1200,
  margin:"auto",
  marginTop:"10px"
}}>
  <div className='container'>
    <div className='row'>
      
      <div className='col-12 col-md-6'>
         <img 
    src="https://ik.imagekit.io/syustaging/SYU_PREPROD/Campus_WVC6ATPxL.webp?tr=w-3840"
    style={{
      width: "100%",
      height: "100%",
      maxHeight: "400px",
      objectFit: "cover",
      borderRadius: "10px"
    }}
  />
  
      </div>

      <div className='col-12 col-md-6'>
        <h5 style={{
          color:"brown"
        }}>About School</h5>
         <h2 style={{
          fontSize: "32px",
          fontWeight: "800",
          textAlign: "center",
          display: "inline-block",
          paddingBottom: "6px",
          borderBottom: "4px solid",
          borderImage: "linear-gradient(90deg, #ff7e5f, #feb47b, #36d1dc, #5b86e5) 1"
        }}>
        Empowering Young Minds Through Quality Education
     </h2>
        <p style={{color:"black"}}>We are committed to creating a virant learning atmosphere where students are encouraging to think critically collobratied <br></br>and grow historically.Our classroom foster curiosity and lifelong love for learning</p>
        <div>
          <ul class="list-group" style={{
            listStyle:"none"
          }}>
            <li className="list-group-item" style={{
              listStyle:"none",
              border:"none"
            }}>  <FaCheck style={{color:"green", marginRight:"8px"}} />Engaging Learning environment</li>
            <li className="list-group-item" style={{
              listStyle:"none",
              border:"none"
            }}>  <FaCheck style={{color:"green", marginRight:"8px"}} />Activity-Branded Curriculum</li>
            <li className="list-group-item" style={{
              listStyle:"none",
              border:"none"
            }}>  <FaCheck style={{color:"green", marginRight:"8px"}} />Modern Classroom & Labs</li>
            <li className="list-group-item" style={{
              listStyle:"none",
              border:"none"
            }}>  <FaCheck style={{color:"green", marginRight:"8px"}} />Dedicated & Passionated Teacher</li>
            <li className="list-group-item" style={{
              listStyle:"none",
              border:"none"
            }}>  <FaCheck style={{color:"green", marginRight:"8px"}} />Safe & Supportive Campus</li>
          </ul>
            <button 
            onClick={()=>setShowImage(!showImage)}
            style={{
              padding: "12px 28px",
              fontSize: "18px",
              fontWeight: "900",
              color: "#fff",
              border: "none",
              borderRadius: "30px",
              cursor: "pointer",
              background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              transition: "0.3s"
        }}
              onMouseOver={(e)=>{
                e.target.style.background="linear-gradient(90deg, #36d1dc, #5b86e5)"
              }}
              onMouseOut={(e)=>{
                e.target.style.background="linear-gradient(90deg, #ff7e5f, #aedb08)"
              }}
              >
                Discover Our Learning Journey
              </button>
              {showImage &&  <p style={{marginTop:"10px"}}>We believe in empowering students with knowledge, skills, and confidence. Our learning environment encourages curiosity, innovation, and lifelong success.</p> } 
        </div>
      </div>

    </div>
  </div>
</div>
   <hr style={{
  height: "16px",
  border: "none",
  borderRadius: "25px",
  backgroundImage: "linear-gradient(90deg, #ff7e5f, #feb47b, #00a1ac, #093aa3)",
  boxShadow: "0 6px 20px rgba(0,0,0,0.35)"
}} />
        <div style={{
        maxWidth: "1230px",
        margin: "auto",
        textAlign: "center",
        
      }}>
        <h4 style={{color:"brown",fontWeight:"600"}}>OUR OFFERING</h4>
       <p style={{
            fontSize: "22px",
            fontWeight: "800",
            display: "inline-block",
            paddingBottom: "6px",
            borderBottom: "4px solid",
            borderImage: "linear-gradient(90deg, #ff7e5f, #feb47b, #36d1dc, #5b86e5) 1"
          }}>
            Programs That Shape Bright Futures
          </p>
          <p style={{fontWeight:"600"}}>From foundation learnig to advanced academic paths, we provide tailored education<br></br>programs that inspire,challenge and support students at every stage</p>
      </div>
       
       <div className='container-fluid' style={{
      maxWidth:1200,
      margin:"auto",
      marginTop:"40px"
}}>
  <div className='container'>
    <div className='row'>
      
      <div className='col-12 col-md-6'>
         <img 
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJF3ofAUQaKpCwQL8wP4tc55yyXJmB7Z4w5Q&s"
    style={{
      width: "100%",
      height: "100%",
      maxHeight: "400px",
      objectFit: "cover",
      borderRadius: "10px"
    }}
  />
  
      </div>

      <div className='col-12 col-md-6'>
       
         <h2 style={{
          fontSize: "32px",
          fontWeight: "800",
          textAlign: "center",
          display: "inline-block",
          paddingBottom: "6px",
          borderBottom: "4px solid",
          borderImage: "linear-gradient(90deg, #ff7e5f, #feb47b, #36d1dc, #5b86e5) 1"
        }}>
        Science & Tech Lab
     </h2>
        <p style={{color:"black"}}>Our advanced Science and Technical Labs are designed to inspire curiosity and innovation among students. With state-of-the-art equipment and interactive learning methods, students gain practical knowledge through experiments and real-world applications. These labs help build analytical skills, creativity, and a strong foundation for future scientific and technological careers. <br></br>and grow historically.Our classroom foster curiosity and lifelong love for learning</p>
        <div>
            <button 
            onClick={()=>setMot(!mot)}
            style={{
              padding: "12px 28px",
              fontSize: "18px",
              fontWeight: "900",
              color: "#fff",
              border: "none",
              borderRadius: "30px",
              cursor: "pointer",
              background: "linear-gradient(90deg, #51ee1c, #e806ca)",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              transition: "0.3s"
        }}
              onMouseOver={(e)=>{
                e.target.style.background="linear-gradient(90deg, #2abf61, #e82d8d)"
              }}
              onMouseOut={(e)=>{
                e.target.style.background="linear-gradient(90deg, #810762, #29c107)"
              }}
              >
                Explore program
              </button>
             {mot &&  
  <>
    <p style={{ marginTop: "10px" }}>
      We believe in empowering students with knowledge, skills, and confidence. 
      Our learning environment encourages curiosity, innovation, and lifelong success.
    </p>

    <ul style={{ listStyle: "none", padding: 0, marginTop: "15px" }}>
      
      <li style={{ marginBottom: "10px", color: "#5b86e5", fontWeight: "600" }}>
        <FaLaptopCode style={{ marginRight: "8px" }} />
        Computer Science Engineering (CSE)
      </li>

      <li style={{ marginBottom: "10px", color: "#ff7e5f", fontWeight: "600" }}>
        <FaCogs style={{ marginRight: "8px" }} />
        Mechanical Engineering
      </li>

      <li style={{ marginBottom: "10px", color: "#28a745", fontWeight: "600" }}>
        <FaBuilding style={{ marginRight: "8px" }} />
        Civil Engineering
      </li>

      <li style={{ marginBottom: "10px", color: "#ffc107", fontWeight: "600" }}>
        <FaBolt style={{ marginRight: "8px" }} />
        Electrical Engineering
      </li>

      <li style={{ marginBottom: "10px", color: "#00a1ac", fontWeight: "600" }}>
        <FaMicrochip style={{ marginRight: "8px" }} />
        Electronics & Communication
      </li>

      <li style={{ marginBottom: "10px", color: "#9b59b6", fontWeight: "600" }}>
        <FaRobot style={{ marginRight: "8px" }} />
        AI & Data Science
      </li>

    </ul>
  </>
}
        </div>
      </div>

    </div>
  </div>
</div>
  
    <div className="container" style={{ marginTop: "30px" }}>
  <div className="row">
    
    {programs.map((item, index) => (
      <div className="col-12 col-md-4" key={index}>
        
        <div style={{
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          textAlign: "center",
          marginBottom: "20px",
          transition: "0.3s",
          background: "#fff",
          border:"1px solid black",
          marginTop:"50px"
        }}
        onMouseOver={(e)=> e.currentTarget.style.transform="translateY(-5px)"}
        onMouseOut={(e)=> e.currentTarget.style.transform="translateY(0px)"}
        >

      
          <img 
            src={item.img} 
            alt={item.title}
            style={{
              width: "70px",
              height: "70px",
              objectFit: "contain",
              marginBottom: "10px"
            }}
          />

        
          <h5 style={{
            fontWeight: "700",
            marginBottom: "8px"
          }}>
            {item.title}
          </h5>

          
          <p style={{
            fontSize: "14px",
            color: "black"
          }}>
            {item.desc}
          </p>

        </div>

      </div>
    ))}

  </div>
</div>

<div style={{
  maxWidth: "1230px",
  margin: "auto",
  textAlign: "center",
  padding: "20px 0"
}}>
  <h4 style={{ fontWeight: "700", letterSpacing: "1px" }}>
    OUR FACULTY
  </h4>

  <p style={{ fontSize: "20px", fontWeight: "600" }}>
    Meet Our Educator
  </p>
  <p>Highly qulified, exprienced and passionate teachers committed to your child's<br></br>
  development
  </p>
</div>
 

 <div className="container" style={{ marginTop: "40px" }}>
  <div className="row">

    {educators.map((item, index) => (
      <div className="col-12 col-md-4" key={index}>
        
        <div style={{
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          textAlign: "center",
          marginBottom: "20px",
          background: "#fff",
          transition: "0.3s",
          border:"1px solid black"
        }}
        onMouseOver={(e)=> e.currentTarget.style.transform="translateY(-6px)"}
        onMouseOut={(e)=> e.currentTarget.style.transform="translateY(0px)"}
        >

          
          <img 
            src={item.img} 
            alt={item.name}
            style={{
              width: "160px",
              height: "160px",
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: "10px",
              border: "3px solid #5b86e5"
            }}
          />

        
          <h5 style={{
            fontWeight: "700",
            marginBottom: "5px"
          }}>
            {item.name}
          </h5>

        
          <p style={{
            color: "#5b86e5",
            fontWeight: "600",
            marginBottom: "8px"
          }}>
            {item.designation}
          </p>

        
          <p style={{
            fontSize: "14px",
            color: "black"
          }}>
            {item.about}
          </p>

        </div>

      </div>
    ))}

  </div>
</div>
  

     <Footer/>
    </>
  )
}
export default Home;