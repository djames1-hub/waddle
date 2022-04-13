import React, {useState, useEffect} from 'react';

import './Search.css';
import { ListingView } from './../../components'
import { getListings } from './../../services/firebase/listings';


const Search = () => {

    const [previewComps, setPreviewComps] = useState(<div />);

    let searchParam = window.location.href.slice(29);
    console.log(searchParam);

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'usd'
    })

    var previewElements = <div></div>;
    async function getItems() {
        let products = await getListings(searchParam);
        console.log("products");
        previewElements = products.map((product) => (
            <div className="previews-container">
                <ListingView title={ product.item.title } img= { product.item.images[0] } price={ formatter.format(product.item.price)} id={product.id} />
            </div>
        ))
        setPreviewComps(previewElements)
    }

    useEffect(() => {
        getItems()
        .then(data =>
          setPreviewComps(data)
        );
    }, [])

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

export default Search;
