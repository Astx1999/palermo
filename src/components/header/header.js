import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/palermologo.png';
import styles from './header.module.scss';
import useWindowResize from '../../hook/useWindowResize';
import ScrollTopButton from "../scrollTopButton/scrollTopButton";

const menuItems = [
    { item: "HOME", section: "home", link: "/" },
    { item: "ABOUT_US", section: "about-us", link: "/about-us" },
    { item: "PRODUCTS", section: "products", link: "/products" },
    { item: "CONTACT_US", section: "contactUs", link: "/contactUs" },
];

const Header = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const { width } = useWindowResize();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location.pathname]);


    const toggleMenu = () => setIsMenuOpen(prev => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <Link to={"/"} className={styles.logoWrapper}>
                    <img className={styles.logo} src={Logo} alt="logo" />
                </Link>
                {width < 768 && (
                    <div className={styles.burger} onClick={toggleMenu}>
                        <span className={styles.burgerLine}></span>
                        <span className={styles.burgerLine}></span>
                        <span className={styles.burgerLine}></span>
                    </div>
                )}
            </div>

            <div className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
                <div className={styles.closeButton} onClick={closeMenu}>
                    &times;
                </div>
                {menuItems.map((item) => (
                    <Link
                        key={item.section}
                        to={item.link}
                        onClick={closeMenu}
                        className={location.pathname === item.link ? styles.active : styles.link}>
                        {t(item.item)}
                    </Link>
                ))}
            </div>

            <ScrollTopButton/>
        </div>
    );
};

export default Header;