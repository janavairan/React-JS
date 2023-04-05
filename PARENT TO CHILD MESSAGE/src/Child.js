import { useState } from "react";



function Child(props){

    const [child,setchild]=useState("")
    
   
    const submit = (e) =>{
        props.childdata(child)
        setchild("")
        
    }    
    return(
        <div>
            <h1>child</h1>
            {props.Mgs.map((element,index)=>{
          return(
            <p key={index}>{element}</p>
          )

         })}
            <input type="text" placeholder="child message" onChange={(e)=>{setchild(e.target.value)}}></input>
            <button onClick={submit}>submit</button>
        </div>
    )

}

export default Child;













