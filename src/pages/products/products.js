import React from 'react';
import CeramicProducts from "../../components/ceramicProducts/ceramicProducts";
import styles from "./products.module.scss";

const Products = () => {
    return (
        <div className={styles.root}>
            <CeramicProducts/>
        </div>
    );
};

export default Products;