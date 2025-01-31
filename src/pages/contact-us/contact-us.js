import React from 'react';
import {useTranslation} from "react-i18next";
import styles from './contact-us.module.scss'
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";

import {
    ADDRESS,
    COMPANY_EMAIL,
    PHONE_NUMBER_FORMATTED_ONE,
    PHONE_NUMBER_FORMATTED_TWO,
    PHONE_NUMBER_ONE,
    PHONE_NUMBER_TWO
} from "../../constants/company-data";
import Phone from "../../assets/Phone.png";
import Email from "../../assets/Email.png";
import Location from "../../assets/Location.png";

const ContactUs = ({google}) => {
    const {t} = useTranslation();
    return (
        <div className={styles.root}>
            <div className={styles.map}>
                <Map
                    google={google}
                    zoom={17}
                    initialCenter={{
                        lat: 40.198077,
                        lng: 44.509348,
                    }}
                >
                    <Marker
                        position={{
                            lat: 40.198077,
                            lng: 44.509348,
                        }}
                    />
                </Map>
            </div>
            <div className={styles.info}>

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
        </div>
    );
};

export default GoogleApiWrapper({
    apiKey: "AIzaSyA6UnNGCKkdt-XfxFvCYXOSP8o5EKRH49A",
    language: "en",
})(ContactUs);
