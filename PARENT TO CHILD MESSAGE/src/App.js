
import Child from "./Child"
import { useState } from "react";

function App(){  
  const [parentmgs,setparentmgs]=useState([])  
  const [parentMGS,setparentMGS]=useState([])
  const [parent,setparent]=useState("")
  
  const data = (eee) =>{
    setparentmgs([...parentmgs,eee])

  }
  const Submit=()=>{
    setparentMGS([...parentMGS,parent])
    setparent("")
    }

  return(
     <div>
         <h1>hello world</h1>
         <h1>parent</h1>
         {parentmgs.map((element,index)=>{
          return(
            <p key={index}>{element}</p>
          )

         })}
         <input type="text" placeholder="parent message" onChange={(e)=>{setparent(e.target.value)}}></input>
         <button onClick={Submit}>submit</button>

         <Child childdata={data} Mgs={parentMGS}></Child>

    
     </div>
  )
}






export default App