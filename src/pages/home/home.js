import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import Carousel from "../../components/carousel/carousel";
import NumbersSection from "./numbers-section/numbers-section";
import Partners from "./partners/partners";

import styles from "./home.module.scss";
import {Link} from "react-router-dom";

const Home = () => {
    const {t, i18n} = useTranslation();
    const [data, setData] = useState(
        {
            home_carousel_slides: [
                {
                    desktop_image: "/uploads/homepageCarousel/slide1.jpg",
                    mobile_image: "/uploads/homepageCarousel/slide1.jpg",
                    title: "Domestic Wastewater Treatment Plants (WWTP)",
                    desc: "The Fixed Bed Biological Reactor (FBBR) uses a modified 'fixed bed' process for high-rate pollutant removal in a compact footprint, efficiently treating municipal and industrial wastewaters.",
                    link: "plants"
                },
                {
                    desktop_image: "/uploads/homepageCarousel/slide2.jpg",
                    mobile_image: "/uploads/homepageCarousel/slide2.jpg",
                    title: "Tank building",
                    desc: "We build tanks made to measure. Tanks can be constructed at the factory as well as assembled on site. ",
                    link: "tanks"
                },
                {
                    desktop_image: "/uploads/homepageCarousel/slide3.jpg",
                    mobile_image: "/uploads/homepageCarousel/slide3.jpg",
                    title: "Pools",
                    desc: "We build swimming pools out of Polypropylene sheets, which have additional UV protection.",
                    link: "pools"
                }
            ],
            partners: [
                {image: "/uploads/partners/partner1.png"},
                {image: "/uploads/partners/partner2.png"},
                {image: "/uploads/partners/partner3.png"},
                {image: "/uploads/partners/partner4.png"},
                {image: "/uploads/partners/partner5.jpg"},
                {image: "/uploads/partners/partner6.png"},
                {image: "/uploads/partners/partner7.png"},
                {image: "/uploads/partners/partner8.png"},
            ],
            benefits: [
                t("benefit1"),
                t("benefit2"),
                t("benefit3"),
                t("benefit4"),
                t("benefit5"),
                t("benefit6"),
                t("benefit7"),
            ]
        })
    ;


    return (
        <div className={styles.root}>
            <Carousel slides={data.home_carousel_slides}/>
            <div className={styles.aboutus}>
                <p className={styles.title}>{t('about_us')}</p>
                <p className={styles.text}>
                    {t('about_us_text')} <Link to={"/about-us"} className={styles.readMore}>{t('read_more')}</Link>
                </p>
            </div>
            <NumbersSection/>
            <div className={styles.benefits}>
                <p className={styles.title}>{t("why_do_customers_choose_us")}</p>
                <div className={styles.benefitsWrapper}>
                    {data.benefits.map((benefit, index) => (
                        <div className={styles.benefit} key={index}>
                            <div className={styles.number}>0{index + 1}</div>
                            <p>{benefit}</p>
                        </div>
                    ))}
                </div>
            </div>
            <span className={styles.title}>{t("partners")}</span>
            <Partners slides={data.partners}/>
        </div>
    );
};
export default Home;
