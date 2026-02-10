import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState("default");

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });

            // simple check for hovering over clickable elements
            const target = e.target;
            const isClickable =
                window.getComputedStyle(target).cursor === 'pointer' ||
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button');

            setCursorVariant(isClickable ? "text" : "default");
        }

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        }
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            backgroundColor: "transparent",
            border: "2px solid var(--primary-color)",
            height: 32,
            width: 32,
            transition: {
                type: "spring",
                mass: 0.6
            }
        },
        text: {
            height: 60,
            width: 60,
            x: mousePosition.x - 30,
            y: mousePosition.y - 30,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            border: "2px solid var(--accent-color)",
            mixBlendMode: "difference",
            transition: {
                type: "spring",
                mass: 0.6
            }
        }
    }

    const dotVariants = {
        default: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            backgroundColor: "var(--accent-color)",
            height: 8,
            width: 8
        },
        text: {
            height: 0,
            width: 0,
            x: mousePosition.x,
            y: mousePosition.y,
            backgroundColor: "var(--accent-color)"
        }
    }

    return (
        <>
            <motion.div
                className='cursor-dot'
                variants={dotVariants}
                animate={cursorVariant}
                transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 10001, // Increased to be above mobile menu (9999)
                    boxShadow: '0 0 10px var(--accent-color)'
                }}
            />
            <motion.div
                className='cursor-ring'
                variants={variants}
                animate={cursorVariant}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 10000, // Increased to be above mobile menu
                }}
            />
            <style>{`
                * {
                    cursor: none !important;
                }
                /* Exclude iframes or specific elements if needed */
            `}</style>
        </>
    );
};

export default CustomCursor;
