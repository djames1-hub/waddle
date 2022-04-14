import React, {useState, useEffect} from 'react';
import "./Home.css";

import { getListings } from './../../services/firebase/listings';

import { ListingView } from '../../components';
import { useFirebaseAuth } from '../../hooks/useFirebaseAuth';

function Home() {

    //Hook to get items
    const [previewComps, setPreviewComps] = useState(<div></div>);

    const user = useFirebaseAuth();
    console.log(user);

    async function getItems() {
        let products = await getListings("");
        let previewElements = <></>;
        if (products) {
            previewElements = products.map((product) => (
            <div key={product.item.title + product.id} className="previews-container">
                <ListingView title={ product.item.title } imageURL= { product.item.images[0] } price={ formatter.format(product.item.price)} id={product.id} />
            </div>
            ))
            return previewElements;
        }   
        return <div></div>
    }

    useEffect(() => {
        getItems()
        .then(data =>
          setPreviewComps(data)
        );
    }, [])

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'usd'
    })
    
    return <div className='previews-container'>
                { previewComps }
            </div>
    
}

export default Home;
