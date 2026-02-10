import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { FaCode, FaTools, FaDatabase, FaLayerGroup, FaJava, FaPython, FaPhp, FaHtml5, FaCss3, FaReact, FaGitAlt, FaGithub, FaBitbucket, FaTrello, FaAndroid, FaAppStoreIos, FaDocker, FaAws } from 'react-icons/fa';
import { SiKotlin, SiDart, SiFlutter, SiJavascript, SiMysql, SiPostgresql, SiSqlite, SiOracle, SiDjango, SiQt, SiJson, SiXcode, SiJira, SiClickup, SiFirebase, SiSwift, SiDotnet } from 'react-icons/si';
import { TbBrandCSharp, TbBrandCpp, TbBrandVscode } from 'react-icons/tb';
import { VscJson, VscAzureDevops } from 'react-icons/vsc';

const Skills = () => {
    // Icon Mapping
    const skillIcons = {
        "Java": <FaJava />,
        "Kotlin": <SiKotlin />,
        "Dart": <SiDart />,
        "Python": <FaPython />,
        "C#": <TbBrandCSharp />,
        "C": <FaCode />, // Fallback for C
        "C++": <TbBrandCpp />,
        "PHP": <FaPhp />,
        "JavaScript": <SiJavascript />,
        "SQL": <FaDatabase />, // Generic database icon
        "Flutter": <SiFlutter />,
        "Android SDK": <FaAndroid />,
        "Jetpack": <FaAndroid />, // Using Android icon for Jetpack
        "Swift UI": <SiSwift />,
        "Django": <SiDjango />,
        "QT Framework": <SiQt />,
        "HTML": <FaHtml5 />,
        "CSS": <FaCss3 />,
        "JSON": <SiJson />,
        "XML": <FaCode />, // Generic code icon
        "REST API": <FaLayerGroup />, // Generic layer/server icon
        "SOAP": <FaCode />,
        "Android Studio": <FaAndroid />,
        "VS Code": <TbBrandVscode />,
        "Xcode": <SiXcode />,
        "Git": <FaGitAlt />,
        "GitHub": <FaGithub />,
        "Bitbucket": <FaBitbucket />,
        "Azure DevOps": <VscAzureDevops />,
        "Jira": <SiJira />,
        "Trello": <FaTrello />,
        "ClickUp": <SiClickup />,
        "Firebase": <SiFirebase />,
        "MySQL": <SiMysql />,
        "SQLite": <SiSqlite />,
        "PostgreSQL": <SiPostgresql />,
        "PL/SQL": <SiOracle />
    };

    const categories = [
        { name: 'Languages', icon: <FaCode />, skills: resumeData.skills.languages },
        { name: 'Frameworks', icon: <FaLayerGroup />, skills: resumeData.skills.frameworks },
        { name: 'Web Technologies', icon: <FaCode />, skills: resumeData.skills.web },
        { name: 'Tools & Platforms', icon: <FaTools />, skills: resumeData.skills.tools },
        { name: 'Databases', icon: <FaDatabase />, skills: resumeData.skills.databases },
    ];

    return (
        <section id="skills" style={{ padding: '4rem 1rem', position: 'relative' }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: 'var(--text-color)' }}>
                    Technical <span style={{ color: 'var(--primary-color)' }}>Expertise</span>
                </h2>
            </motion.div>

            <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {categories.map((category, index) => (
                    <motion.div
                        key={category.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{
                            y: -5,
                            boxShadow: '0 0 20px var(--primary-color)',
                            borderColor: 'var(--accent-color)'
                        }}
                        style={{
                            background: 'var(--card-bg)',
                            padding: '1.5rem',
                            borderRadius: '16px',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                            border: '1px solid var(--border-color)'
                        }}
                    >
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-color)' }}>
                            <span style={{ color: 'var(--accent-color)' }}>{category.icon}</span>
                            {category.name}
                        </h3>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                            {category.skills.map((skill, i) => (
                                <motion.span
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (i * 0.05) }}
                                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
                                    style={{
                                        background: 'var(--input-bg)',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '8px',
                                        fontSize: '0.9rem',
                                        color: 'var(--text-secondary)',
                                        border: '1px solid var(--border-color)',
                                        cursor: 'default',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem'
                                    }}
                                >
                                    <span style={{ color: 'var(--accent-color)', fontSize: '1.1rem' }}>
                                        {skillIcons[skill] || <FaCode />} {/* Fallback to code icon */}
                                    </span>
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
