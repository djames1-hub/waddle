import React from 'react';
import "./Home.css";

import PreviewProducts from '../PrevProduct/PreviewProducts';

const Home = () => {

    // Dylan implent gather products from firebase
    const products = getProducts();
    const previewElements = products.map((product) => (
        <PreviewProducts title={ product.item.title } img= { product.item.images[0] } price={ product.item.price } />
    ))

    return (
        <div className="background">
            {/*
            another implementation of search bar,<br/>
            rectangle previews of items w clickable icons, <br/>
            list of categories to sort by on side
            */}
            <div className='previews-Container'>
                { previewElements }
            </div>
        </div>
    )
}

export default Home