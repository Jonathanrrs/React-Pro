import React, { useContext, CSSProperties } from "react";
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css';

export interface Props {
    title?: string;
    className?: string;
    style?: CSSProperties;
}

/* es una interfaz */
export const ProductTitle = ({ title, className, style }: Props) => {

    const { product } = useContext(ProductContext);

    return (
        <span
            className={`${styles.productDesciption} ${className}`}
            style={style}
        >{title ? title : product.title}
        </span>
    );
}