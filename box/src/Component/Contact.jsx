import { useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import Nav from './Nav'
import Footer from './Footer'
import Holi from './Holi'

export const Contact = () => {
  //lecture no 17
  const [fullname,setFullname]=useState('');
  const [email,setEmail]=useState('');
  const [message,setMessage]=useState('');

  const contactUs=(e)=>{
    e.preventDefault();
    console.log(fullname,email,message);
    Swal.fire({
      icon:"success",
      tittle:"success",
      text:"Form successfully Submitted"
    })
  }
  return (
    <>
    <Nav/>
    {/* <div style={{
      display:"flex",
      padding:"64px",
      gap:24
    }}>
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTv3gbJXUeUOVjmXnsEViQpOjSrfd1uNgcrw&s" style={{ width:"50%"}}/>
      <div style={{
        width:"50%"
      }}>
        <form tyle={{display:"flex",flexDirection:"column",gap:8}}>
          <div style={{
            display:"flex",
            flexDirection:"column",
            gap:8
          }}>
            <label style={{
              fontSize:18,
              fontWeight:500
            }}>Fullname</label>
            <input type="text" name="fullname" placeholder='enter name here'required style={{
              border:"1px solid #ccc",
              borderRadius:4,
              padding:16
            }}/>
          </div>

          <div style={{
            display:"flex",
            flexDirection:"column",
            gap:8
          }}>
            <label style={{
              fontSize:18,
              fontWeight:500
            }}>Email</label>
            <input type="email" name="email" placeholder='example@.com'required style={{
              border:"1px solid #ccc",
              borderRadius:4,
              padding:16
            }}/>
          </div>

          <div style={{
            display:"flex",
            flexDirection:"column",
            gap:8
          }}>
            <label style={{
              fontSize:18,
              fontWeight:500
            }}>Message</label>
            <textarea type="text" name="message" placeholder='write your quiries here'required style={{
              border:"1px solid #ccc",
              borderRadius:4,
              padding:16
            }} rows={4}/>
          </div>
          <button style={{
            border:"none",
            width:"fit-content",
            padding:"14px 32px",
            borderRadius:4,
            background:"#6C63FF",
            color:"white",
            fontWeight:600,
            marginTop:"9px"
          }}>SUBMIT</button>
        </form>
      </div>
    </div> */}
     <div className="container py-5">
        <div className="row align-items-center">

          {/* Image */}
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTv3gbJXUeUOVjmXnsEViQpOjSrfd1uNgcrw&s" 
              className="img-fluid"
            />
          </div>

        
          <div className="col-12 col-md-6">
            <form onSubmit={contactUs} style={{display:"flex",flexDirection:"column",gap:12}}>

              <div>
                <label className="fw-semibold">Fullname</label>
                <input 
                onChange={(e)=>setFullname(e.target.value)}
                type="text" className="form-control" placeholder="Enter name" required />
               
              </div>

              <div>
                <label className="fw-semibold">Email</label>
                <input onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" placeholder="example@gmail.com" required/>
               
              </div>

              <div>
                <label className="fw-semibold">Message</label>
                <textarea onChange={(e)=>setMessage(e.target.value)} className="form-control" rows="4" placeholder="Write your queries" required></textarea>
               
              </div>

              <button className="btn btn-primary mt-2">
                SUBMIT
              </button>

            </form>
          </div>

        </div>
      </div>
       <Link 
  to="/holi"
  style={{
    display: "inline-block",
    padding: "12px 28px",
    fontSize: "20px",
    fontWeight: "bold",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "30px",
    background: "linear-gradient(45deg, #ff6a00, #ee0979)",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    transition: "all 0.3s ease",
    marginBottom:"8px"
  }}
>
  🎉 Go to HoliDay 
</Link>
    <Footer/>
    </>
  )
}
