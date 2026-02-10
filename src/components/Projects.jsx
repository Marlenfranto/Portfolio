import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { resumeData } from '../data/resume';
import { FaGooglePlay, FaAppStore, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';
import appStoreLogo from '../assets/appstore.png';
import playStoreLogo from '../assets/playstore.webp';

const Projects = () => {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <section id="projects" style={{ padding: '4rem 1rem', position: 'relative' }}>
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: 'var(--text-color)' }}
            >
                Featured <span style={{ color: 'var(--accent-color)' }}>Projects</span>
            </motion.h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {resumeData.projects.map((project, index) => (
                    <motion.div
                        layoutId={project.name} // Key for shared layout animation
                        key={project.name}
                        onClick={() => setSelectedId(project.name)}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{
                            y: -10,
                            boxShadow: '0 0 25px var(--primary-color)',
                            borderColor: 'var(--accent-color)'
                        }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            background: 'var(--card-bg)',
                            borderRadius: '16px',
                            padding: '1.5rem',
                            cursor: 'pointer',
                            border: '1px solid var(--border-color)',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            minHeight: '250px'
                        }}
                    >
                        <div>
                            <motion.h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-color)' }}>{project.name}</motion.h3>
                            {project.image ? (
                                <div style={{ marginBottom: '1rem', borderRadius: '12px', overflow: 'hidden', height: '160px' }}>
                                    <img src={project.image} alt={project.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                            ) : (
                                <div style={{ marginBottom: '1rem', borderRadius: '12px', background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))', height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.8 }}>
                                    <span style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>{project.name.charAt(0)}</span>
                                </div>
                            )}
                            <motion.p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '1rem' }}>
                                {project.description.slice(0, 100)}...
                            </motion.p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                                {project.techStack.slice(0, 3).map(tech => (
                                    <span key={tech} style={{
                                        background: 'rgba(59, 130, 246, 0.1)',
                                        color: 'var(--primary-color)',
                                        padding: '0.2rem 0.6rem',
                                        borderRadius: '20px',
                                        fontSize: '0.8rem'
                                    }}>
                                        {tech}
                                    </span>
                                ))}
                                {project.techStack.length > 3 && (
                                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', alignSelf: 'center' }}>+{project.techStack.length - 3} more</span>
                                )}
                            </div>
                        </div>
                        <div style={{ color: 'var(--accent-color)', fontSize: '0.9rem', fontWeight: 500 }}>
                            View Details &rarr;
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedId && (
                    <div style={{
                        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                        zIndex: 1002, display: 'flex', justifyContent: 'center', alignItems: 'center',
                        pointerEvents: 'none' // Allow click through on overlay backdrop if needed, but usually we block
                    }}>

                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                            style={{
                                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                                background: 'rgba(0,0,0,0.8)',
                                backdropFilter: 'blur(5px)',
                                pointerEvents: 'auto'
                            }}
                        />

                        {/* Modal Card */}
                        {resumeData.projects.map(project => (
                            project.name === selectedId && (
                                <motion.div
                                    layoutId={selectedId}
                                    key={project.name}
                                    style={{
                                        background: 'var(--card-bg)',
                                        padding: '2rem',
                                        borderRadius: '20px',
                                        width: '90%',
                                        maxWidth: '800px',
                                        maxHeight: '85vh',
                                        overflowY: 'auto',
                                        position: 'relative',
                                        pointerEvents: 'auto',
                                        border: '1px solid rgba(var(--accent-rgb), 0.2)', // Subtle accent border
                                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)' // Deeper shadow
                                    }}
                                >
                                    <button
                                        onClick={() => setSelectedId(null)}
                                        style={{
                                            position: 'absolute',
                                            top: '1.5rem',
                                            right: '1.5rem',
                                            background: 'transparent',
                                            border: 'none',
                                            padding: 0,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'var(--text-muted)', // Default muted color
                                            fontSize: '1.8rem', // Slightly larger for easier clicking
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            zIndex: 20
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.color = '#ef4444'; // Red on hover
                                            e.currentTarget.style.transform = 'rotate(90deg) scale(1.1)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.color = 'var(--text-muted)';
                                            e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
                                        }}
                                    >
                                        <FaTimes />
                                    </button>

                                    <motion.h3 style={{
                                        fontSize: '2rem',
                                        marginBottom: '1rem',
                                        color: 'var(--text-color)',
                                        paddingRight: '60px' // Prevent overlap with close button
                                    }}>
                                        {project.name}
                                    </motion.h3>

                                    {project.image && (
                                        <div style={{ marginBottom: '1.5rem', borderRadius: '16px', overflow: 'hidden', maxHeight: '300px' }}>
                                            <img src={project.image} alt={project.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                    )}

                                    <motion.p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                                        {project.description}
                                    </motion.p>

                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <h4 style={{ color: 'var(--text-muted)', marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Technologies</h4>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                            {project.techStack.map(tech => (
                                                <span key={tech} style={{
                                                    background: 'rgba(236, 72, 153, 0.1)',
                                                    color: 'var(--accent-color)',
                                                    padding: '0.4rem 0.8rem',
                                                    borderRadius: '6px',
                                                    fontSize: '0.9rem',
                                                    border: '1px solid rgba(236, 72, 153, 0.2)'
                                                }}>
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {project.responsibilities && project.responsibilities.length > 0 && (
                                        <div style={{ marginBottom: '1.5rem' }}>
                                            <h4 style={{ color: 'var(--text-muted)', marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Key Responsibilities</h4>
                                            <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                                {project.responsibilities.map((item, i) => (
                                                    <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {project.links.length > 0 && (
                                        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                                            {project.links.map(link => {
                                                const isPlayStore = link.label.toLowerCase().includes('play store');
                                                const isAppStore = link.label.toLowerCase().includes('app store');

                                                if (isPlayStore || isAppStore) {
                                                    return (
                                                        <a
                                                            key={link.label}
                                                            href={link.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            style={{
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: '0.8rem',
                                                                padding: '0.5rem 1.2rem',
                                                                background: 'rgba(255,255,255,0.05)',
                                                                border: '1px solid rgba(255,255,255,0.1)',
                                                                borderRadius: '12px',
                                                                textDecoration: 'none',
                                                                color: 'var(--text-color)',
                                                                transition: 'all 0.3s ease',
                                                            }}
                                                            onMouseEnter={(e) => {
                                                                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                                                                e.currentTarget.style.borderColor = 'var(--text-color)';
                                                                e.currentTarget.style.transform = 'translateY(-2px)';
                                                            }}
                                                            onMouseLeave={(e) => {
                                                                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                                                                e.currentTarget.style.transform = 'translateY(0)';
                                                            }}
                                                        >
                                                            <div style={{ fontSize: '1.8rem' }}>
                                                                {isPlayStore ? <FaGooglePlay /> : <FaAppStore />}
                                                            </div>
                                                            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2' }}>
                                                                <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', opacity: 0.8 }}>
                                                                    {isPlayStore ? 'GET IT ON' : 'Download on the'}
                                                                </span>
                                                                <span style={{ fontSize: '1rem', fontWeight: 'bold' }}>
                                                                    {isPlayStore ? 'Google Play' : 'App Store'}
                                                                </span>
                                                            </div>
                                                        </a>
                                                    );
                                                }

                                                return (
                                                    <a
                                                        key={link.label}
                                                        href={link.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        style={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '0.5rem',
                                                            background: 'var(--primary-color)',
                                                            color: '#fff',
                                                            padding: '0.6rem 1.2rem',
                                                            borderRadius: '8px',
                                                            fontSize: '1rem',
                                                            fontWeight: 500,
                                                            textDecoration: 'none',
                                                            transition: 'background 0.3s'
                                                        }}
                                                        onMouseEnter={(e) => e.currentTarget.style.background = 'var(--accent-color)'}
                                                        onMouseLeave={(e) => e.currentTarget.style.background = 'var(--primary-color)'}
                                                    >
                                                        <FaExternalLinkAlt />
                                                        {link.label}
                                                    </a>
                                                );
                                            })}
                                        </div>
                                    )}

                                </motion.div>
                            )
                        ))}
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
