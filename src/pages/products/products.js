import React from 'react';
import CeramicProducts from "../../components/products/products";
import styles from "./products.module.scss";

const Products = () => {
    return (
        <div className={styles.root}>
            <CeramicProducts/>
        </div>
    );
};

export default Products;