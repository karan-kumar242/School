import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import "bootstrap/dist/css/bootstrap.min.css";

const Holi = () => {

 const holidays = [
  { title: "New Year", duration: "1 Day", date: "01-01-2026" },
  { title: "Makar Sankranti", duration: "1 Day", date: "14-01-2026" },
  { title: "Republic Day", duration: "1 Day", date: "26-01-2026" },
  { title: "Basant Panchami", duration: "1 Day", date: "02-02-2026" },
  { title: "Maha Shivratri", duration: "1 Day", date: "18-02-2026" },
  { title: "Holi", duration: "2 Days", date: "14-03-2026" },
  { title: "Ram Navami", duration: "1 Day", date: "30-03-2026" },
  { title: "Mahavir Jayanti", duration: "1 Day", date: "04-04-2026" },
  { title: "Good Friday", duration: "1 Day", date: "03-04-2026" },
  { title: "Eid-ul-Fitr", duration: "2 Days", date: "31-03-2026" },
  { title: "Buddha Purnima", duration: "1 Day", date: "12-05-2026" },
  { title: "Summer Vacation", duration: "1 Month", date: "01-06-2026" },
  { title: "Bakrid (Eid-ul-Adha)", duration: "2 Days", date: "21-07-2026" },
  { title: "Independence Day", duration: "1 Day", date: "15-08-2026" },
  { title: "Raksha Bandhan", duration: "1 Day", date: "30-08-2026" },
  { title: "Janmashtami", duration: "1 Day", date: "06-09-2026" },
  { title: "Ganesh Chaturthi", duration: "1 Day", date: "17-09-2026" },
  { title: "Gandhi Jayanti", duration: "1 Day", date: "02-10-2026" },
  { title: "Dussehra", duration: "1 Day", date: "12-10-2026" },
  { title: "Durga Puja", duration: "5 Days", date: "20-10-2026" },
  { title: "Karva Chauth", duration: "1 Day", date: "25-10-2026" },
  { title: "Diwali", duration: "3 Days", date: "10-11-2026" },
  { title: "Bhai Dooj", duration: "1 Day", date: "13-11-2026" },
  { title: "Chhath Puja", duration: "2 Days", date: "19-11-2026" },
  { title: "Guru Nanak Jayanti", duration: "1 Day", date: "27-11-2026" },
  { title: "Christmas", duration: "1 Day", date: "25-12-2026" },
  { title: "Winter Vacation", duration: "10 Days", date: "28-12-2026" },

  { title: "New Year", duration: "1 Day", date: "01-01-2027" },
  { title: "Republic Day", duration: "1 Day", date: "26-01-2027" },
  { title: "Holi", duration: "2 Days", date: "14-03-2027" },
  { title: "Eid-ul-Fitr", duration: "2 Days", date: "22-04-2027" },
  { title: "Good Friday", duration: "1 Day", date: "02-04-2027" }
];
  return (
    <>
      <Nav />

      <div className="container py-5">

      <h1
  style={{
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "40px",
    fontWeight: "bold",
    padding: "15px 30px",
    borderRadius: "12px",

  
    background: "linear-gradient(45deg, #141e30, #243b55)",

  
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
    WebkitTextFillColor: "transparent",
    letterSpacing: "2px",
    textTransform: "uppercase",
    boxShadow: "0 5px 20px rgba(0,0,0,0.3)"
  }}
>
  ✨ Your Holidays ✨
</h1>

        <div className="table-responsive">
          <table className="table table-bordered table-hover text-center align-middle" style={{border:"1px solid black"}}>

            <thead className="table-dark">
              <tr>
                <th>S/No</th>
                <th>Title</th>
                <th>Duration</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {holidays.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.duration}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>

      <Footer />
    </>
  )
}

export default Holi;