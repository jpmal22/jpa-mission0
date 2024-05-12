import { useState, useEffect } from 'react';
import './style.css';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className="header">
            <div className="logo-section">
                <img src="/logo.jpg" alt="Company Logo" className="logo"/>
                <span className="company-name">Marketing Association</span>
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className="menu-toggle" aria-label="Toggle menu">☰</button>
            <nav className={`${isMobile ? 'nav-dropdown' : 'nav-visible'} ${isOpen ? 'visible' : ''}`}>
                <ul className="menu">
                    <li><button className="menu-button">Membership</button></li>
                    <li><button className="menu-button">Services</button></li>
                    <li><button className="menu-button">Contact Us</button></li>
                    <li><button className="login">Login</button></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
