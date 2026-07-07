import { useState, useEffect } from 'react';
import '../css/nav.css';
export default function NavComponent() {

    let [hoveredLink, setHoveredLink] = useState(null);

    const links = ['Home', 'About', 'Contact'];

    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isTransparent, setIsTransparent] = useState(true);

    useEffect(() => {
        const controlNavbar = () => {

            // Current scroll position
            const currentScrollY = window.scrollY;

            // 1. Handle background transparency (Transparent only at the absolute top)
            if (currentScrollY <= 100) {
                setIsTransparent(true);
            } else {
                setIsTransparent(false);
            }

            if (currentScrollY > lastScrollY && currentScrollY > 2) {
                // Scrolling down: hide navbar
                setIsVisible(false);
            } else {
                // Scrolling up: show navbar
                setIsVisible(true);
            }

            // Keep track of the previous scroll position
            setLastScrollY(currentScrollY);
        };

        // Attach scroll listener
        window.addEventListener('scroll', controlNavbar);

        // Clean up listener on component unmount
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);


    function open_side_bar() {
        if (window.innerWidth > 800) return;

        const mobileMenu = document.querySelector('.nav-ul-mobile');
        const menuButton = document.querySelector('.menu-button');

        if (mobileMenu) mobileMenu.style.display = 'flex';
        if (menuButton) menuButton.style.display = 'none';
    }

    function close_side_bar() {
        if (window.innerWidth > 800) {
            const mobileMenu = document.querySelector('.nav-ul-mobile');
            if (mobileMenu) mobileMenu.style.display = 'none';
            return;
        }

        const mobileMenu = document.querySelector('.nav-ul-mobile');
        const menuButton = document.querySelector('.menu-button');

        if (mobileMenu) mobileMenu.style.display = 'none';
        if (menuButton) menuButton.style.display = 'block';
    }

    function handleNavClick(event, sectionId) {
        event.preventDefault();
        const target = document.getElementById(sectionId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        close_side_bar();
    }

    return (

        <nav className={`navbar ${isVisible ? 'show' : 'hide'}
        ${isTransparent ? 'nav-transparent' : 'nav-colored'}
        `}>
            <span></span>
            <p>Balmoral</p>
            <ul className='nav-ul'>
                {links.map((link) => {
                    let isdimmed = hoveredLink !== null && hoveredLink !== link;
                    return (
                        <li key={link}  className='hideOnMobile'>
                            <a href={`#${link.toLowerCase()}`} onClick={(e) => handleNavClick(e, link.toLowerCase())} onMouseEnter={() => setHoveredLink(link)} onMouseLeave={() => setHoveredLink(null)} style={{ opacity: isdimmed ? 0.5 : 1, transition: 'opacity 0.3s' }} className={`hover-underline-link ${isTransparent ?
                                'link-colored' : 'link-black'
                                }`}>
                                {link}
                            </a>
                        </li>
                        
                    )
                })}
                <li onClick={open_side_bar} className='menu-button'>
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e3e3e3" style={{fill : isTransparent ? "#fff " : "#000"}}><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
                    </a>
                </li>
            </ul>
            <ul className='nav-ul-mobile'>
                <li onClick={close_side_bar} className='menu-button1'>
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
                    </a>
                </li>
                {links.map((link1) => {
                    let isdimmed = hoveredLink !== null && hoveredLink !== link1;
                    return (
                        <li key={link1}>
                            <a href={`#${link1.toLowerCase()}`} onClick={(e) => handleNavClick(e, link1.toLowerCase())} onMouseEnter={() => setHoveredLink(link1)} onMouseLeave={() => setHoveredLink(null)} style={{ opacity: isdimmed ? 0.5 : 1, transition: 'opacity 0.3s', color: '#000' }} className={`hover-underline-link ${isTransparent ?
                                'link-colored' : 'link-black'
                                }`}>
                                {link1}
                            </a>
                        </li>  
                    )
                })}
                
            </ul>
        </nav>
    );

}