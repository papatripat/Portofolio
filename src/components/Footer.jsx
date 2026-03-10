import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-logo">
                    abhista<span>.code</span>
                </div>

                <p className="footer-text">
                    © {currentYear} Rifat Abhista. Made with <span className="heart">♥</span> and React
                </p>

                <div className="footer-links">
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="footer-link">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-link">
                        <FaLinkedinIn />
                    </a>

                </div>
            </div>
        </footer>
    )
}

export default Footer
