import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const projectsData = [
    {
        title: 'Cartify',
        description: 'A full-stack e-commerce platform with payment integration, real-time inventory tracking, and an admin dashboard.',
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        image: '/images/cartify.png',
        github: 'https://github.com/papatripat/Cartify',
    },
    {
        title: 'Monetra : Finance App',
        description: 'Personal finance management app that helps users track expenses, manage budgets, and monitor their financial health in real time.',
        tags: ['Next.js', 'React', 'Tailwind CSS', 'PostgreSQL'],
        image: '/images/Monetra.png',
        github: 'https://github.com/papatripat/Monetra',
    },
    {
        title: 'Peak Form',
        description: 'A comprehensive fitness tracking app with workout plans, progress analytics, and social sharing features.',
        tags: ['React', 'Firebase', 'Chart.js', 'PWA'],
        image: '/images/peakform.png',
        github: 'https://github.com/papatripat/Peak-Form',
        live: 'https://peak-forms.vercel.app/',
    },
]

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <div className="container">
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    Featured Projects
                </motion.div>
                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    A selection of my recent work and personal projects
                </motion.p>

                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            <div className="project-image">
                                <img
                                    className="project-image-bg"
                                    src={project.image}
                                    alt={project.title}
                                />
                                <div className="project-image-overlay">
                                    <a href={project.github} target="_blank" rel="noreferrer" className="project-link secondary">
                                        <FaGithub /> Code
                                    </a>
                                    {project.live && (
                                        <a href={project.live} target="_blank" rel="noreferrer" className="project-link primary">
                                            <FaExternalLinkAlt /> Demo
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="project-info">
                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
