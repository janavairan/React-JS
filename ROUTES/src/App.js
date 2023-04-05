import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from"./home"
import About from "./about"
import Career from "./career"
import Notfound from "./notfound"

function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/career" element={<Career/>}></Route>
        <Route path="/*" element={<Notfound/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;