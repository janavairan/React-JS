import { useState } from "react";
import"./App.css"

const data=[{
    name:"jana",
    age:29,
    mobile:9500899111,
    city:"karur"
},
{
    name:"ram",
    age:27,
    mobile:9976036281,
    city:"chennai"
}]

function App(){
    const [DATA,setdata]=useState(data)
    const [NAME,setname]=useState("")
    const [AGE,setage]=useState("")
    const [MOBILE,setmobile]=useState("")
    const [CITY,setcity]=useState("")

    const submit=()=>{
        const LENGTH=DATA.length
        const newdata=[
            ...DATA.slice(0,LENGTH),
            {
                name:NAME,
                age:AGE,
                mobile:MOBILE,
                city:CITY
            }
        ]
        setdata(newdata)    
    }
    
    return(
        
        <div className="studentinfo">
            <div className="header">
            <h1>STUDENT INFORMATION</h1>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <label>NAME </label>
            <input type="text" placeholder="yours name" value={NAME} onChange={Element=>setname(Element.target.value)} className="name" ></input>
            <br></br>
            <br></br>
            <label>AGE </label>
            <input type="number" placeholder="age" value={AGE}onChange={Element=>setage(Element.target.value)} className="age"></input>
            <br></br>
            <br></br>
            <label>PHONE</label>
            <input type="text" placeholder="mobile" value={MOBILE} onChange={Element=>setmobile(Element.target.value)} className="phone"></input>
            <br></br>
            <br></br>
            <label>CITY </label>
            <input type="text" placeholder="city" value={CITY} onChange={Element=>setcity(Element.target.value)} className="city"></input>
            <br></br>
            <br></br>
            <button onClick={submit} 
            style={{width: "150",
                    height:"39",
                    marginLeft:"79",
                    marginTop:"50"}}>
            SUBMIT
            </button>
            <br></br> 
            <br></br>

            <table className="tabledata">
                <tr>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>MOBILE</th>
                    <th>CITY</th>
                    <th>DELETE</th>

                </tr>
                    {DATA.map((Element,index)=>{
                        return(
                            <tr key={index} >
                            <td className="data_name">{Element.name}</td> 
                            <td className="data_age">{Element.age}</td>
                            <td className="data_mobile">{Element.mobile}</td>
                            <td className="data_city">{Element.city}</td>
                            <td className="data_delete">
                                <button onClick={()=>{setdata(
                                    DATA.filter(
                                      e => e !==  Element))
                                    
                                }}>DELETE</button>
                            </td>
                </tr>
                        )
                    })}
                
            </table>
            
            
            
        </div>
    )
}




export default App;