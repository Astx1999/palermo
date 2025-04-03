import React, {useEffect, useState} from "react";
import {db, collection, getDocs} from "../../firebase";
import styles from "./ceramicProducts.module.scss";
import {useNavigate} from 'react-router-dom';
import Loading from "../loading/loading";

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
                const querySnapshot = await getDocs(collection(db, "ceramic-products"));
                const productsList = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                console.log(productsList);
                setProducts(productsList);
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
                        <img src={product.image} alt={product.metadata.name}/>
                        <div className={styles.desc}>
                            <p className={styles.name}>{product.metadata.name}</p>
                            <p className={styles.code}>{product.metadata.code}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductsList;
