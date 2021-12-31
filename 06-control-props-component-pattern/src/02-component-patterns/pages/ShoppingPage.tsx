import { useState } from 'react';
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import { products } from '../data/products';
import '../styles/custom-styles.css';
import { useShoppingCart } from '../hooks/useShoppingCart';



export const ShoppingPage = () => {

    const {shoppingCart, onProductCountChange} = useShoppingCart();

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
                            /* si todo esto es null el valor es 0 */
                            value={shoppingCart[product.id]?.count || 0}
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
                            value={product.count}
                            onChange={(evento) => onProductCountChange(evento)}
                        >
                            <ProductImage className="custom-image" />
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
