//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let contador = 0;
setInterval( () =>{
    contador = contador + 1
    console.log(contador)
    ReactDOM.render(<Home counter= {contador} />, document.querySelector("#app"));

}, 1000)

