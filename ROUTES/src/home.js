import { Link } from "react-router-dom";

function Home() {
return(
    <div>
        <h1>THIS IS HOME </h1>
        <h2>welcome home </h2>
        <Link to={"/about"}>ABOUT</Link>
        <br></br>
        <Link to={"/career"}>CARRER</Link>
        <br></br>
        
    </div>
    
     
)
}
export default Home;