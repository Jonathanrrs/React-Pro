import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';
import { Product } from '../interfaces/interfaces';

const product1 = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}
const product2 = {
    id: '2',
    title: 'Coffee Mug - Meme',
    img: './coffee-mug2.png'
}

const products: Product[] = [product1, product2];

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {
                    products.map(product => (

                        <ProductCard
                            key={product.id}
                            product={product}
                            /* esto puede ser cualquier nombre, es una clase personalizada */
                            className="bg-dark text-white"
                        >
                            <ProductImage className="custom-image" />
                            <ProductTitle className="text-bold" />
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>
                    ))
                }
            </div>
            <div className='shopping-cart'>
                <ProductCard
                    product={product2}
                    /* esto puede ser cualquier nombre, es una clase personalizada */
                    className="bg-dark text-white"
                    style={{width: '100px'}}
                >
                    <ProductImage className="custom-image" />
                    <ProductTitle/>
                    <ProductButtons className="custom-buttons" />
                </ProductCard>
                <ProductCard
                    product={product1}
                    /* esto puede ser cualquier nombre, es una clase personalizada */
                    className="bg-dark text-white"
                    style={{width: '100px'}}
                >
                    <ProductImage className="custom-image" />
                    <ProductTitle/>
                    <ProductButtons className="custom-buttons" />
                </ProductCard>
            </div>
        </div>
    )
}
