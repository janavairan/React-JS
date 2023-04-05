import { useDispatch,useSelector } from "react-redux";
import { counter_increment,counter_decrement } from "./action";



function App() {

  const Dispatch=useDispatch()
  const count=useSelector(countttt=>countttt.update)

  const increment=()=>{
    Dispatch({type:counter_increment})
  }
  const decrement=()=>{
    Dispatch({type:counter_decrement})
  }

  return(
    <div>
      <h1> CART COUNT:{count.counter}</h1>
      <button onClick={increment}>add +1</button>

      <button onClick={decrement}>sub -1</button>


  </div>
   )
}


export default App;