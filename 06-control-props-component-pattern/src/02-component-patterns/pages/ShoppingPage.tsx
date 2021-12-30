import { useState } from 'react';
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

/* se puede exteneder en una interface como una clase */
interface ProductInCart extends Product {
    count: number;
}

export const ShoppingPage = () => {

    /* va entre llaves, no es un arreglo, viene una X cantidad de llaves dentro el objeto */
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {

        setShoppingCart(oldShoppingCart => {

            if (count === 0) {

                /* queremos mantener el resto */
                const { [product.id]: toDelete, ...rest } = oldShoppingCart;
                return rest;
            }

            return {
                ...oldShoppingCart,
                /* computado */
                [product.id]: { ...product, count }
            }
        })

    }


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
                            onChange={(evento) => onProductCountChange(evento)}
                        >
                            <ProductImage className="custom-image" />
                            <ProductTitle className="text-bold" />
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>
                    ))
                }
            </div>
            <div className='shopping-cart'>

                {
                    Object.entries(shoppingCart).map(([key, product]) => (
                        <ProductCard
                            key={key}
                            product={product}
                            className="bg-dark text-white"
                            style={{ width: '100px' }}
                        // onChange={() => onProductCountChange()}
                        >
                            <ProductImage className="custom-image" />
                            <ProductTitle />
                            <ProductButtons
                                className="custom-buttons"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            />
                        </ProductCard>

                    ))
                }


            </div>
        </div>
    )
}
