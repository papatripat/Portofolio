import { motion } from 'framer-motion'
import './About.css'

const About = () => {
    const stats = [
        { number: '20+', label: 'Projects Done' },
        { number: '15+', label: 'Happy Clients' },
        { number: '2+', label: 'Years Exp.' },
    ]

    return (
        <section className="about" id="about">
            <div className="container">
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    About Me
                </motion.div>
                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Get to know me better — my journey, passion, and what drives me
                </motion.p>

                <div className="about-grid">
                    <motion.div
                        className="about-image-wrapper"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="about-image-container">
                            <img src="/profile-2.jpg" alt="Rifat Abhista" className="about-image" />
                        </div>
                        <div className="about-experience-badge">
                            <div className="number">2+</div>
                            <div className="label">Years of Experience</div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <h3>Who I Am</h3>
                        <h2>
                            A passionate developer crafting{' '}
                            <span className="gradient-text">digital experiences</span>
                        </h2>
                        <p>
                            I'm an Informatics undergraduate student at Universitas Pembangunan
                            Nasional "Veteran" Jawa Timur with a passion for Full Stack Development.
                            I specialize in React, Node.js, and modern web technologies to create
                            fast, scalable, and user-friendly solutions.
                        </p>
                        <p>
                            When I'm not coding, you can find me contributing to open-source projects,
                            writing technical articles, or exploring the latest web technologies.
                            I believe in continuous learning and pushing the boundaries of what's possible
                            on the web.
                        </p>

                        <div className="about-stats">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="about-stat"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                >
                                    <div className="stat-number">{stat.number}</div>
                                    <div className="stat-label">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About
