import React, {useState} from 'react';
import "./Home.css";

import { getListings } from './../../services/firebase/listings';

import { ListingView } from '../../components';

function Home() {

    const [previewComps, setPreviewComps] = useState(<div />);

    (async function() {
        console.log("her");
        let products = await getListings("");
        
        let previewElements = <></>;
        if (products) {
            previewElements = products.map((product) => (
            <div className="previews-container">
                <ListingView title={ product.item.title } imageURL= { product.item.images[0] } price={ formatter.format(product.item.price)} id={product.id} properties={product.properties} />
            </div>
            ))
            setPreviewComps(previewElements)

        }
        
    }());

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'usd'
    })
    
    return <div className="home-container">
            <br/>
            <br/>
            <h1 className="header-container">Welcome to Waddle!</h1>
            <div className="category-display">
                <div className="category-buttons">
                    <button className="category-title">Books</button>
                    <button className="category-title">Clothing</button>
                    <button className="category-title">Furniture</button>
                    <button className="category-title">Electronics</button>
                    <button className="category-title">Sports&nbsp;Gear</button>
                </div>
            </div>
            <br/>
            <div className='previews-container'>
                { previewComps }
            </div>
        </div>
    
}

export default Home;
