import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import { products } from '../data/products';
import '../styles/custom-styles.css';


const product = products[0];


export const ShoppingPage = () => {

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <ProductCard
                key={product.id}
                product={product}
                /* esto puede ser cualquier nombre, es una clase personalizada */
                className="bg-dark text-white"
                initialValues={{
                    count: 4,
                    maxCount: 10
                }}

            >
                {
                    (mensaje) => (
                        <>
                            <ProductImage className="custom-image" />
                            <ProductTitle className="text-bold" />
                            <ProductButtons className="custom-buttons" />
                            <h1>{mensaje}</h1>
                        </>
                    )
                }
            </ProductCard>



        </div>
    )
}
