import React, { useEffect, useRef } from 'react';
import styles from './imagesGallery.module.scss';

const ImageGallery = ({ images }) => {
    const galleryRef = useRef(null);

    useEffect(() => {
        const gallery = galleryRef.current;
        const resizeAllGridItems = () => {
            const allItems = gallery.querySelectorAll(`.${styles.galleryItem}`);
            const rowHeight = parseInt(window.getComputedStyle(gallery).getPropertyValue('grid-auto-rows'), 10);
            const rowGap = parseInt(window.getComputedStyle(gallery).getPropertyValue('grid-row-gap'), 10);

            allItems.forEach(item => {
                const img = item.querySelector('img');
                const itemHeight = img ? img.getBoundingClientRect().height : 0;

                if (!img.complete) {
                    img.onload = () => {
                        const loadedItemHeight = img.getBoundingClientRect().height;
                        const gridItemHeight = Math.ceil((loadedItemHeight + rowGap) / (rowHeight + rowGap));
                        item.style.gridRowEnd = `span ${gridItemHeight}`;
                    };
                } else {
                    const gridItemHeight = Math.ceil((itemHeight + rowGap) / (rowHeight + rowGap));
                    item.style.gridRowEnd = `span ${gridItemHeight}`;
                }
            });
        };

        resizeAllGridItems();
        window.addEventListener('resize', resizeAllGridItems);

        return () => {
            window.removeEventListener('resize', resizeAllGridItems);
        };
    }, [images]);

    return (
        <div className={styles.gallery} ref={galleryRef}>
            {images.map((image, index) => (
                <div key={index} className={styles.galleryItem}>
                    <img src={image} alt={`Gallery image ${index + 1}`} />
                </div>
            ))}
        </div>
    );
};
export default ImageGallery;
