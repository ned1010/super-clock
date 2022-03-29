import React, { useState } from "react";
import Background from "../backgroundImg";


function App() {

    const now = new Date().toLocaleTimeString();
    const [time, setTime] = useState(now);

    const [isMouseOver, setMouseOver] = useState(false);
    const [backgroundImg, setBackgroundImage] = useState({
        backgroundImage: `url('${Background[6].urls["full"]}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    })

    function timer() {
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime)
    }
    setInterval(timer, 1000);


    function mouseOverHandle(){
        setMouseOver(true)
    }
    function mouseOutHandle(){
        setMouseOver(false)
    }

    function clickHandle(){
        const randomIndex = Math.floor(Math.random()*Background.length);
        const newImage = `url('${Background[randomIndex].urls["full"]}')`;
        setBackgroundImage({
            backgroundImage: newImage,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        });
    }

    return (
        <div className="container" style={backgroundImg}>
                <h1>{time}</h1>

                {/* use a style hover styling with hooks */}
                <button 
                className="center"
                onClick = {clickHandle}
                onMouseOver={mouseOverHandle} 
                onMouseOut = {mouseOutHandle}
                class="button-34" 
                role="button" 
                style={{backgroundColor: isMouseOver ?"green":"#5E5DF0"}}>Change Background
                </button>
        </div>
    )
}

export default App;

