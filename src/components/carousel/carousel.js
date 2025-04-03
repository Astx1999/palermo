import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {
    Navigation,
    Pagination,
    Autoplay
} from "swiper/modules";
import {useTranslation} from "react-i18next";
import Button from "../button/button";
import useWindowResize from "../../hook/useWindowResize";
import styles from "./carousel.module.scss";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


const Carousel = ({slides}) => {
    const {t} = useTranslation();

    const {width} = useWindowResize()

    return (
        <div className={styles.root}>
            <Swiper
                modules={[Pagination, Autoplay, Navigation]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                speed={1000}
                loop={true}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{clickable: true}}
                lazyload="true"
            >
                {slides &&
                slides.map((slide, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className={styles.slide}>
                                {width <= 767 ?
                                    <img
                                        className={styles.image}
                                        src={`${slide.mobile_image}`}
                                        alt={slide.title}
                                        loading="lazy"
                                    /> :
                                    <img
                                        className={styles.image}
                                        src={`${slide.desktop_image}`}
                                        alt={slide.title}
                                        loading="lazy"
                                    />
                                }

                               {/* <div className={styles.about}>
                                    <p className={styles.title}>
                                        {slide.title}
                                    </p>
                                    <p className={styles.text}>
                                        {slide.desc}
                                    </p>
                                    <div>
                                        <Button
                                            type={"blank"}
                                            to={`/${slide.link}`}
                                            noPadding
                                        >
                                                <span className={styles.button}>
                                                    {t("read_more")}
                                                </span>
                                        </Button>
                                    </div>
                                </div>*/}
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};
export default Carousel;
