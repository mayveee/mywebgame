import React, { useEffect, useState } from 'react';
import './palette.css';
import { motion } from "framer-motion";

const Palette = () : React.JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [bgColor, setBgcolor] = useState<string>('#a0c4ff');
    const [centerColor, setCenterColor] = useState<string>('#a0c4ff');
    const [colors, setColors] = useState<string[]>(['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#bdb2ff', '#ffc6ff']);
    const [animationIndex, setAnimationIndex] = useState<number | null>(null);
    const [animationColor, setAnimationColor] = useState<string | null>(null);

    const togglePalette = (): void => {
        setIsOpen((prev) => !prev);
    };

    const changeColor = (index: number) => {       
        const newColors = [...colors];
        const clickedColor = newColors[index];
        newColors[index] = centerColor;
        setAnimationIndex(index);
        setCenterColor(clickedColor);
        setAnimationColor(clickedColor);
        
        setColors(newColors);
                
        togglePalette();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if(animationIndex !== null){
            
            const timer = setTimeout(() => {
                if(animationColor !== null){
                    setBgcolor(animationColor);
                }
                setAnimationIndex(null);
                setAnimationColor(null);
            }, 800);

            return () => clearTimeout(timer);
        }
    }, [animationIndex]);

    const subCircles = Array.from({ length: 6 }, (_, i) => {
        const angleDeg = i * 60;
        const angleRad = (angleDeg * Math.PI) / 180;
        const distance = 17;
        const x = Math.cos(angleRad) * distance;
        const y = Math.sin(angleRad) * distance;

        return (
            <div
            key={i}
            className={`sub-circle ${isOpen ? 'visible' : ''} ${i === animationIndex ? 'expanding' : ''}`}
            onClick={animationIndex === null? () => changeColor(i) : undefined}
            style={{
                transform: isOpen
                ? `translate(calc(-50% + ${x}vw), calc(-50% + ${y}vw))`
                : 'translate(-50%, -50%)',
                backgroundColor: animationIndex === i && animationColor
                ? animationColor
                : colors[i],
            }}
            />
        );
    });

    return (
        <motion.div 
         className="palette-container"
         style={{ backgroundColor : bgColor}}
         initial={{ opacity: 0}}
         animate={{ opacity: 1}}
         exit={{ opacity: 0 }}
         transition={{ duration : 0.5 }}   
        >
            {subCircles}
            <div 
            className="circle" 
            onClick={animationIndex === null? togglePalette : undefined} 
            style={{ backgroundColor : centerColor }}/>
        </motion.div>
    );
};

export default Palette;
