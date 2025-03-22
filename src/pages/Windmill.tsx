import React, { useState , useRef, useEffect} from "react";
import "./Windmill.css";
import { TbWindmillFilled } from "react-icons/tb";
import { motion } from "framer-motion";

const Windmill = (): React.JSX.Element => {
    const [speed, setSpeed] = useState<number>(0);
    const windmillRef = useRef<HTMLElement>(null);
    const animationRef = useRef<number>(null);
    const lastTimeRef = useRef<number>(0);
    const angleRef = useRef<number>(0);

    useEffect(() => {
        const animate = (timestamp: number) => {
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
            if(animationRef.current !== null){
                cancelAnimationFrame(animationRef.current);
            }
            lastTimeRef.current = 0;
        }

        return () => {
            if(animationRef.current !== null){
                cancelAnimationFrame(animationRef.current);
            }
        }
    }, [speed]);

    const increaseSpeed = (): void => {
        if (speed < 5) setSpeed(speed + 1);
    };

    const decreaseSpeed = (): void => {
        if (speed > 0) setSpeed(speed - 1);
    };

    return (
        <motion.div 
            className="windmill-container"
            initial={{ y: 10, opacity: 0}}
            animate={{ y: 0, opacity: 1}}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration : 0.3 }}
            >
            
            <span ref={windmillRef} className="windmillSpan">
                <TbWindmillFilled className="windmill" />
            </span>

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
        </motion.div>
    );
}

export default Windmill;
