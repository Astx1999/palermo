import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import styles from './productDetail.module.scss';
import Loading from "../../components/loading/loading";
import {ArrowLeft} from 'lucide-react';

function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const docRef = doc(db, "ceramic-products", id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setProduct({
                        id: docSnap.id,
                        ...docSnap.data()
                    });
                }
            } catch (error) {
                console.error('Ошибка при получении информации о продукте:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return <Loading />;
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
                        alt={product.metadata.name}
                    />
                </div>

                <div className={styles.productInfo}>
                    <h1>{product.metadata.name}</h1>
                    <p className={styles.code}>Код: {product.metadata.code}</p>

                    {product.metadata.description && (
                        <div className={styles.description}>
                            <h2>Описание</h2>
                            <p>{product.metadata.description}</p>
                        </div>
                    )}

                    <div className={styles.specifications}>
                        <h2>Характеристики</h2>
                        <dl>
                            {product.metadata.size && (
                                <div className={styles.specRow}>
                                    <dt>Размер:</dt>
                                    <dd>{product.metadata.size}</dd>
                                </div>
                            )}
                            {product.metadata.bodyType && (
                                <div className={styles.specRow}>
                                    <dt>Тип основы:</dt>
                                    <dd>{product.metadata.bodyType}</dd>
                                </div>
                            )}
                            {product.metadata.grade && (
                                <div className={styles.specRow}>
                                    <dt>Класс:</dt>
                                    <dd>{product.metadata.grade}</dd>
                                </div>
                            )}
                            {product.metadata.surface && (
                                <div className={styles.specRow}>
                                    <dt>Поверхность:</dt>
                                    <dd>{product.metadata.surface}</dd>
                                </div>
                            )}
                            {product.metadata.thickness && (
                                <div className={styles.specRow}>
                                    <dt>Толщина:</dt>
                                    <dd>{product.metadata.thickness}</dd>
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
