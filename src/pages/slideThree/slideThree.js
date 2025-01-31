import React from 'react';
import styles from './slideThree.module.scss'
import ImageGallery from "../../components/imagesGallery/imagesGallery";

const SlideThree = () => {
    const images = [
        '/uploads/pools/1.jpg',
        '/uploads/pools/2.jpg',
        '/uploads/pools/3.jpeg',
        '/uploads/pools/4.jpeg',
        '/uploads/pools/5.jpeg',
    ];
    return (
        <div className={styles.root}>
            <h2>Swimming Pools</h2>
            <p>We build swimming pools out of Polypropylene sheets, which have additional UV protection.</p>
            <p>The advantages of pools made from PP are:</p>
            <ul>
                <li>Pools are built within 3-5 days</li>
                <li>Including transportation and installation the whole process takes 10-14 days</li>
                <li>No additional concrete works on site</li>
                <li>Completely waterproof: no cracks, leaks throughout years of service</li>
                <li>Easily maintained and cleaned</li>
            </ul>
            <ImageGallery images={images}/>
        </div>
    );
};

export default SlideThree;