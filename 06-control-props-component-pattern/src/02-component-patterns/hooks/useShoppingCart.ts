import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";


export const useShoppingCart = () => {

    
    /* va entre llaves, no es un arreglo, viene una X cantidad de llaves dentro el objeto */
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
        
        
        setShoppingCart(oldShoppingCart => {

            const productInCart: ProductInCart = oldShoppingCart[product.id] || {...product, count: 0};

            if(Math.max(productInCart.count + count, 0) > 0) {
                productInCart.count += count;
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart
                }
            }

            /* borrar el producto */
            const { [product.id]: toDelete, ...rest } = oldShoppingCart;
                return rest;


            /* esta era otra manera */
            // if (count === 0) {

            //     /* queremos mantener el resto */
            //     const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            //     return rest;
            // }

            // return {
            //     ...oldShoppingCart,
            //     /* computado */
            //     [product.id]: { ...product, count }
            // }
        })

    }

    return {
        shoppingCart,
        onProductCountChange
    }
}