import { motion } from 'framer-motion'
import {
    FaReact, FaNodeJs, FaGitAlt, FaDocker, FaFigma, FaHtml5,
} from 'react-icons/fa'
import {
    SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss,
    SiMongodb, SiPostgresql, SiPython, SiExpress,
} from 'react-icons/si'
import { HiCode, HiServer, HiCog } from 'react-icons/hi'
import './Skills.css'

const skillCategories = [
    {
        title: 'Frontend',
        description: 'Building beautiful user interfaces',
        icon: <HiCode />,
        skills: [
            { name: 'React / Next.js', icon: <FaReact />, level: 95 },
            { name: 'JavaScript / TypeScript', icon: <SiJavascript />, level: 90 },
            { name: 'HTML5 / CSS3', icon: <FaHtml5 />, level: 95 },
            { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 88 },
        ],
    },
    {
        title: 'Backend',
        description: 'Server-side development & APIs',
        icon: <HiServer />,
        skills: [
            { name: 'Node.js / Express', icon: <FaNodeJs />, level: 90 },
            { name: 'Python', icon: <SiPython />, level: 85 },
            { name: 'MongoDB', icon: <SiMongodb />, level: 85 },
            { name: 'PostgreSQL', icon: <SiPostgresql />, level: 80 },
        ],
    },
    {
        title: 'Tools & Others',
        description: 'Workflow & collaboration tools',
        icon: <HiCog />,
        skills: [
            { name: 'Git / GitHub', icon: <FaGitAlt />, level: 92 },
            { name: 'Docker', icon: <FaDocker />, level: 78 },
            { name: 'Figma', icon: <FaFigma />, level: 82 },
            { name: 'Next.js', icon: <SiNextdotjs />, level: 88 },
        ],
    },
]

const Skills = () => {
    return (
        <section className="skills" id="skills">
            <div className="container">
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    Skills & Expertise
                </motion.div>
                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Technologies and tools I work with to bring ideas to life
                </motion.p>

                <div className="skills-grid">
                    {skillCategories.map((cat, catIndex) => (
                        <motion.div
                            key={catIndex}
                            className="skill-category"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: catIndex * 0.15 }}
                        >
                            <div className="skill-category-icon">{cat.icon}</div>
                            <h3>{cat.title}</h3>
                            <p>{cat.description}</p>

                            <div className="skill-list">
                                {cat.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="skill-item">
                                        <div className="skill-item-icon">{skill.icon}</div>
                                        <div className="skill-item-info">
                                            <div className="skill-item-name">{skill.name}</div>
                                            <div className="skill-item-bar">
                                                <motion.div
                                                    className="skill-item-progress"
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, delay: 0.3 + skillIndex * 0.1 }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
