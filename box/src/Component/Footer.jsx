import React from 'react'

 const Footer = () => {
  return (
    <>
   {/* <footer style={{
    padding:100,
    background:"#03011c",
    display:"flex",
    gap:32
   }}>
    <div>
      <h2 style={{
        color:"#f5f5f5",
        fontWeight:"500"
      }}>CodeSchool</h2>

      <p style={{color:"white"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus ex eveniet voluptate eos autem, cum totam explicabo fuga ea aut sapiente exercitationem deserunt nesciunt perspiciatis dolore eaque excepturi modi nemo!</p>
    </div>

     <div>
      <h2 style={{
        color:"#f5f5f5",
        fontWeight:"500"
      }}>CodeSchool</h2>

      <p style={{color:"white"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus ex eveniet voluptate eos autem, cum totam explicabo fuga ea aut sapiente exercitationem deserunt nesciunt perspiciatis dolore eaque excepturi modi nemo!</p>
    </div>

     <div>
      <h2 style={{
        color:"#f5f5f5",
        fontWeight:"500"
      }}>CodeSchool</h2>

      <p style={{color:"white"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus ex eveniet voluptate eos autem, cum totam explicabo fuga ea aut sapiente exercitationem deserunt nesciunt perspiciatis dolore eaque excepturi modi nemo!</p>
    </div>

     <div>
      <h2 style={{
        color:"#f5f5f5",
        fontWeight:"500"
      }}>CodeSchool</h2>

      <p style={{color:"white"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus ex eveniet voluptate eos autem, cum totam explicabo fuga ea aut sapiente exercitationem deserunt nesciunt perspiciatis dolore eaque excepturi modi nemo!</p>
    </div>

   </footer> */}

    <footer className="container-fluid py-5"
        style={{background:"#03011c"}}>

  <div className="row g-4 px-5">

    {/* Column 1 */}
    <div className="col-12 col-md-6 col-lg-3" id="mari">
      <h2 style={{color:"#f5f5f5", fontWeight:"500"}}>Darbhanga School of Engineering</h2>
      <p className="text-white">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus ex eveniet voluptate eos autem...
      </p>
    </div>

    
    <div className="col-12 col-md-6 col-lg-3" id="mari">
      <h2 style={{color:"#f5f5f5", fontWeight:"500"}}>Useful Links</h2>
      <ul style={{margin:0, padding:0,display:"flex",flexDirection:"column",gap:8}}>
        <li><a href="#" style={{
          color:"white",
          textDecoration:"none"
        }}>Home</a></li>

         <li><a href="#" style={{
          color:"white",
          textDecoration:"none"
        }}>Teacher</a></li>

         <li><a href="#" style={{
          color:"white",
          textDecoration:"none"
        }}>Contact</a></li>

         <li><a href="#" style={{
          color:"white",
          textDecoration:"none"
        }}>Holiday</a></li>

         <li><a href="#" style={{
          color:"white",
          textDecoration:"none"
        }}>talk with us</a></li>
      </ul>
    </div>

      <div className="col-12 col-md-6 col-lg-3" id="mari">
      <h2 style={{color:"#f5f5f5", fontWeight:"500"}}>Socal Links</h2>
      <ul style={{margin:0, padding:0,display:"flex",flexDirection:"column",gap:8}}>
        <li><a href="#" style={{
          color:"white",
          textDecoration:"none"
        }}>YouTube</a></li>

         <li><a href="#" style={{
          color:"white",
          textDecoration:"none"
        }}>Facebook</a></li>

         <li><a href="#" style={{
          color:"white",
          textDecoration:"none"
        }}>Instagram</a></li>

         <li><a href="#" style={{
          color:"white",
          textDecoration:"none"
        }}>Linkdin</a></li>

         <li><a href="#" style={{
          color:"white",
          textDecoration:"none"
        }}>Twitter</a></li>
      </ul>
    </div>
   

    
    <div className="col-12 col-md-6 col-lg-3" id="mari">
      <h2 style={{color:"#f5f5f5", fontWeight:"500"}}>Enquiry</h2>
     <form style={{
      display:"flex",
      flexDirection:"column",
      gap:"16px"
     }}>
        <input name="fullname" placeholder='fullname'
         style={{
          border:"none",
          padding:12,
          borderRadius:4
         }}
        />

        <input type="email" placeholder='ex@gamil.com' required
         style={{
          border:"none",
          padding:12,
          borderRadius:4
         }}
        />

        <textarea name="message" placeholder='message' 
         style={{
          border:"none",
          padding:12,
          borderRadius:4
         }}
        />
        <button type="button" class="btn btn-success" style={{width:"100px"}}>Submit</button>
     </form>
    </div>

  </div>
</footer>
    </>
    
  )
}
export default Footer;
//benefit of jsx extension
// ui and dynamic code both file in one file 
// support jsx expression for dynamic coding inside markup or ui design 
//it indicate user define components 