import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Teacher from './Component/Teacher';
import Holiday from './Component/Holiday';
import { Contact } from './Component/Contact';
import { useEffect, useState } from "react";
import Holi from './Component/Holi';
import Apply from './Component/Apply';
import Enroll from './Component/Enroll';
import Section from './Component/Section';
//make seperate file of home navigation bar contact login turial work seperate file markup<>/<>
//maintain the code secure user inteface make small pieces 
//external stylesheet
//internal stylesheet
//inline stylesheet
//it make string for delecrating JESON Strinfy
//{JSON.stringify(new Date())}
//{x+10}
//style properties can be write as object
{/* <nav style={{
        width:"100%",
        backgroundColor:"red"
      }}>
        <ul style={{
          padding:0,
          margin:0,
          display:"flex",
          justifyContent:"space-evenly",
          listStyle:"none"
        }}>
          <li>
            <a href="#" style={{
              textDecoration:"none",
              color:"white",
              padding:"8px",
              display:"block",
              fontSize:"18px"
            }}>Home</a>
            </li>

            <li>
            <a href="#" style={{
              textDecoration:"none",
              color:"white",
              padding:"8px",
              display:"block",
              fontSize:"18px"
            }}>Home</a>
            </li>

            <li>
            <a href="#" style={{
              textDecoration:"none",
              color:"white",
              padding:"8px",
              display:"block",
              fontSize:"18px"
            }}>Home</a>
            </li>

            <li>
            <a href="#" style={{
              textDecoration:"none",
              color:"white",
              padding:"8px",
              display:"block",
              fontSize:"18px"
            }}>Home</a>
            </li>

            <li>
            <a href="#" style={{
              textDecoration:"none",
              color:"white",
              padding:"8px",
              display:"block",
              fontSize:"18px"
            }}>Home</a>
            </li>
        
        </ul>
      </nav> */}

{/* <section style={{
        width:"75%",
        padding:34,
        background:"#f5f5f5",
        margin:"48px auto"
      }}>
        <h1>This is section</h1>
      </section>       */}
  // <footer style={{
  //       background:"#323232",
  //       textAlign:"center",
  //       color:"white",
  //       padding:"100px"
  //     }}>
  //       <h1>THis is footer system</h1>
  //     </footer>
  //  <Nav></Nav>
  //     <Section></Section>
  //     <Footer></Footer>
       
function App() {
  const [loading, setLoading] = useState(true);
   useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); 
  }, []);
   //note of hide and show
   //two way to pass condition teraniry operator
   //x ==10 ? "success":"failed"
   //&&
  //  const show =false;
  //  const demo=()=>{
  //   alert("coding ott")
  //  }
  //note React hooks 
  //useState;
  //useEffect;
  //useMemo;
  //useRef;
  //useContaxt;
  //the use state sotore the date locallialy
  //onmouseout
  //onMouseHover
  //onDoubleClick
  //onclick
  //note no.2
  // const [show,setShow]=useState(true);
  // const test=()=>{
  //    setShow(!show);
  // }
  // const demo=()=>{
  //   alert();
  // }
//note 3
//<button onClick={()=>{alert("hello world")}}>hello</button>
//note special 
//logical and operator
//  {/* {show && <p>this is c coding part</p>} */}
//note 4
//by using ternirary operator
//const show=true
//<h1>Coding Ott</h2>
//{show && <p>www.coding.com</p>:<p>Er Sarav</p>}
//const show=true;
//const toggle=()=>{}
  return (
    <>
   {/* {show && <p>this is c coding part</p>} */}
     <div>
      {loading ? <h1></h1> : <h1></h1>}
      {/* <button onClick={demo}>on test</button> */}
    </div>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/teachers" element={<Teacher/>}/>
      <Route path="/holidays" element={<Holiday/>} />
      <Route path="/contacts" element={<Contact/>}/>
      <Route path="/holi" element={<Holi/>}/>
      <Route path='/enroll'element={<Enroll/>}/>
      <Route path="/apply" element={<Apply/>}/>
      <Route path="/section" element={<Section/>}/>
      <Route path="*" element={<h2>Not found</h2>}/>
     </Routes>
     </BrowserRouter>
        <div>
          {/* <h1>coding ott</h1>
          { show && <p>wwww.coding ott</p>}
          <button onClick={test}>test</button> */}
        </div>
     {/* <div>
      <Nav></Nav>
      <Footer></Footer>
     </div> */}

   </>
  )
}

export default App
