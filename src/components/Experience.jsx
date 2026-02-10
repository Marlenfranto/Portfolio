import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
    return (
        <section id="experience" style={{ padding: '4rem 1rem', position: 'relative' }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
            >
                <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: 'var(--text-color)' }}>
                    Work <span style={{ color: 'var(--primary-color)' }}>Experience</span>
                </h2>
            </motion.div>

            <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
                {/* Timeline Line */}
                <div
                    style={{
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '2px',
                        height: '100%',
                        background: 'var(--border-color)'
                    }}
                    className="timeline-line"
                >
                    <style>{`
            @media (max-width: 768px) {
              .timeline-line { left: 20px !important; }
            }
          `}</style>
                </div>

                {resumeData.experience.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        style={{
                            marginBottom: '3rem',
                            display: 'flex',
                            justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
                            position: 'relative',
                            width: '100%',
                        }}
                        className={`experience-item ${index % 2 === 0 ? 'left' : 'right'}`}
                    >
                        <style>{`
              @media (max-width: 768px) {
                .experience-item { justify-content: flex-start !important; padding-left: 50px; }
              }
            `}</style>

                        {/* Timeline Dot */}
                        <div
                            style={{
                                position: 'absolute',
                                left: '50%',
                                top: '0',
                                transform: 'translate(-50%, -50%)',
                                width: '20px',
                                height: '20px',
                                background: 'var(--primary-color)',
                                borderRadius: '50%',
                                border: '4px solid var(--bg-color)',
                                zIndex: 2,
                                marginTop: '1.5rem', // Align with title generally
                            }}
                            className="timeline-dot"
                        >
                            <style>{`
                @media (max-width: 768px) {
                  .timeline-dot { left: 20px !important; }
                }
              `}</style>
                        </div>

                        <div
                            style={{
                                background: 'var(--card-bg)',
                                padding: '1.5rem',
                                borderRadius: '12px',
                                width: '45%',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                border: '1px solid var(--border-color)',
                                transition: 'transform 0.3s ease, border-color 0.3s ease'
                            }}
                            className="experience-card"
                        >
                            <style>{`
                @media (max-width: 768px) {
                  .experience-card { width: 100% !important; }
                }
                .experience-card:hover { transform: translateY(-5px); border-color: var(--accent-color); box-shadow: 0 0 20px var(--primary-color); }
              `}</style>

                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-color)' }}>{exp.role}</h3>
                            <h4 style={{ fontSize: '1rem', color: 'var(--primary-color)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <FaBriefcase size={14} /> {exp.company}
                            </h4>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><FaCalendarAlt size={12} />{exp.period}</span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><FaMapMarkerAlt size={12} />{exp.location}</span>
                            </div>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                {exp.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
