import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

/*
Dylan and Matt please connect firebase to the products part just below
*/

const products = [
    {id: 1, name: 'notebook', description: 'book of notes', price: '$5', photo: 'https://aph.nyc3.digitaloceanspaces.com/app/uploads/2019/04/26160613/1-07853-00_Mini_Spiral_Notebooks-600x505.jpg'}

]

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products