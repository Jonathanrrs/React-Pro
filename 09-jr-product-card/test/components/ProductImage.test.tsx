import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';


describe('Pruebas en ProductImage', () => {
   
    test('Debe mostrar el componente correctactemente con la imagen personalizada', () => {
        
        const wrapper = renderer.create(
            <ProductImage img="https://hola.jpg" />
        );
        
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('Debe mostrar el component con la imagen del producto ', () => {
       
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage />
                    )
                } 
            </ProductCard>
        );
        
        expect(wrapper.toJSON()).toMatchSnapshot();
        
    });
    
});
