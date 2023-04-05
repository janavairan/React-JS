import { counter_increment } from "./action";
import { counter_decrement } from "./action";

var intialstate={
    counter : 0
}

const COUNTER=(state=Object.assign(intialstate,{}),action)=>{
    switch(action.type) {
        case counter_increment:
            return state = {...state , counter : state.counter +1 }
        case counter_decrement:
            return state = {...state , counter : state.counter -1 }
    
    default: 
    return (state)        
   
    }
}

export default COUNTER;






