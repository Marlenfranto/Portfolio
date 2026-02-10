import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { FaPaperPlane, FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all fields');
            return;
        }

        setStatus('sending');

        // Check if env vars are set
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey || serviceId === 'your_service_id_here') {
            alert('EmailJS is not configured. Please set your credentials in the .env file.');
            setStatus('');
            return;
        }

        import('@emailjs/browser').then(({ default: emailjs }) => {
            emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: `${formData.name} (${formData.email})`,
                    from_email: formData.email,
                    message: formData.message,
                    to_name: resumeData.personalInfo.name,
                    // Add standard fields that templates might expect
                    name: `${formData.name} (${formData.email})`,       // Maps to {{name}}
                    title: "Portfolio Contact", // Maps to {{title}}
                },
                publicKey
            )
                .then(() => {
                    setStatus('sent');
                    setFormData({ name: '', email: '', message: '' });
                    setTimeout(() => setStatus(''), 5000);
                })
                .catch((error) => {
                    console.error('EmailJS Error:', error);
                    setStatus('error');
                    alert('Failed to send message. Please try again later.');
                });
        });
    };

    return (
        <section id="contact" style={{ padding: '6rem 1rem', position: 'relative' }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ maxWidth: '1000px', margin: '0 auto' }}
            >
                <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem', color: 'var(--text-color)' }}>
                    Get In <span style={{ color: 'var(--accent-color)' }}>Touch</span>
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

                    {/* Contact Info */}
                    <div>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem', color: 'var(--text-color)' }}>Let's Talk</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
                            I'm open to new opportunities and collaborations. Feel free to reach out if you have a project in mind or just want to connect.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--primary-color)' }}>
                                    <FaEnvelope />
                                </div>
                                <span>{resumeData.personalInfo.email}</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(236, 72, 153, 0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--accent-color)' }}>
                                    <FaPhone />
                                </div>
                                <span>{resumeData.personalInfo.phone}</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--primary-color)' }}>
                                    <FaMapMarkerAlt />
                                </div>
                                <span>{resumeData.personalInfo.location}</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                style={{
                                    flex: 1,
                                    padding: '1rem',
                                    background: 'var(--input-bg)',
                                    border: '1px solid var(--border-color)',
                                    borderRadius: '8px',
                                    color: 'var(--text-color)',
                                    outline: 'none',
                                    fontSize: '1rem'
                                }}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={{
                                    flex: 1,
                                    padding: '1rem',
                                    background: 'var(--input-bg)',
                                    border: '1px solid var(--border-color)',
                                    borderRadius: '8px',
                                    color: 'var(--text-color)',
                                    outline: 'none',
                                    fontSize: '1rem'
                                }}
                            />
                        </div>
                        <textarea
                            name="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            style={{
                                width: '100%',
                                padding: '1rem',
                                background: 'var(--input-bg)',
                                border: '1px solid var(--border-color)',
                                borderRadius: '8px',
                                color: 'var(--text-color)',
                                outline: 'none',
                                fontSize: '1rem',
                                resize: 'vertical'
                            }}
                        />
                        <motion.button
                            whileHover={{
                                scale: 1.02,
                                boxShadow: '0 0 20px var(--primary-color)'
                            }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            style={{
                                background: 'var(--primary-color)',
                                color: '#fff',
                                padding: '1rem',
                                borderRadius: '8px',
                                border: 'none',
                                fontSize: '1rem',
                                fontWeight: 600,
                                cursor: 'pointer',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '0.5rem',
                                marginTop: '1rem'
                            }}
                        >
                            {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent!' : (
                                <>Send Message <FaPaperPlane size={14} /></>
                            )}
                        </motion.button>
                    </form>

                </div>

                <div style={{ marginTop: '5rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    <p>&copy; {new Date().getFullYear()} {resumeData.personalInfo.name}. All rights reserved.</p>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
