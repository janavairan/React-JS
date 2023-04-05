import { useState } from "react";

const data=[{
  name:"jana",
  age:25
},
{
  name:"ram",
  age:23
}]

function App(){

  const [Data,setdata]=useState(data)
  const [Name,setname]=useState("")
  const [Age,setage]=useState("")

  const submit=()=>{
    const length=Data.length
    const newdata=[
      ...Data.slice(0,length),
      {
        name:Name,
        age:Age
      }
    ]
    setdata(newdata)

    // var dataaaa=[...Data,Data.push(
    //   {
    //     name:Name,
    //     age:Age
    //   }
    // )]
    // setdata(dataaaa)
  }


  return(
    <div>
      <label>name</label>
      <input type="text" 
      placeholder="name"
      value={Name}
      onChange={E=>setname(E.target.value)}></input>
      <label>age</label>
      <input type="number" 
      placeholder="age"
      value={Age}
      onChange={E=>setage(E.target.value)}></input>
      <button onClick={submit} >submit</button>

      <table>
        <tr>
          <th>NAME</th>
          <th>AGE</th>
        </tr>
        {Data.map((Element,index)=>{
          return(
            <tr key={index}>
              <td>{Element.name}</td>
              <td>{Element.age}</td>
              <td><button
              onClick={()=>{setdata(
      Data.filter(
        E=> E !==Element)
    )}}>DELETE</button></td>
   
            </tr>
          )
        })}
      
      </table>

    </div>
  )
}




export default App;


