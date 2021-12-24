import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductCardHOCProps } from '../interfaces/interfaces';

import { ProductTitle } from './ProductTitle';
import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';


export { ProductTitle } from './ProductTitle';
export { ProductButtons } from './ProductButtons';
export { ProductImage } from './ProductImage';

/* asignarle nuevas propiedades asi de esta manera */
export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
    /* capitalizado porque son componentes */
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
});

/* solo otra manera de exportarlo */
export default ProductCard;

