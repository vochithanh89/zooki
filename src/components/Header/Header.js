import styles from './Header.module.scss';
import logo from '../../assets/image/logo.png';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import clsx from 'clsx';

function Header() {
    const headerRef = useRef();

    const [isNavShow, setIsNavShow] = useState(false);

    const handleNavShow = () => {
        setIsNavShow(!isNavShow);
    };

    useEffect(() => {
        const changeHeaderColor = () => {
            const scrollHeight = window.scrollY;
            headerRef.current.style.backgroundColor = scrollHeight > 50 ? 'black' : 'transparent';
        };

        window.addEventListener('scroll', changeHeaderColor);

        return () => {
            window.removeEventListener('scroll', changeHeaderColor);
        };
    });

    return (
        <header className={styles.header} ref={headerRef}>
            <div className={styles.container}>
                <a href="/" className={styles.logo}>
                    <img src={logo} alt="" />
                </a>
                <button className={styles.menuBtn} onClick={handleNavShow}>
                    <AiOutlineMenu />
                </button>
                <nav className={styles.navBar}>
                    <ul
                        className={clsx(styles.navList, {
                            [styles.hide]: !isNavShow,
                        })}
                    >
                        <li className={styles.navItem}>
                            <a href="#home">HOME</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#about">ABOUT</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#services">SERVICES</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#features">FEATURES</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#pricing">PRICING</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#clients">CLIENTS</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#blog">BLOG</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#contact">CONTACT US</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
