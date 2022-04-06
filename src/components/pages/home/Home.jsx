import React from 'react';
import "./Home.css";
import '../../common/searchbar/Searchbar.css';
import Listing from '../../../objects/listing';
import Property from '../../../objects/property';
import Item from '../../../objects/item';
import { getListings } from '../../../backend/client/firestore';


import PreviewProducts from '../PrevProduct/PreviewProducts';

const Home = () => {

    let products = getListings("");

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'usd'
    })

    var previewElements = <div></div>

    const setUpElements = async () => {
        let products = await getListings("");
        previewElements = products.map((product) => (
            <div className="previews-container">
                <PreviewProducts title={ product.item.title } img= { product.item.images[0] } price={ formatter.format(product.item.price)} id={products.id} />
            </div>
        ))
    }

    return (
        <div className="home-container">
            <h1 className="header-container">Welcome to Waddle!</h1>
            <div className="category-display">
            </div>
            <div className='previews-container'>
                { previewElements }
            </div>
        </div>
    )
}

export default Home
