import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css';

export interface Props {
    title?: string;
    className?: string;
}

/* es una interfaz */
export const ProductTitle = ({ title, className }: Props) => {

    const {product} = useContext(ProductContext);

    return (
        <span className={`${styles.productDesciption} ${className}`}>{title ? title : product.title}</span>
    );
}