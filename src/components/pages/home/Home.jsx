import React from 'react';
import "./Home.css";
import Listing from '../../../objects/listing';
import Property from '../../../objects/property';
import Item from '../../../objects/item';

import PreviewProducts from '../PrevProduct/PreviewProducts';

const Home = () => {
    var itemList = new Listing("id", "Jack", "Matt", new Date(2022, 1, 3, 10, 33, 30, 0), 2,false, 0.0, "New York", new Item("NoteBook", 5.0, "This is a notebook for SSW", "Book",["Book"], ["https://tse2.mm.bing.net/th?id=OIP.7wxtEFZ8R6rlkRPQYfb_MwHaHa&pid=Api"], new Property(2, 2, 2, 2)))

    var products = [itemList, itemList, itemList, itemList, itemList, itemList];

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'usd'
    })
    
    const previewElements = products.map((product) => (
        <PreviewProducts title={ product.item.title } img= { product.item.images[0] } price={ formatter.format(product.item.price)} id={products.id} />
    ))

    return (
        <div className="home-container">
            <div className='previews-container'>
                { previewElements }
            </div>
        </div>
    )
}

export default Home