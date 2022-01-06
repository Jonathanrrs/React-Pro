# JR-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Jonathan Ruiz

## Ejemplo

```
import {ProductCard,ProductImage, ProductTitle, ProductButtons} from 'jr-product-card';
```

```
<ProductCard
    product={product}
    initialValues={{
        count: 4,
        // maxCount: 10
    }}
>
    {
        ({reset, increaseBy, isMaxCountReached,count}) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </>
        )
    }
</ProductCard>
```