import { useState , useRef, useEffect} from "react";
import "./Windmill.css";
import { TbWindmillFilled } from "react-icons/tb";

function Windmill() {
    const [speed, setSpeed] = useState(0);
    const windmillRef = useRef(null);
    const animationRef = useRef(null);
    const lastTimeRef = useRef(0);
    const angleRef = useRef(0);

    useEffect(() => {
        const animate = (timestamp) => {
            if (!lastTimeRef.current) {
                lastTimeRef.current = timestamp;
            }
            const deltaTime = (timestamp - lastTimeRef.current) / 1000;
            lastTimeRef.current = timestamp;

            const rotationSpeed = speed * 100;
            angleRef.current += rotationSpeed * deltaTime;
            angleRef.current %= 360;
            console.log(angleRef.current);
            if (windmillRef.current) {
                windmillRef.current.style.transform = `rotate(${angleRef.current}deg)`;
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        if (speed > 0) {
            animationRef.current = requestAnimationFrame(animate);
        } else {
            cancelAnimationFrame(animationRef.current);
            lastTimeRef.current = 0;
        }

        return () => cancelAnimationFrame(animationRef.current);
    }, [speed]);

    const increaseSpeed = () => {
        if (speed < 5) setSpeed(speed + 1);
    };

    const decreaseSpeed = () => {
        if (speed > 0) setSpeed(speed - 1);
    };

    return (
        <div className="windmill-container">

            <TbWindmillFilled ref={windmillRef} className="windmill" />

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
