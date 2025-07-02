// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
    const [animateBall, setAnimateBall] = useState(false);

    useEffect(() => {
        if (animateBall) {
            const timer = setTimeout(() => setAnimateBall(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [animateBall]);

    return (
        <header className="w-full h-[25vw] relative">
            {/* Logo fixed in top-left */}
            <div className="absolute top-[2vw] left-[2vw] p-[1vw]">
                <img
                    src="/logo.png"
                    alt="Golf Swing Logo"
                    className="h-[10vw] w-[10vw]"
                    onMouseEnter={() => setAnimateBall(true)}
                />
                {animateBall && (
                    <div
                        className="absolute bottom-[1vw] left-[6vw] w-[1.5vw] h-[1.5vw]"
                        style={{
                            animation: 'rollBall 4s linear forwards'
                        }}
                    >
                        <img
                            src="/golfball.png"
                            alt="Golf Ball"
                            className="w-full h-full"
                        />
                    </div>
                )}
            </div>
            {animateBall && (
                <div className="absolute top-[2.3vw] left-[93.25vw] w-[5vw] h-[10vw]">
                    <img
                        src="/flag.png"
                        alt="Flag"
                        className="w-full h-full"
                    />
                </div>
            )}
            {/* Centered headline */}
        </header>
    );
}

export default Header;
