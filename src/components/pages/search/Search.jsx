import React, {useState} from 'react';
import "./Search.css";
import '../../common/searchbar/Searchbar.css';
import Listing from '../../../objects/listing';
import Property from '../../../objects/property';
import Item from '../../../objects/item';
import { getListings } from '../../../backend/client/firestore';

import PreviewProducts from '../PrevProduct/PreviewProducts';

const Search = () => {

    const [previewComps, setPreviewComps] = useState(<div />);

    let searchParam = window.location.href.slice(29);
    console.log(searchParam);

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'usd'
    })

    var previewElements = <div></div>;

    (async function() {
        let products = await getListings(searchParam);
        console.log(products);
        previewElements = products.map((product) => (
            <div className="previews-container">
                <PreviewProducts title={ product.item.title } img= { product.item.images[0] } price={ formatter.format(product.item.price)} id={product.id} />
            </div>
        ))
        setPreviewComps(previewElements)

    }());

    return (
        <div className="home-container">
            <h1 className="header-container">{"Result for "+searchParam}</h1>
            <div className="category-display">
            </div>
            <div className='previews-container'>
                { previewComps }
            </div>
        </div>
    )
}

export default Search
