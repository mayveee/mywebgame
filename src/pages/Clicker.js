import { useState } from "react";
import "./Clicker.css";
import { RiResetLeftLine } from "react-icons/ri";
import { motion } from "framer-motion";


function Clicker() {
    const [count, setCount] = useState(100);
    const [isShaking, setIsShaking] = useState(false);
    const [target, setTarget] = useState('🥚');
    const [showFirework, setShowFirework] = useState(false);
    const [isGameFinished, setIsGameFinished] = useState(false);

    const decreaseCount = () => {
        setCount((prevCount) => {
            if (prevCount === 1) {
                setTarget('🐤');
                setShowFirework(true);
                setIsGameFinished(true);
                setTimeout(() => setShowFirework(false), 4000);
            }
            return prevCount - 1;
        });
        setIsShaking(true);
        setTimeout(() => { setIsShaking(false); }, 200);
    };

    const resetGame = () => {
        setTarget('🥚');
        setCount(100);
        setShowFirework(false);
        setIsGameFinished(false);
    }

    return (
      <motion.div 
        className="clicker-container"
        initial={{ y: 10, opacity: 0}}
        animate={{ y: 0, opacity: 1}}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration : 0.3 }}
        >

        {showFirework && (
            <>
                <div className="firework firework-left">🎆</div>
                <div className="firework firework-right">🎆</div>
            </>

        )}

        <p 
            onClick={count===0? null : decreaseCount}
            className={`emoji ${isShaking? "shake" : ""}`}
            > 
            {target}
        </p>

        <p className="count-text">
            {count}
        </p>

        { isGameFinished && (
            <div className="popup">
                <motion.div 
                    className="popup-content"
                    initial={{ opacity: 0, scale: 1, y : 100}}
                    animate={{ opacity: 1, scale: 1, y : 0 }}
                    transition={{ delay: 1, duration: 0.5}}
                >
                    <p></p>
                    <RiResetLeftLine className="popup-resetIcon" onClick={resetGame}></RiResetLeftLine>
                </motion.div>
            </div>
        )}

      </motion.div>
    );
}

export default Clicker;