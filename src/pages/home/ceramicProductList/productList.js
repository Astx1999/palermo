import React, {useEffect, useState} from "react";
import styles from "./productList.module.scss";
import {useNavigate} from 'react-router-dom';
import Loading from "../../../components/loading/loading";
import {supabase} from "../../../supabaseClient";

function ProductsList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    const handleProductClick = (productId) => {
        navigate(`/products/${productId}`);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let query = supabase.from('novaCeramicProducts').select('*');

                const {data} = await query;
                setProducts(data);
            } catch (error) {
                console.error("Error fetching ceramic products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return (
            <Loading />
        );
    }

    return (
        <div>
            <div className={styles.products}>
                {products.map(product => (
                    <div key={product.id} className={styles.product} onClick={() => handleProductClick(product.id)}>
                        <img src={product.image} alt={product.title}/>
                        <div className={styles.desc}>
                            <p className={styles.title}>{product.title}</p>
                            <p className={styles.code}>{product.code}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductsList;
