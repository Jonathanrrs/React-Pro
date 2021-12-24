import { ReactElement } from 'react'; /* es una interfaz de tipo generico */
import { useProduct } from '../hooks/useProduct';

import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

interface Props {
    product: Product;
    children?: ReactElement | ReactElement[]
}

interface Product {
    id: string;
    title: string,
    img?: string
}

/* '' asi para que la img sea opcional, vacio para el ternario es que no tiene valor */
export const ProductImage = ({ img = '' }) => {
    return (
        <img className={styles.productImg} src={img ? img : noImage} alt="Product image" />
    );
}

/* se le obliga que venga el titulo, es una interfaz */
export const ProductTitle = ({ title }: { title: string }) => {
    return (
        <span className={styles.productDesciption}>{title}</span>
    );
}

interface ProductButtonsProps {
    counter: number;
    /* funcion que no regresa nada */
    increaseBy: (value: number) => void;
}

export const ProductButtons = ({counter, increaseBy}: ProductButtonsProps) => {
    return (
        <div className={styles.buttonsContainer}>
            <button
                className={styles.buttonMinus}
                onClick={() => increaseBy(-1)}
            >
                -</button>
            <div className={styles.countLabel}>{counter}</div>

            <button
                className={styles.buttonAdd}
                onClick={() => increaseBy(+1)}
            >
                +</button>
        </div>
    );
}

export const ProductCard = ({ children, product }: Props) => {

    const { counter, increaseBy } = useProduct();

    return (
        <div className={styles.productCard}>
            {children}

            {/* <ProductImage img={product.img} />
            <ProductTitle title={product.title} />

            <ProductButtons counter={counter} increaseBy={increaseBy} /> */}

        </div>
    )
}
