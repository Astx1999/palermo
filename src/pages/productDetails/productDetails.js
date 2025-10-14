import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProductById } from '../../supabaseClient';
import styles from './productDetail.module.scss';
import Loading from "../../components/loading/loading";
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const data = await fetchProductById(id);
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product:', error);
            } finally {
                setLoading(false);
            }
        };
        getProduct();
    }, [id]);

    // Reset carousel index when product changes
    useEffect(() => {
        setCurrentImageIndex(0);
    }, [product]);

    if (loading) return <Loading />;

    if (!product) {
        return (
            <div className={styles.notFoundContainer}>
                <div className={styles.notFoundContent}>
                    <h2>Продукт не найден</h2>
                    <button onClick={() => navigate(-1)}>
                        <ArrowLeft />
                        Вернуться назад
                    </button>
                </div>
            </div>
        );
    }

    // Ensure images array
    const images = Array.isArray(product.images) && product.images.length
        ? product.images
        : product.image
            ? [product.image]
            : [];

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className={styles.container}>
            <button onClick={() => navigate(-1)} className={styles.backButton}>
                <ArrowLeft />
                Назад к продуктам
            </button>

            <div className={styles.productGrid}>
                <div className={styles.imageContainer}>
                    {images.length > 1 && (
                        <button className={styles.prev} onClick={prevImage}><ChevronLeft /></button>
                    )}
                    {images.length > 0 ? (
                        <img src={images[currentImageIndex]} alt={product.title} />
                    ) : (
                        <div className={styles.noImage}>Изображение отсутствует</div>
                    )}
                    {images.length > 1 && (
                        <button className={styles.next} onClick={nextImage}><ChevronRight /></button>
                    )}
                </div>

                <div className={styles.productInfo}>
                    <h1>{product.title}</h1>
                    <p className={styles.code}>Код: {product.code}</p>

                    {product.description && (
                        <div className={styles.description}>
                            <h2>Описание</h2>
                            <p>{product.description}</p>
                        </div>
                    )}

                    <div className={styles.specifications}>
                        <h2>Характеристики</h2>
                        <dl>
                            {product.size && <div className={styles.specRow}><dt>Размер:</dt><dd>{product.size}</dd></div>}
                            {product.price && <div className={styles.specRow}><dt>Цена:</dt><dd>{product.price} ₽/м2</dd></div>}
                            {product.color && <div className={styles.specRow}><dt>Цвет:</dt><dd>{product.color}</dd></div>}
                            {product.style && <div className={styles.specRow}><dt>Стиль:</dt><dd>{product.style}</dd></div>}
                            {product.surface && <div className={styles.specRow}><dt>Поверхность:</dt><dd>{product.surface}</dd></div>}
                            {product.thickness && <div className={styles.specRow}><dt>Толщина:</dt><dd>{product.thickness}</dd></div>}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
