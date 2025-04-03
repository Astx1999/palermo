import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import Logo from '../../assets/palermologo.png'
import Location from '../../assets/Location.png'
import Phone from '../../assets/Phone.png'
import Email from '../../assets/Email.png'
import Facebook from "../../assets/fb.png";
import Instagram from "../../assets/insta.png";
import {
    FACEBOOK_ACCOUNT,
    INSTA_ACCOUNT,
    PHONE_NUMBER_ONE,
    PHONE_NUMBER_TWO,
    PHONE_NUMBER_FORMATTED_ONE,
    PHONE_NUMBER_FORMATTED_TWO,
    ADDRESS,
    COMPANY_EMAIL,
} from "../../constants/company-data";

import styles from "./footer.module.scss";
import {Link} from "react-router-dom";

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
        item: "PRODUCTS",
        section: "products",
        link: "products",
    },
    {
        item: "CONTACT_US",
        section: "contactUs",
        link: "contactUs",
    },
];
const newDate = new Date();
const year = newDate.getFullYear();
export default function Footer() {
    const {t, i18n} = useTranslation();

    return (
        <div id="footer" className={styles.footer}>
            <div>
                <div className={styles.container}>
                    <div className={styles.col}>
                        <img src={Logo} alt="" className={styles.logo}/>
                        {menuItems.map((menuItem, index) => {
                            return (
                                <div key={index} className={styles.linkWrapper}>
                                    <Link
                                        className={styles.link}
                                        to={
                                            // "/" +
                                            // i18n.language +
                                            "/" +
                                            menuItem.section
                                        }
                                    >
                                        <span>{t(menuItem.item)}</span>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles.col}>

                        <div className={styles.iconWithText}>
                            <img src={Phone} alt=""/>
                            <div>
                                <p className={styles.subtitle}>{t('call')}</p>
                                <span className={styles.text}>
                                <a href={`tel:${PHONE_NUMBER_ONE}`}>
                                    {" "}
                                    {PHONE_NUMBER_FORMATTED_ONE}
                                </a>
                                <br/>
                                <a href={`tel:${PHONE_NUMBER_TWO}`}>
                                    {PHONE_NUMBER_FORMATTED_TWO}
                                </a>
                            </span>
                            </div>
                        </div>
                        <div className={styles.iconWithText}>
                            <img src={Email} alt=""/>
                            <div>
                                <p  className={styles.subtitle}> {t('email')}</p>
                                <span className={styles.text}>
                                    <a href={`mailto:${COMPANY_EMAIL}`}>
                                        {COMPANY_EMAIL}
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div className={styles.iconWithText}>
                            <img src={Location} alt=""/>
                            <div>
                                <p className={styles.subtitle}>{t('address')}</p>
                                <span
                                    className={`${styles.text} ${styles.address}`}
                                >
                                    {t(ADDRESS)}
                                </span>
                            </div>

                        </div>
                    </div>
                    <div className={styles.col}>
                        <div className={styles.socials}>
                            <span className={styles.followUsTitle}>{t("follow_us")}</span>
                            <div>
                                <a
                                    target={"_blank"}
                                    href={FACEBOOK_ACCOUNT}
                                    className={styles.socialIcon}
                                >
                                    <img src={Facebook} alt=""/>
                                </a>
                                <a
                                    target={"_blank"}
                                    href={INSTA_ACCOUNT}
                                    className={styles.socialIcon}
                                >
                                    <img src={Instagram} alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className={styles.reserved}>
                © {year} {t("all_rights_reserved")}
            </p>
            {/*<a href="https://neen.am" target="_blank" className={styles.created}><p>Created with</p>*/}
            {/*    <div className={styles.heart}>*/}
            {/*        <FullHeart/>*/}
            {/*    </div>*/}
            {/*    <p>from Neen</p></a>*/}
        </div>
    );
}
