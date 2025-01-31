import React from 'react';
import styles from './slideTwo.module.scss'
import ImageGallery from "../../components/imagesGallery/imagesGallery";

const SlideTwo = () => {
    const images = [
        '/uploads/tanks/1.jpg',
        '/uploads/tanks/2.jpeg',
        '/uploads/tanks/3.jpeg',
        '/uploads/tanks/4.jpeg',
        '/uploads/tanks/5.jpeg',
        '/uploads/tanks/6.jpg',
        '/uploads/tanks/7.jpg',
        '/uploads/tanks/8.jpg',
    ];
    return (
        <div className={styles.root}>
            <h1>Tanks</h1>
            <h2>We build tanks made to measure.</h2>
            <p>Tanks can be constructed at the factory as well as assembled on site. Volumes range from 1m<sup>3</sup> to 100m<sup>3</sup> and above. Depending on the project, installation can be done both on the ground and below ground.</p>
            <p>The use of Paneltim panels gives a wide range of opportunities as they are strong, light, and very cost efficient when compared to equivalents.</p>
            <p>Here are some but not all of the possible applications of the tanks we produce:</p>
            <ul>
                <li>Drinking water tanks</li>
                <li>Irrigation tanks with built-in mixers</li>
                <li>Tanks for cheese production</li>
                <li>Tanks for fish farms</li>
                <li>Tanks for galvanic processes</li>
                <li>Scrubbers</li>
                <li>ETC</li>
            </ul>
            <ImageGallery images={images}/>
        </div>
    );
};

export default SlideTwo;