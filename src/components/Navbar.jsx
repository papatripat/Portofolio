import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMenu = () => setMenuOpen(!menuOpen)
    const closeMenu = () => setMenuOpen(false)

    const navItems = [
        { to: 'hero', label: 'Home' },
        { to: 'about', label: 'About' },
        { to: 'skills', label: 'Skills' },
        { to: 'projects', label: 'Projects' },
        { to: 'contact', label: 'Contact' },
    ]

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="navbar-logo">
                    abhista<span>.code</span>
                </div>

                <button className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                    {navItems.map(item => (
                        <Link
                            key={item.to}
                            to={item.to}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={600}
                            activeClass="active"
                            onClick={closeMenu}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link
                        to="contact"
                        smooth={true}
                        offset={-70}
                        duration={600}
                        className="btn-primary navbar-cta"
                        onClick={closeMenu}
                    >
                        Hire Me
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
