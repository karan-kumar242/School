import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

const Section = () => {

  
  const gallery = [
    {
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
      title: "Campus Life"
    },
    {
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
      title: "Classroom"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9BUPOpovtvvGeIH0rCD09FA13810Ow1dy2g&s",
      title: "Engineering Lab"
    },
    {
      img: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
      title: "Library"
    },
    {
      img: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
      title: "Workshop"
    },
    {
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      title: "Computer Lab"
    }
  ];

  return (
    <>
      <Nav/>

      {/* Header */}
      <div
        className="text-center text-white py-5"
        style={{
          background:
            "linear-gradient(179.7deg, rgba(249,21,215,1) 1.1%, rgba(22,0,98,1) 99%)",
        }}
      >
        <h1 className="fw-bold">Gallery</h1>
        <p>Explore Our Campus & Facilities</p>
      </div>

      {/* Gallery Section */}
      <div className="container my-5">
        <div className="row g-4">

          {gallery.map((item, index) => (
            <div className="col-12 col-sm-6 col-lg-4" key={index}>
              <div className="card shadow border-0 h-100">

                <img
                  src={item.img}
                  alt={item.title}
                  className="card-img-top"
                  style={{ height: "220px", objectFit: "cover" }}
                />

                <div className="card-body text-center">
                  <h5 className="fw-bold">{item.title}</h5>
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

export default Section;