import { createContext, ReactElement, CSSProperties } from 'react';

import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product, onChangeArgs } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    /* para que acepte las propiedades de style de css */
    style?: CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
}


export const ProductCard = ({ children, product, className, style, onChange, value }: Props) => {

    const { counter, increaseBy } = useProduct({onChange, product, value});

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
        }}>
            {/* asi para obtener la clase personalizada */}
            <div 
                className={`${styles.productCard} ${className}`}
                style={style}
            >
                {children}
            </div>
        </Provider>
    )
}



