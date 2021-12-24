import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css';

/* es una interfaz */
export const ProductTitle = ({ title }: { title?: string }) => {

    const {product} = useContext(ProductContext);

    return (
        <span className={styles.productDesciption}>{title ? title : product.title}</span>
    );
}