import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaArrowDown } from 'react-icons/fa'
import { HiOutlineSparkles } from 'react-icons/hi'
import {
    SiReact,
    SiJavascript,
    SiNodedotjs,
    SiPython,
    SiHtml5,
    SiCss3,
    SiGit,
    SiTypescript
} from 'react-icons/si'
import { Link } from 'react-scroll'
import './Hero.css'

const orbitIcons1 = [
    { icon: SiReact, color: '#61DAFB', label: 'React' },
    { icon: SiJavascript, color: '#F7DF1E', label: 'JavaScript' },
    { icon: SiNodedotjs, color: '#339933', label: 'Node.js' },
    { icon: SiPython, color: '#3776AB', label: 'Python' },
]

const orbitIcons2 = [
    { icon: SiHtml5, color: '#E34F26', label: 'HTML5' },
    { icon: SiCss3, color: '#1572B6', label: 'CSS3' },
    { icon: SiGit, color: '#F05032', label: 'Git' },
    { icon: SiTypescript, color: '#3178C6', label: 'TypeScript' },
]

const Hero = () => {
    return (
        <section className="hero" id="hero">
            {/* Floating Particles */}
            <div className="hero-particles">
                {[...Array(15)].map((_, i) => (
                    <div key={i} className="particle" style={{ left: `${5 + i * 6.5}%` }} />
                ))}
            </div>

            <div className="container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <motion.div
                        className="hero-badge"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="dot"></span>
                        Available for freelance work
                    </motion.div>

                    <p className="hero-greeting">Hello, I'm</p>
                    <h1 className="hero-name">
                        Rifat{' '}
                        <span className="gradient-text">Abhista</span>
                    </h1>
                    <h2 className="hero-title">
                        <span className="highlight">Full Stack</span> Developer
                    </h2>
                    <p className="hero-description">
                        Informatics undergraduate student at UPN "Veteran" Jawa Timur. I craft beautiful,
                        performant web applications with modern technologies.
                        Passionate about clean code, great UX, and turning ideas into reality.
                    </p>

                    <div className="hero-buttons">
                        <Link to="contact" smooth={true} offset={-70} duration={600}>
                            <button className="btn-primary">
                                Let's Talk
                                <HiOutlineSparkles />
                            </button>
                        </Link>
                        <Link to="projects" smooth={true} offset={-70} duration={600}>
                            <button className="btn-secondary">
                                View Projects
                                <FaArrowDown />
                            </button>
                        </Link>
                    </div>

                    <div className="hero-social">
                        <span>Find me on</span>
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="hero-social-link">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hero-social-link">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
                >
                    <div className="hero-avatar-wrapper">
                        {/* Orbit Ring 1 - Inner */}
                        <div className="orbit-ring orbit-ring-1">
                            {orbitIcons1.map((item, i) => (
                                <div
                                    key={item.label}
                                    className="orbit-icon"
                                    style={{
                                        '--angle': `${i * 90}deg`,
                                        '--icon-color': item.color,
                                    }}
                                    title={item.label}
                                >
                                    <item.icon />
                                </div>
                            ))}
                        </div>

                        {/* Orbit Ring 2 - Outer */}
                        <div className="orbit-ring orbit-ring-2">
                            {orbitIcons2.map((item, i) => (
                                <div
                                    key={item.label}
                                    className="orbit-icon"
                                    style={{
                                        '--angle': `${i * 90 + 45}deg`,
                                        '--icon-color': item.color,
                                    }}
                                    title={item.label}
                                >
                                    <item.icon />
                                </div>
                            ))}
                        </div>

                        <div className="hero-avatar">
                            <img src="/profile.jpg" alt="Rifat Abhista" className="hero-avatar-img" />
                        </div>

                        <motion.div
                            className="hero-float"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                        >
                            <span className="float-icon">⚡</span>
                            <div>
                                <div className="float-label">Experience</div>
                                <div className="float-value">2+ Years</div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="hero-float"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
                        >
                            <span className="float-icon">🚀</span>
                            <div>
                                <div className="float-label">Projects</div>
                                <div className="float-value">20+ Done</div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
