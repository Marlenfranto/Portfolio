import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { resumeData } from '../data/resume';
import { FaChevronDown, FaGithub, FaLinkedin, FaEnvelope, FaAndroid, FaAppStoreIos, FaGlobe } from 'react-icons/fa';
import { SiFlutter, SiQt } from 'react-icons/si';

const QuoteRotator = () => {
    const quotes = [
        "\"Building digital universes, one line at a time.\"",
        "\"Debugging: The final frontier.\"",
        "\"Code is poetry written in the stars.\"",
        "\"Launching ideas into orbit.\"",
        "\"Exploring the cosmos of logic.\""
    ];

    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % quotes.length);
        }, 600000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ height: '50px', position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <AnimatePresence mode="wait">
                <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        color: 'var(--accent-color)', // Make it pop more
                        fontStyle: 'italic',
                        fontSize: '1rem',
                        fontWeight: 500,
                        margin: 0,
                        position: 'absolute',
                        width: '100%',
                        textAlign: 'center',
                        left: 0,
                        top: 0
                    }}
                >
                    {quotes[index]}
                </motion.p>
            </AnimatePresence>
        </div>
    );
};

const Hero = () => {
    const { name, title, summary, email, profileImage, social } = resumeData.personalInfo;
    const projectCount = "30";
    const experienceYears = "7+";

    return (
        <section
            id="home"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                padding: '6rem 2rem 2rem'
            }}
        >
            {/* Background Gradient */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1, overflow: 'hidden' }}>
                <div style={{
                    position: 'absolute',
                    top: '-20%',
                    right: '-10%',
                    width: '60vw',
                    height: '60vw',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, var(--primary-color) 0%, transparent 60%)',
                    filter: 'blur(100px)',
                    opacity: 0.15
                }} />
                <div style={{
                    position: 'absolute',
                    bottom: '-20%',
                    left: '-10%',
                    width: '60vw',
                    height: '60vw',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, var(--accent-color) 0%, transparent 60%)',
                    filter: 'blur(100px)',
                    opacity: 0.15
                }} />
            </div>

            <div style={{
                maxWidth: '1200px',
                width: '100%',
                display: 'flex',
                flexDirection: 'row', // Default to row for desktop
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '4rem',
                flexWrap: 'wrap-reverse' // Wrap reverse so content stays on top/first on mobile
            }}>

                {/* Text Content - Left Side */}
                <motion.div
                    style={{ flex: '1 1 500px', textAlign: 'left' }}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h2
                        style={{
                            fontSize: '1.1rem',
                            color: 'var(--accent-color)',
                            marginBottom: '1rem',
                            textTransform: 'uppercase',
                            letterSpacing: '3px',
                            fontWeight: 600,
                            display: 'inline-block',
                            borderBottom: '2px solid var(--accent-color)',
                            paddingBottom: '5px'
                        }}
                    >
                        {title}
                    </motion.h2>

                    <h1
                        className="hero-title"
                        style={{
                            fontSize: 'clamp(3rem, 5vw, 4.5rem)', // Responsive font size
                            fontWeight: 800,
                            marginBottom: '1.5rem',
                            background: 'linear-gradient(to right, var(--text-color), var(--text-muted))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            lineHeight: 1.1
                        }}
                    >
                        {name}
                    </h1>

                    <p style={{
                        fontSize: '1.1rem',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.8',
                        marginBottom: '2.5rem',
                        maxWidth: '90%'
                    }}>
                        {summary}
                    </p>

                    {/* Stats */}
                    <div style={{ display: 'flex', gap: '3rem', marginBottom: '3rem' }}>
                        <div>
                            <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--text-color)', margin: 0 }}>{experienceYears}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>Years Experience</p>
                        </div>
                        <div style={{ width: '1px', background: 'var(--border-color)' }}></div>
                        <div>
                            <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--text-color)', margin: 0 }}>{projectCount}+</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>Projects Completed</p>
                        </div>
                    </div>

                    {/* Buttons/Socials */}
                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                        <motion.a
                            href={`mailto:${email}`}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0 0 20px var(--primary-color)',
                                backgroundColor: 'var(--accent-color)'
                            }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                background: 'var(--primary-color)',
                                color: '#fff',
                                padding: '0.8rem 2rem',
                                borderRadius: '50px',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                fontSize: '1rem',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}
                        >
                            <FaEnvelope /> Contact Me
                        </motion.a>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {social && social.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon-link"
                                    whileHover={{
                                        y: -5,
                                        color: 'var(--accent-color)',
                                        borderColor: 'var(--accent-color)',
                                        boxShadow: '0 0 15px var(--accent-color)'
                                    }}
                                    style={{
                                        fontSize: '1.5rem',
                                        color: 'var(--text-color)',
                                        padding: '10px',
                                        border: '1px solid var(--border-color)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '50px',
                                        height: '50px'
                                    }}
                                >
                                    {link.name === 'GitHub' && <FaGithub />}
                                    {link.name === 'LinkedIn' && <FaLinkedin />}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Image Content - Right Side */}
                <motion.div
                    style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >


                    <div style={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: '450px',
                        aspectRatio: '1/1.1',
                        zIndex: 1
                    }}>

                        {/* Ring 1 - Flutter & QT (Clockwise) */}
                        <motion.div
                            style={{
                                position: 'absolute',
                                top: '40%', // Moved up to valid head position
                                left: '50%',
                                width: '110%',
                                aspectRatio: '1/1',
                                borderRadius: '50%',
                                border: '1px dashed rgba(var(--accent-rgb), 0.3)',
                                x: '-50%',
                                y: '-50%',
                                zIndex: 0,
                                opacity: 0.8
                            }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                        >
                            {[
                                { icon: <SiFlutter />, color: '#02569B' },
                                { icon: <SiQt />, color: '#41CD52' }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    style={{
                                        position: 'absolute',
                                        top: index === 0 ? '-20px' : 'auto',
                                        bottom: index === 1 ? '-20px' : 'auto',
                                        left: '50%',
                                        marginLeft: '-20px',
                                        width: '40px',
                                        height: '40px',
                                        background: 'var(--card-bg)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: `2px solid ${item.color}`,
                                        boxShadow: `0 0 10px ${item.color}`,
                                        fontSize: '1.2rem',
                                        color: item.color
                                    }}
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                                >
                                    {item.icon}
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Ring 2 - Android & iOS (Counter-Clockwise) */}
                        <motion.div
                            style={{
                                position: 'absolute',
                                top: '40%', // Moved up
                                left: '50%',
                                width: '130%',
                                aspectRatio: '1/1',
                                borderRadius: '50%',
                                border: '1px dashed rgba(var(--accent-rgb), 0.5)',
                                x: '-50%',
                                y: '-50%',
                                zIndex: 0,
                                opacity: 0.7
                            }}
                            animate={{ rotate: -360 }}
                            transition={{ duration: 25, ease: "linear", repeat: Infinity }}
                        >
                            {[
                                { icon: <FaAndroid />, color: '#3DDC84' },
                                { icon: <FaAppStoreIos />, color: '#007AFF' }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: index === 0 ? '-22px' : 'auto',
                                        right: index === 1 ? '-22px' : 'auto',
                                        marginTop: '-22px',
                                        width: '45px',
                                        height: '45px',
                                        background: 'var(--card-bg)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: `2px solid ${item.color}`,
                                        boxShadow: `0 0 10px ${item.color}`,
                                        fontSize: '1.4rem',
                                        color: item.color
                                    }}
                                    animate={{ rotate: 360 }} // Rotate opposite to parent
                                    transition={{ duration: 25, ease: "linear", repeat: Infinity }}
                                >
                                    {item.icon}
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Ring 3 - Web (Clockwise, Slower) */}
                        <motion.div
                            style={{
                                position: 'absolute',
                                top: '40%', // Moved up
                                left: '50%',
                                width: '150%',
                                aspectRatio: '1/1',
                                borderRadius: '50%',
                                border: '1px dashed rgba(var(--accent-rgb), 0.3)',
                                x: '-50%',
                                y: '-50%',
                                zIndex: 0,
                                opacity: 0.5
                            }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 35, ease: "linear", repeat: Infinity }}
                        >
                            <motion.div
                                style={{
                                    position: 'absolute',
                                    top: '15%',
                                    right: '15%',
                                    width: '35px',
                                    height: '35px',
                                    background: 'var(--card-bg)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '2px solid #4a90e2',
                                    boxShadow: '0 0 10px #4a90e2',
                                    fontSize: '1.2rem',
                                    color: '#4a90e2'
                                }}
                                animate={{ rotate: -360 }}
                                transition={{ duration: 35, ease: "linear", repeat: Infinity }}
                            >
                                <FaGlobe />
                            </motion.div>
                        </motion.div>

                        {/* Image Container */}
                        <div style={{
                            position: 'relative',
                            width: '100%',
                            height: '100%',
                            borderRadius: '30px',
                            overflow: 'hidden',
                            // Removed box styles (shadow, border, background)
                            zIndex: 1,
                            maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', // Fade out bottom
                            WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                        }}>
                            {profileImage ? (
                                <img
                                    src={profileImage}
                                    alt={name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain', // Changed to contain to show full image without cropping if it was relying on the box
                                        objectPosition: 'center bottom' // Anchor to bottom
                                    }}
                                    onError={(e) => { e.target.style.display = 'none'; }}
                                />
                            ) : (
                                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{ fontSize: '5rem', color: 'var(--text-muted)' }}>{name.charAt(0)}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Space Themed Quotes */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        style={{
                            marginTop: '2rem',
                            textAlign: 'center',
                            width: '100%'
                        }}
                    >
                        <QuoteRotator />
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    color: 'var(--text-color)',
                    cursor: 'pointer'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
                onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}
            >
                <FaChevronDown />
            </motion.div>
        </section>
    );
};

export default Hero;
