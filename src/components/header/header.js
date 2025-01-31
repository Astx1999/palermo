import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/KhimMasterLogoDark.png';
import Location from '../../assets/Location.png';
import Phone from '../../assets/Phone.png';
import styles from './header.module.scss';
import { ADDRESS, PHONE_NUMBER_ONE } from '../../constants/company-data';

const menuItems = [
    {
        item: "HOME",
        section: "home",
        link: "home",
    },
    {
        item: "ABOUT_US",
        section: "about-us",
        link: "about-us",
    },
    {
        item: "CONTACT_US",
        section: "contact-us",
        link: "contact-us",
    },
];

const Header = () => {
    const { t } = useTranslation();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location.pathname]);

    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <Link to={"/"} className={styles.logoWrapper}>
                    <img className={styles.logo} src={Logo} alt="logo" />
                </Link>

                <div className={styles.address}>
                    <p className={styles.title}>
                        <img src={Location} alt=""/> {t('address')}
                    </p>
                    <p className={styles.subtitle}>{t(ADDRESS)}</p>
                </div>
                <div className={styles.number}>
                    <p className={styles.title}>
                        <img src={Phone} alt=""/> {t('call')}
                    </p>
                    <p className={styles.subtitle}>{PHONE_NUMBER_ONE}</p>
                </div>
            </div>
            <div className={styles.nav}>
                {menuItems.map((item) => (
                    <Link
                        key={item.section}
                        to={item.link}
                        className={location.pathname.includes(item.link) ||
                        ( item.section === "home" && (location.pathname === "/" || location.pathname === "")) ? styles.active : styles.link}>
                        {t(item.item)}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Header;
