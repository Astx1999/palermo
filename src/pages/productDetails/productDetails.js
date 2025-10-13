import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {fetchProductById} from '../../supabaseClient';
import styles from './productDetail.module.scss';
import Loading from "../../components/loading/loading";
import {ArrowLeft} from 'lucide-react';

function ProductDetails() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

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

    if (loading) {
        return <Loading/>;
    }

    if (!product) {
        return (
            <div className={styles.notFoundContainer}>
                <div className={styles.notFoundContent}>
                    <h2>Продукт не найден</h2>
                    <button onClick={() => navigate(-1)}>
                        <ArrowLeft/>
                        Вернуться назад
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <button
                onClick={() => navigate(-1)}
                className={styles.backButton}
            >
                <ArrowLeft/>
                Назад к продуктам
            </button>

            <div className={styles.productGrid}>
                <div className={styles.imageContainer}>
                    <img
                        src={product.image}
                        alt={product.title}
                    />
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
                            {product.size && (
                                <div className={styles.specRow}>
                                    <dt>Размер:</dt>
                                    <dd>{product.size}</dd>
                                </div>
                            )}
                            {product.price && (
                                <div className={styles.specRow}>
                                    <dt>Цена:</dt>
                                    <dd>{product.price} ₽/м2</dd>
                                </div>
                            )}
                            {product.color && (
                                <div className={styles.specRow}>
                                    <dt>Цвет:</dt>
                                    <dd>{product.color}</dd>
                                </div>
                            )}
                            {product.style && (
                                <div className={styles.specRow}>
                                    <dt>Стиль:</dt>
                                    <dd>{product.style}</dd>
                                </div>
                            )}
                            {product.surface && (
                                <div className={styles.specRow}>
                                    <dt>Поверхность:</dt>
                                    <dd>{product.surface}</dd>
                                </div>
                            )}
                            {product.thickness && (
                                <div className={styles.specRow}>
                                    <dt>Толщина:</dt>
                                    <dd>{product.thickness}</dd>
                                </div>
                            )}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
