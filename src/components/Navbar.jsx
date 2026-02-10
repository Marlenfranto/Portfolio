import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import ReactDOM from 'react-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        // Set initial theme
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ];

    const variants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const mobileMenuVariants = {
        closed: { opacity: 0, x: "100%" },
        open: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } },
    };



    return (
        <>
            <motion.nav
                initial="hidden"
                animate="visible"
                variants={variants}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    background: scrolled ? 'var(--nav-bg)' : 'transparent',
                    backdropFilter: scrolled ? 'blur(10px)' : 'none',
                    boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
                    padding: '1rem 2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: 'all 0.3s ease',
                }}
            >
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
                    <a href="#home" style={{ color: 'inherit' }}>M</a>
                </div>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'none', gap: '2rem' }}>
                    <style>{`
              @media (min-width: 768px) {
                .desktop-menu { display: flex !important; }
                .mobile-toggle { display: none !important; }
              }
            `}</style>
                    {navLinks.map((link) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            style={{ color: 'var(--text-color)', fontWeight: 500, position: 'relative' }}
                            className="nav-link"
                            whileHover={{
                                color: 'var(--accent-color)',
                                textShadow: '0 0 8px var(--accent-color)',
                                scale: 1.05
                            }}
                            transition={{ duration: 0.2 }}
                        >
                            {link.name}
                        </motion.a>
                    ))}
                    <motion.button
                        whileHover={{ scale: 1.1, boxShadow: '0 0 15px var(--text-color)' }}
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleTheme}
                        style={{
                            background: 'transparent',
                            border: '1px solid var(--text-color)',
                            color: 'var(--text-color)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '0.5rem',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            marginLeft: '1rem'
                        }}
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <FaSun /> : <FaMoon />}
                    </motion.button>
                </div>

                {/* Mobile Menu Toggle */}
                <motion.button
                    whileHover={{ scale: 1.1, textShadow: '0 0 8px var(--text-color)' }}
                    whileTap={{ scale: 0.9 }}
                    className="mobile-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ background: 'none', border: 'none', fontSize: '1.5rem', color: 'var(--text-color)' }}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </motion.button>
            </motion.nav>

            {/* Mobile Menu Overlay - Portaled to prevent stacking context issues */}
            {ReactDOM.createPortal(
                <AnimatePresence>
                    {isOpen && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsOpen(false)}
                                style={{
                                    position: 'fixed',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                    backdropFilter: 'blur(5px)',
                                    zIndex: 9998,
                                }}
                            />

                            {/* Menu Drawer */}
                            <motion.div
                                initial="closed"
                                animate="open"
                                exit="closed"
                                variants={mobileMenuVariants}
                                style={{
                                    position: 'fixed',
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    width: '75%',
                                    maxWidth: '300px',
                                    backgroundColor: theme === 'dark' ? '#0F172A' : '#F8FAFC',
                                    borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
                                    padding: '2rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '2rem',
                                    boxShadow: '-4px 0 15px rgba(0,0,0,0.5)',
                                    zIndex: 9999,
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        style={{ background: 'none', border: 'none', fontSize: '1.5rem', color: 'var(--text-color)' }}
                                    >
                                        <FaTimes />
                                    </button>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                                    <button
                                        onClick={toggleTheme}
                                        style={{
                                            background: 'transparent',
                                            border: '1px solid var(--text-color)',
                                            color: 'var(--text-color)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            padding: '0.8rem',
                                            borderRadius: '50%',
                                            cursor: 'pointer',
                                            fontSize: '1.5rem'
                                        }}
                                        aria-label="Toggle Theme"
                                    >
                                        {theme === 'dark' ? <FaSun /> : <FaMoon />}
                                    </button>
                                </div>
                                {navLinks.map((link) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        style={{ fontSize: '1.2rem', color: 'var(--text-color)', fontWeight: 500 }}
                                        whileHover={{
                                            color: 'var(--accent-color)',
                                            textShadow: '0 0 10px var(--accent-color)',
                                            x: 10
                                        }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    );
};

export default Navbar;
