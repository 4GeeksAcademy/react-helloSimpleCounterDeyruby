import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SecondsCounter from "./secondsCounter";

//create your first component
const Home = (props) => {
    return (
<SecondsCounter cuenta = {props.counter} />
    );
};

export default Home;


