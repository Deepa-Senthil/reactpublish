import {userDetails}from'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./home";
import About from "./about";

function App() {
    const userDetails = {
        userName: "Deepa",
        userId: 123,
        age: 31,
        gender: "FM",
        location: "India"

    }
    

    return (
        <div>
            <Home userDetails={userDetails} />
            <About userName="Deepa"/>
        </div>
    )
}
export default App