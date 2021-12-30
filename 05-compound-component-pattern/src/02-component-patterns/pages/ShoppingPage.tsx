import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';

const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}

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
                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title title={'Café'} />
                    <ProductCard.Buttons />
                </ProductCard>

                <ProductCard
                    product={product}
                    /* esto puede ser cualquier nombre, es una clase personalizada */
                    className="bg-dark text-white"
                >
                    <ProductImage className="custom-image" />
                    <ProductTitle className="text-bold" />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>

            </div>
        </div>
    )
}
