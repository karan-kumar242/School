import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Nav from './Nav'
import Footer from './Footer'
import { Collapse } from "bootstrap";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
 const Apply = () => {
  const[edit,setEdit]=useState(null);
  const [right,setRight]=useState(-450);
  const[student,setStudent]=useState([]);
  const [form,setForm] = useState({
      fullname:"",
      class:"",
      reg:"",
      course:"",
      dob:""
 });
  const handleDrawer=()=>{
      setRight(0);
  }
  const handleInput=(e)=>{
    const Input=e.target;
    const val=Input.value;
    const key=Input.name;
    setForm({
      ...form,
      [key]:val
    });
  }
  const createStudent=(e)=>{
      e.preventDefault();
      setStudent([
        ...student,
        form
      ])
      setForm({
      fullname:"",
      class:"",
      reg:"",
      course:"",
      dob:""
      })
      setRight(-450);
  }
  const deleteStudent=(index)=>{
     const backup=[...student]
     backup.splice(index,1);
     setStudent(backup)
  }
  const EditStudent=(item)=>{
      setEdit(item);
      setRight(0);
      setForm(item);
  }
  const SaveStudent = (e) => {
  e.preventDefault();

   const updatedList = student.map((item) =>
    item === edit ? form : item
  );

  setStudent(updatedList);

  setEdit(null); 
  setForm({
    fullname: "",
    class: "",
    reg: "",
    course: "",
    dob: ""
  });

  setRight(-450); 
};
  return (
    <>
    <Nav/>
    {/* <div style={{background:"#ddd",minHeight:"100vh"}}>
      <div style={{
        width:"70%",
        background:"white",
        margin:"32px auto",
        padding:32
      }}>
          <h1 style={{padding:0,margin:0,textAlign:"center"}}>Apply Now by Crud Apps</h1>
          <button
          onClick={handleDrawer}
           style={{
            border:"none",
            background:"#8407ba",
            color:"white",
            padding:"14px 24px",
            fontSize:16,
            borderRadius:4,
            margin:"20px 0"
          }}>
            <FaPlus style={{marginRight:8}}/>
             New Student</button>
             <table style={{
             borderCollapse: Collapse,
              width:"100%",
            
             }}>
               <thead>
                  <th>S/No</th>
                  <th>Student's Name</th>
                  <th>Branch</th>
                  <th>Registration No</th>
                  <th>Course</th>
                  <th>Date of Birth</th>
                  <th>Action</th>
               </thead>
               <tbody>
                   <tr style={{textAlign:"center"}}>
                    <td>1</td>
                    <td>Er Sonu</td>
                    <td>CSe</td>
                    <td>848348584</td>
                    <td>cse</td>
                    <td>1/1/2009</td>
                    <td>
                      <div>
                        <button style={{
                          background: "linear-gradient(135deg, #4facfe, #00f2fe)",
                          border: "none",
                          borderRadius: "50%",
                          width: "45px",
                          height: "45px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          fontSize: "18px",
                          cursor: "pointer",
                          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                          transition: "all 0.3s ease"
                        }}><FaEdit /></button>
                        <button style={{
                          background: "linear-gradient(135deg, #ff4e50, #ff0000)",
                          border: "none",
                          borderRadius: "50%",
                          width: "40px",
                          height: "40px",
                          color: "#fff",
                          cursor: "pointer"
                        }}><FaTrash /></button>
                      </div>
                    </td>
                   </tr>
               </tbody>
             </table>
      </div>
       <aside style={{
        position:"fixed",
        top:150,
        right:right,
        width:450,
        background:"white",
        height:"100%",
        boxShadow:"0 0 40px rgba(0,0,0,0.2)",
        padding:32,
        boxSizing:"border-box",
        transition:"1s"
       }}>
        <button
        onClick={()=>setRight(-450)}
         style={{border:"none",background:"red",fontSize:25,color:"white"}}><FaTimes /></button>
        <h1>New Student</h1>
        <form style={{display:"flex",
          flexDirection:"column",
          gap:16
        }}>
          <input
          required
          name="fullname"
          type="text"
          placeholder="Enter your name"
          style={{
            border:"1px solid #ccc",
            padding:16,
            borderRadius:4
          }}
          />  

          <input
          required
          name="class"
          type="text"
          placeholder="Enter your banch"
          style={{
            border:"1px solid #ccc",
            padding:16,
            borderRadius:4
          }}
          />  

          <input
          required
          name="registration"
          type="number"
          placeholder="Enter your Registration no"
          style={{
            border:"1px solid #ccc",
            padding:16,
            borderRadius:4
          }}
          />

          <input
          required
          name="course"
          type="text"
          placeholder="Enter your course"
          style={{
            border:"1px solid #ccc",
            padding:16,
            borderRadius:4
          }}
          />
           
           <input
          required
          name="dob"
          type="date"
          style={{
            border:"1px solid #ccc",
            padding:16,
            borderRadius:4
          }}
          />
          <button style={{
            border:"none",
            background:"#8407BA",
            color:"white",
            fontSize:16,
            padding:"14px 0"
          }}>Submit</button>
           </form>
       </aside>

    
    </div> */}
    <div style={{ background: "#ddd", minHeight: "100vh" }}>
        <div className="container py-4">
          
        
          <div className="bg-white p-4 rounded shadow">

                  <div
                    className="p-4"
                    style={{
                      background: "linear-gradient(135deg, #667eea, #764ba2, #ff758c)",
                      minHeight: "7vh",
                      color:"white",
                      marginBottom:"10px"
                    }}
                     
                  > <h1 className="text-center mb-4">
              Apply Now by Crud Apps
            </h1></div>
            
            

          
            <button
              onClick={handleDrawer}
              className="btn mb-3"
              style={{
                background: "#8407ba",
                color: "white",
                padding: "12px 20px",
                fontSize: "16px",
                borderRadius: "5px"
              }}
            >
              <FaPlus style={{ marginRight: 8 }} />
              New Student
            </button>

          
            <div className="table-responsive">
              <table className="table table-bordered text-center">
                <thead className="table-dark">
                  <tr>
                    <th>S/No</th>
                    <th>Student's Name</th>
                    <th>Branch</th>
                    <th>Registration No</th>
                    <th>Course</th>
                    <th>Date of Birth</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {student.map((item,index)=>(
                        <tr>
                    <td>{index+1}</td>
                    <td>{item.fullname}</td>
                    <td>{item.class}</td>
                    <td>{item.reg}</td>
                    <td>{item.course}</td>
                    <td>{item.dob}</td>
                    <td>
                      <div className="d-flex justify-content-center gap-2">
                        <button 
                         onClick={()=>EditStudent(item)}
                        style={{
                          background: "linear-gradient(135deg, #4facfe, #00f2fe)",
                          border: "none",
                          borderRadius: "50%",
                          width: "40px",
                          height: "40px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          cursor: "pointer"
                        }}>
                          <FaEdit />
                        </button>

                        <button 
                        onClick={()=>deleteStudent(index)}
                        style={{
                          background: "linear-gradient(135deg, #ff4e50, #ff0000)",
                          border: "none",
                          borderRadius: "50%",
                          width: "40px",
                          height: "40px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          cursor: "pointer"
                        }}>
                          <FaTrash />
                        </button>

                      </div>
                    </td>
                  </tr>
                  ))
                  }
                 
                </tbody>
              </table>
            </div>

          </div>
        </div>

        
        <aside
          style={{
            position: "fixed",
            top: 116,
            right: right,
            width: 350,
            background: "white",
            height: "100%",
            boxShadow: "0 0 40px rgba(0,0,0,0.2)",
            padding: 24,
            transition: "0.5s"
          }}
        >
          <button
            onClick={() => setRight(-450)}
            style={{
              border: "none",
              background: "red",
              fontSize: 20,
              color: "white",
              padding: "5px 10px",
              borderRadius: "5px"
            }}
          >
            <FaTimes />
          </button>

          <h2 className="mt-3">New Student</h2>
        
          <form 
          onSubmit={edit===null ? createStudent :SaveStudent}
          className="d-flex flex-column gap-3 mt-3">
            <input
            value={form.fullname}
            onChange={handleInput}
             className="form-control" name="fullname" placeholder="Enter your name" />
            <input
            value={form.class}
            onChange={handleInput}
            className="form-control" name="class" placeholder="Enter your branch" />
            <input 
            value={form.reg}
            onChange={handleInput}
            className="form-control" placeholder="Registration no" name="reg" />
            <input 
            value={form.course}
            onChange={handleInput}
            className="form-control" placeholder="Course"name="course" />
            <input 
            value={form.dob}
            onChange={handleInput}
            type="date" className="form-control" name="dob" />
            
            {edit=== null ?
               <button
              style={{
                border: "none",
                background: "#8407BA",
                color: "white",
                padding: "12px",
                borderRadius: "5px"
              }}
            >
              Submit
            </button>
            :
             <button
              style={{
                border: "none",
                background: "deeppink",
                color: "white",
                padding: "12px",
                borderRadius: "5px"
              }}
            >
              Save
            </button>
            }
           

              
          </form>
        </aside>
      </div>

    <Footer/>
    </>
  )
}
export default Apply;
