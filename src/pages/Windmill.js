import { useState , useRef, useEffect} from "react";
import "./Windmill.css";
import { TbWindmillFilled } from "react-icons/tb";

function Windmill() {
    const [speed, setSpeed] = useState(0);
    const windmillRef = useRef(null);

    useEffect(() => {
        if (windmillRef.current) {
            if(speed === 0){
                windmillRef.current.style.animationPlayState = "paused";
            } else{
                windmillRef.current.style.animationPlayState = "running";
                windmillRef.current.style.animationDuration = `${6-speed}s`;
            }
        }
    })

    const increaseSpeed = () => {
        if (speed < 5) setSpeed(speed + 1);
    };

    const decreaseSpeed = () => {
        if (speed > 0) setSpeed(speed - 1);
    };

    return (
        <div className="windmill-container">

            <TbWindmillFilled ref={windmillRef} className={`windmill ${speed === 0? "stop" : ""}`} />

            <div className="wind-animation">
                {Array.from({ length: speed }).map((_, i) => (
                    <div key={i} className="wind-particle top" style={{ animationDuration: `${1.5 - speed * 0.2}s` }} />
                ))}
                {Array.from({ length: speed }).map((_, i) => (
                    <div key={i} className="wind-particle middle" style={{ animationDuration: `${2.3 - speed * 0.5}s` }} />
                ))}
                {Array.from({ length: speed }).map((_, i) => (
                    <div key={i} className="wind-particle bottom" style={{ animationDuration: `${1.5 - speed * 0.2}s` }} />
                ))}
            </div>

            <div className="controls">
                <p className="icon" onClick={decreaseSpeed}>🔻 </p>            
                <p className="speed-display">{speed}</p>
                <p className="icon" onClick={increaseSpeed}>🔺 </p>
            </div>
        </div>
    );
}

export default Windmill;
