import React from 'react';
import {useTranslation} from "react-i18next";
import styles from './contactUs.module.scss'
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api'; // Updated imports

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

    // Map container style
    const containerStyle = {
        width: '100%',
        height: '400px'
    };

    // Map center coordinates
    const center = {
        lat: 40.198077,
        lng: 44.509348
    };


    return (
        <div className={styles.root}>
            <div className={styles.map}>
                <LoadScript googleMapsApiKey="AIzaSyA6UnNGCKkdt-XfxFvCYXOSP8o5EKRH49A">
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={17}
                    >
                        <Marker position={center} />
                    </GoogleMap>
                </LoadScript>
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

export default ContactUs;
