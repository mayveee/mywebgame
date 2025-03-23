import React, { useEffect, useState } from 'react';
import './palette.css';

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
        const radius = 120;
        const distance = 1.8;
        const x = Math.cos(angleRad) * radius * distance;
        const y = Math.sin(angleRad) * radius * distance;

        return (
            <div
            key={i}
            className={`sub-circle ${isOpen ? 'visible' : ''} ${i === animationIndex ? 'expanding' : ''}`}
            onClick={() => {changeColor(i)}}
            style={{
                transform: isOpen
                ? `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                : 'translate(-50%, -50%)',
                backgroundColor: animationIndex === i && animationColor
                ? animationColor
                : colors[i],
            }}
            />
        );
    });

    return (
        <div className="palette-container" style={{ backgroundColor : bgColor }}>
            {subCircles}
            <div 
            className="circle" 
            onClick={animationIndex === null? togglePalette : undefined} 
            style={{ backgroundColor : centerColor }}/>
        </div>
    );
};

export default Palette;
