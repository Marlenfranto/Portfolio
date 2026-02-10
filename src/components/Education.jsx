import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { FaGraduationCap, FaCalendarAlt, FaUniversity } from 'react-icons/fa';

const Education = () => {
    return (
        <section id="education" style={{ padding: '4rem 1rem', position: 'relative' }}>
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: 'var(--text-color)' }}
            >
                My <span style={{ color: 'var(--accent-color)' }}>Education</span>
            </motion.h2>

            <div style={{
                maxWidth: '1000px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem'
            }}>
                {resumeData.education.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                        whileHover={{
                            y: -5,
                            boxShadow: '0 0 20px var(--primary-color)',
                            borderColor: 'var(--accent-color)'
                        }}
                        style={{
                            background: 'var(--card-bg)',
                            padding: '2rem',
                            borderRadius: '16px',
                            border: '1px solid var(--border-color)',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Decorative Icon Background */}
                        <div style={{
                            position: 'absolute',
                            top: '-10px',
                            right: '-10px',
                            fontSize: '8rem',
                            opacity: 0.05,
                            color: 'var(--text-color)',
                            transform: 'rotate(15deg)'
                        }}>
                            <FaGraduationCap />
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                            <div style={{
                                background: 'rgba(56, 189, 248, 0.1)',
                                color: 'var(--accent-color)',
                                padding: '0.8rem',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <FaGraduationCap size={24} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-color)', margin: 0 }}>{edu.degree}</h3>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingLeft: '4rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '1.1rem', fontWeight: 500 }}>
                                <FaUniversity size={16} />
                                <span>{edu.institution}</span>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                <FaCalendarAlt size={14} />
                                <span>{edu.period}</span>
                            </div>

                            {edu.details && (
                                <div style={{
                                    marginTop: '1rem',
                                    display: 'inline-block',
                                    background: 'var(--input-bg)',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '8px',
                                    alignSelf: 'flex-start',
                                    color: 'var(--text-secondary)',
                                    fontSize: '0.9rem',
                                    fontWeight: 500
                                }}>
                                    <span style={{ color: 'var(--accent-color)' }}>Grade:</span> {edu.details}
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;
