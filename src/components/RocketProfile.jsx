import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { FaRocket } from 'react-icons/fa';

const RocketProfile = () => {
    const { scrollYProgress, scrollY } = useScroll();
    const [isFlyingHome, setIsFlyingHome] = useState(false);
    const [isLandable, setIsLandable] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [direction, setDirection] = useState(1); // 1 = down, -1 = up

    // Y: Starts at MFB level (approx 20px), moves down to bottom (88vh)
    const y = useTransform(scrollYProgress, [0, 1], ['20px', '88vh']);

    // X: Moves from Left (MFB) to Right (Bottom-Right)
    const x = useTransform(scrollYProgress, [0, 1], ['40px', '90vw']);

    // Rotation Mappings:
    // Moving Down (Forward): Top-Left to Bottom-Right. 
    // Angle ~ 90deg (or 135deg visually). Let's keep existing 90 -> -45 logic for down.
    const rotateDown = useTransform(scrollYProgress,
        [0, 0.8, 1],
        [90, 90, -45]
    );

    // Moving Up (Backward): Bottom-Right to Top-Left.
    // Angle should point Top-Left. 
    // FaRocket(45deg) -> Top-Left(315deg aka -45deg).
    // So if FaRocket is 45, to get -45 we need -90 rotation.
    // Let's try -90 constant for Up direction.
    const rotateUp = -90;

    // Monitor scroll direction
    useMotionValueEvent(scrollY, "change", (latest) => {
        const diff = latest - lastScrollY;
        if (Math.abs(diff) > 5) { // Threshold to avoid jitter
            setDirection(diff > 0 ? 1 : -1);
        }
        setLastScrollY(latest);

        // Reset home flight
        if (latest < 50 && isFlyingHome) {
            setIsFlyingHome(false);
        }
    });

    // Monitor landability
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setIsLandable(latest > 0.9);
    });

    const handleRocketClick = () => {
        if (isLandable) {
            setIsFlyingHome(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    // Determine final rotation
    // Priority: isFlyingHome (-45) > Direction Up (-90) > Direction Down (Mapped)
    // Note: When isFlyingHome is true, we are technically scrolling up, so direction would be -1.
    // But isFlyingHome logic overrides everything.

    let currentRotate;
    if (isFlyingHome) {
        currentRotate = -45; // Nose Up for return flight
    } else if (direction === -1) {
        currentRotate = -90; // Nose Top-Left for scrolling up
    } else {
        currentRotate = rotateDown; // Nose Down-Right for scrolling down
    }

    return (
        <motion.div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: isLandable ? 999 : 0, // Boost zIndex when landable to ensure clickability
                pointerEvents: 'none',
                x: isFlyingHome ? '90vw' : x,
                y,
                rotate: currentRotate
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }} // Fast transition for rotation changes
        >
            <div
                onClick={handleRocketClick}
                style={{
                    fontSize: '3rem',
                    color: 'var(--accent-color)',
                    filter: `drop-shadow(0 0 ${isLandable ? '20px' : '10px'} rgba(236, 72, 153, ${isLandable ? 0.8 : 0.6}))`,
                    position: 'relative',
                    display: 'inline-block',
                    cursor: isLandable ? 'pointer' : 'default',
                    pointerEvents: isLandable ? 'auto' : 'none',
                    transition: 'filter 0.3s ease'
                }}>
                <FaRocket />

                <motion.div
                    animate={{
                        scale: isFlyingHome ? [1.5, 2, 1.5] : [1, 1.5, 1],
                        opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                        duration: 0.2,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                    style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '0',
                        transform: 'translate(-25%, 25%) rotate(225deg)',
                        width: '10px',
                        height: '20px',
                        background: 'linear-gradient(to bottom, #f59e0b, #ef4444)',
                        borderRadius: '50%',
                        filter: 'blur(3px)',
                        zIndex: -2
                    }}
                />
            </div>
        </motion.div>
    );
};

export default RocketProfile;
