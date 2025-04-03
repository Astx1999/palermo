import React from 'react';

import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import {useTranslation} from "react-i18next";

import styles from "./numbers-section.module.scss";
const NumbersSection = ( ) => {
    const {t} = useTranslation()
    return(
        <div className={styles.numbersBG}>
                <div className={styles.numbers}>
                    <div className={styles.numberWrapper}>
                        <p>
                            <CountUp end={10}  className={styles.number}  redraw={true}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                            <sup className={styles.sup}>+</sup>
                        </p>

                        <p className={styles.numberDescription}>{t('years_in_market')}</p>
                    </div>
                    <div className={styles.numberWrapper}>
                        <p>
                            <CountUp end={20}  className={styles.number}  redraw={true}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                            <sup className={styles.sup}>+</sup>
                        </p>

                        <p className={styles.numberDescription}>{t('designs_materials')}</p>
                    </div>
                    <div className={styles.numberWrapper}>
                        <p>
                            <CountUp end={1000}  className={styles.number}  redraw={true}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                            <sup className={styles.sup}>+</sup>
                        </p>

                        <p className={styles.numberDescription}>{t('satisfied_customers')}</p>
                    </div>
                </div>
        </div>
    )
}
export default NumbersSection
