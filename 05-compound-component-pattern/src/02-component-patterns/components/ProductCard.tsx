import { useProduct } from '../hooks/useProduct';

import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';


export const ProductCard = () => {

    const {counter, increaseBy} = useProduct();

    return (
        <div className={styles.productCard}>
            <img className={styles.productImg} src="./coffee-mug.png" alt="Coffe mug" />
            {/* <img className={styles.productImg} src={noImage} alt="Coffe mug" />   */}

            <span className={styles.productDesciption}>Coffee Mug</span>

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


        </div>
    )
}
