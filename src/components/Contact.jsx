import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { HiMail, HiLocationMarker, HiPhone } from 'react-icons/hi'
import { IoSend } from 'react-icons/io5'
import './Contact.css'

const Contact = () => {
    const formRef = useRef()
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState({ type: '', message: '' })

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        setStatus({ type: '', message: '' })

        emailjs.sendForm(
            'service_1e794ij',
            'template_cmjedgg',
            formRef.current,
            'boqh4O-5VB8MnAVkq'
        )
            .then(() => {
                setStatus({ type: 'success', message: 'Pesan berhasil terkirim! Terima kasih.' })
                formRef.current.reset()
            })
            .catch(() => {
                setStatus({ type: 'error', message: 'Gagal mengirim pesan. Silakan coba lagi.' })
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <section className="contact" id="contact">
            <div className="container">
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    Get In Touch
                </motion.div>
                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Have a project in mind? Let's work together to create something amazing
                </motion.p>

                <div className="contact-grid">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.7 }}
                    >
                        <h3>Contact Info</h3>
                        <h2>
                            Let's create something{' '}
                            <span className="gradient-text">amazing together</span>
                        </h2>
                        <p>
                            I'm always open to discussing new projects, creative ideas, or
                            opportunities to be part of your vision. Feel free to reach out!
                        </p>

                        <div className="contact-details">
                            <div className="contact-detail-item">
                                <div className="contact-detail-icon">
                                    <HiMail />
                                </div>
                                <div className="contact-detail-text">
                                    <div className="label">Email</div>
                                    <div className="value">rifatabhista@gmail.com</div>
                                </div>
                            </div>

                            <div className="contact-detail-item">
                                <div className="contact-detail-icon">
                                    <HiPhone />
                                </div>
                                <div className="contact-detail-text">
                                    <div className="label">Phone</div>
                                    <div className="value">081359237006</div>
                                </div>
                            </div>

                            <div className="contact-detail-item">
                                <div className="contact-detail-icon">
                                    <HiLocationMarker />
                                </div>
                                <div className="contact-detail-text">
                                    <div className="label">Location</div>
                                    <div className="value">Surabaya, Indonesia</div>
                                </div>
                            </div>
                        </div>

                        <div className="contact-social">
                            <a href="https://github.com/papatripat" target="_blank" rel="noreferrer" className="contact-social-link">
                                <FaGithub />
                            </a>
                            <a href="https://linkedin.com/in/rifatabhista" target="_blank" rel="noreferrer" className="contact-social-link">
                                <FaLinkedinIn />
                            </a>

                            <a href="https://instagram.com/rifatabhistaa" target="_blank" rel="noreferrer" className="contact-social-link">
                                <FaInstagram />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="contact-form-wrapper"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Your Name</label>
                                    <input type="text" id="name" name="name" placeholder="John Doe" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Your Email</label>
                                    <input type="email" id="email" name="email" placeholder="john@example.com" required />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" name="subject" placeholder="Project Discussion" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" placeholder="Tell me about your project..." required></textarea>
                            </div>

                            {status.message && (
                                <div className={`form-status ${status.type}`}>
                                    {status.message}
                                </div>
                            )}

                            <button type="submit" className="form-submit" disabled={loading}>
                                {loading ? 'Mengirim...' : 'Send Message'}
                                <IoSend />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact
