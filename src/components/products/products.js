import React, { useEffect, useState } from "react";
import { supabase } from '../../supabaseClient';
import styles from './products.module.scss';
import { useNavigate } from 'react-router-dom';
import Loading from "../../components/loading/loading";
import { useTranslation } from "react-i18next";
import CustomSelect from "../customSelect/customSelect";

export const SIZE_OPTIONS = {
    tile: [
        "All sizes",
        "17x120x1,2",
        "20x120x1,2",
        "35x120x2",
        "40x40x1,6",
        "60x60",
        "80x80x1,2",
        "80x120",
        "80x160x0,9",
        "100x100x1",
        "120x120x0,9",
    ],
    slab: [
        "All sizes",
        "120x240x0,9",
        "120x260x0,9",
        "120x300x0,9",
        "150x150x0,9",
        "150x300x0,9",
    ],
};

const buttons = [
    { value: 'all', label: 'All' },
    { value: 'tile', label: 'Tiles' },
    { value: 'slab', label: 'Slabs' },
];

const PAGE_SIZE = 8; // Number of products per page

function ProductsList() {
    const { t } = useTranslation();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedType, setSelectedType] = useState("all");
    const [selectedSize, setSelectedSize] = useState("All sizes");
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const navigate = useNavigate();

    const handleProductClick = (productId) => {
        navigate(`/products/${productId}`);
    };

    const fetchProducts = async (type, size, page = 1, append = false) => {
        setLoading(true);
        try {
            let query = supabase.from('products').select('*');

            if (type !== "all") query = query.eq('type', type);
            if (size && size !== "All sizes") query = query.eq('size', size);

            const from = (page - 1) * PAGE_SIZE;
            const to = page * PAGE_SIZE - 1;

            query = query.range(from, to);

            const { data, error } = await query;
            if (error) throw error;

            if (append) {
                setProducts((prev) => [...prev, ...(data || [])]);
            } else {
                setProducts(data || []);
            }

            setHasMore(data && data.length === PAGE_SIZE);
        } catch (err) {
            console.error(err);
            setProducts([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setPage(1);
        fetchProducts(selectedType, selectedSize, 1, false);
    }, [selectedType, selectedSize]);

    const loadMore = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        fetchProducts(selectedType, selectedSize, nextPage, true);
    };

    if (loading && page === 1) return <Loading />;

    return (
        <div className={styles.wrapper}>
            <div className={styles.filterBar}>
                <div className={styles.typeTabs}>
                    {buttons.map(type => (
                        <button
                            key={type.value}
                            className={`${styles.typeButton} ${selectedType === type.value ? styles.active : ""}`}
                            onClick={() => {
                                setSelectedType(type.value);
                                setSelectedSize("All sizes");
                            }}
                        >
                            {t(type.label)}
                        </button>
                    ))}
                </div>
                <CustomSelect
                    label={"Фильтр по размеру:"}
                    options={
                        selectedType === "all"
                            ? [...SIZE_OPTIONS.tile, ...SIZE_OPTIONS.slab].filter((v, i, a) => a.indexOf(v) === i)
                            : SIZE_OPTIONS[selectedType]
                    }
                    value={t(selectedSize)}
                    onChange={(size) => setSelectedSize(size)}
                    placeholder="Select size"
                />
            </div>

            <div className={styles.products}>
                {products.length > 0 ? (
                    products.map(product => (
                        <div key={product.id} className={styles.product} onClick={() => handleProductClick(product.id)}>
                            <img src={product.images[0]} alt={product.title} />
                            <div className={styles.desc}>
                                <p className={styles.name}>{product.title}</p>
                                <p className={styles.code}>{product.code}</p>
                                <p className={styles.size}>{product.size}cm</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className={styles.noResults}>No products found for this type/size.</p>
                )}
            </div>

            {hasMore && !loading && (
                <div className={styles.loadMoreWrapper}>
                    <button className={styles.loadMore} onClick={loadMore}>
                        Load More
                    </button>
                </div>
            )}

            {loading && page > 1 && <p>Loading more...</p>}
        </div>
    );
}

export default ProductsList;
