import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import Carousel from "../../components/carousel/carousel";
import NumbersSection from "./numbers-section/numbers-section";
import styles from "./home.module.scss";
import {Link} from "react-router-dom";
import ProductsList from "../../components/ceramicProducts/ceramicProducts";
import {Download} from 'lucide-react';
import AboutUsImage from "../../images/aboutUs.jpg";


const Home = () => {
    const {t, i18n} = useTranslation();
    const [data, setData] = useState(
        {
            home_carousel_slides: [
                {
                    desktop_image: "/uploads/homepageCarousel/slide1.jpg",
                    mobile_image: "/uploads/homepageCarousel/slide1.jpg",
                    // title: "Domestic Wastewater Treatment Plants (WWTP)",
                    // desc: "The Fixed Bed Biological Reactor (FBBR) uses a modified 'fixed bed' process for high-rate pollutant removal in a compact footprint, efficiently treating municipal and industrial wastewaters.",
                    // link: "plants"
                },
                {
                    desktop_image: "/uploads/homepageCarousel/slide2.jpg",
                    mobile_image: "/uploads/homepageCarousel/slide2.jpg",
                },
                {
                    desktop_image: "/uploads/homepageCarousel/slide3.jpg",
                    mobile_image: "/uploads/homepageCarousel/slide3.jpg",
                }, {
                    desktop_image: "/uploads/homepageCarousel/slide4.jpg",
                    mobile_image: "/uploads/homepageCarousel/slide4.jpg",
                }, {
                    desktop_image: "/uploads/homepageCarousel/slide5.jpg",
                    mobile_image: "/uploads/homepageCarousel/slide5.jpg",
                }, {
                    desktop_image: "/uploads/homepageCarousel/slide6.jpg",
                    mobile_image: "/uploads/homepageCarousel/slide6.jpg",
                }, {
                    desktop_image: "/uploads/homepageCarousel/slide7.jpg",
                    mobile_image: "/uploads/homepageCarousel/slide7.jpg",
                }, {
                    desktop_image: "/uploads/homepageCarousel/slide8.jpg",
                    mobile_image: "/uploads/homepageCarousel/slide8.jpg",
                }, {
                    desktop_image: "/uploads/homepageCarousel/slide9.jpg",
                    mobile_image: "/uploads/homepageCarousel/slide9.jpg",
                },
            ],
            benefits: [
                {
                    text: t("benefit1"),
                    icon: 'icon-tools'
                },
                {
                    text: t("benefit2"),
                    icon: 'icon-wpforms'
                },
                {
                    text: t("benefit3"),
                    icon: 'icon-credit-card'
                },
                {
                    text: t("benefit4"),
                    icon: 'icon-infinity'
                },
                {
                    text: t("benefit5"),
                    icon: 'icon-clock'
                },
                {
                    text: t("benefit6"),
                    icon: 'icon-lifebuoy'
                },
            ]
        })
    ;

    const handleDownloadCatalog = () => {
        const catalogUrl = 'https://uploadb.me/uh4lmfp59b9g/Final%20Palermo%20Book%202024.zip.html';
        window.open(catalogUrl, '_blank');
    };

    return (
        <div className={styles.root}>
            <Carousel slides={data.home_carousel_slides}/>
            <div className={styles.about}>
                <div className={styles.about__container}>
                    <div className={styles.about__grid}>
                        <div className={styles.about__content}>
                            <h2>{t('about_us')}</h2>
                            <p> {t('about_us_text')}</p>
                            <Link to={"/about-us"} className={styles.about__button}>{t('read_more')}</Link>
                            <button className={styles.about__buttonDownload} onClick={handleDownloadCatalog}>
                                <Download size={20}/>
                                Скачать каталог
                            </button>
                        </div>
                        <div className={styles.about__image}>
                            <img
                                src={AboutUsImage}
                                alt="Luxury Interior"
                            />
                            <div className={styles.about__stats}>
                                <p className={styles['about__stats-number']}>10+</p>
                                <p className={styles['about__stats-text']}>Лет опыта в дизайне</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NumbersSection/>
            <div className={styles.benefits}>
                <p className={styles.titleLight}>{t("why_do_customers_choose_us")}</p>
                <div className={styles.benefitsWrapper}>
                    {data.benefits.map((benefit, index) => (
                        <div className={styles.benefit} key={index}>
                            <p><i className={benefit.icon}/> {benefit.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <span className={styles.title}>{t("PRODUCTS")} NOVA CERAMIC</span>
            <div className={styles.productsList}>
                <ProductsList/>
            </div>
        </div>
    );
};
export default Home;
