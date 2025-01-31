import React from "react";
import useWindowResize from "../../../hook/useWindowResize";
import styles from "./partners.module.scss";

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


const Partners = ({slides}) => {
    const {width} = useWindowResize();
    return (
        <div className={styles.root}>
            <Swiper
                modules={[Autoplay]}
                loop={true}
                freeMode={true}
                allowTouchMove={true}
                autoplay={{
                    delay: 500,
                    disableOnInteraction: false,
                }}
                slidesPerView={4}
                spaceBetween={10}
                speed={1800}
                a11y={false}
            >
                {slides &&
                slides.map((slide, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className={styles.logo}>
                                <img
                                    className={styles.image}
                                    src={`${slide.image}`}
                                    alt=""
                                />
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};
export default Partners;
