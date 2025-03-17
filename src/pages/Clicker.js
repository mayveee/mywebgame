import { useState } from "react";
import "./Clicker.css";

function Clicker() {
    const [count, setCount] = useState(100);
    const [isShaking, setIsShaking] = useState(false);
    const [target, setTarget] = useState('🥚');
    const [showFirework, setShowFirework] = useState(false);

    const decreaseCount = () => {
        setCount((prevCount) => {
            if (prevCount === 1) {
                setTarget('🐤');
                setShowFirework(true);
                setTimeout(() => setShowFirework(false), 4000);
            }
            return prevCount - 1;
        });
        setIsShaking(true);
        setTimeout(() => { setIsShaking(false); }, 200);
    };

    return (
      <div className="clicker-container">

        {showFirework && <div className="fireworks">🎆🎆🎆</div>}

        <p 
            onClick={count===0? null : decreaseCount}
            className={`emoji ${isShaking? "shake" : ""}`}
            > 
            {target}
        </p>
        <p className="count-text">
            {count}
        </p>
      </div>
    );
}

export default Clicker;