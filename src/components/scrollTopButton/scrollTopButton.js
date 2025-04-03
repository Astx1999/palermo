import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import styles from './scrollTopButton.module.scss';

const ScrollTopButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`${styles.scrollTop} ${showButton ? styles.visible : ''}`}
        >
            <ArrowUp size={24} />
        </button>
    );
};

export default ScrollTopButton;
