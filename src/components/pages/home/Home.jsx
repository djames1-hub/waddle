import React from 'react';
import "./Home.css";
import '../../common/searchbar/Searchbar.css';
import Listing from '../../../objects/listing';
import Property from '../../../objects/property';
import Item from '../../../objects/item';


import PreviewProducts from '../PrevProduct/PreviewProducts';

const Home = () => {

    var itemList1 = new Listing(
        "id",
        "Jack",
        "Matt",
        new Date(2022, 1, 3, 10, 33, 30, 0),
        2,
        false,
        0.0,
        "New York",
        new Item(
            "SSW315 NoteBook",
            5.0,
            "This is a notebook for SSW",
            "Book",
            ["Book"],
            ["https://ii.sundancecatalog.com/fcgi-bin/iipsrv.fcgi?FIF=/images/sundance/source/products/en_us/source/70807.tif&wid=766&cvt=jpeg"],
            new Property(2, 2, 2, 2)
        )
    )


    var itemList2 =
        new Listing("id", "Mikayla", "Matt",
        new Date(2022, 1, 3, 10, 33, 30, 0),
        1, false, 0.0, "New York",
        new Item("Unisex Stevens Baseball Hat",
            12.0,
            "One size fits all, Worn Once",
            "Clothing",
            ["Clothing"],
            ["https://images-na.ssl-images-amazon.com/images/I/71DLx9KJY8L._AC_UX679_.jpg"],
            new Property(2, 2, 2, 2)
        )
    )

    var itemList3 =
        new Listing("id", "Dylan", "Mikayla",
            new Date(2022, 1, 3, 10, 33, 30, 0),
            1, false, 0.0, "New York",
            new Item("Crocheted Bulky Scarf",
                12.0,
                "One size fits all, Worn Once",
                "Clothing",
                ["Clothing"],
                ["https://images-na.ssl-images-amazon.com/images/I/71DLx9KJY8L._AC_UX679_.jpg"],
                new Property(2, 2, 2, 2)
            )
        )


    var products = [itemList1, itemList2, itemList2, itemList1, itemList1, itemList2];

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'usd'
    })

    const previewElements = products.map((product) => (
        <div className="previews-container">
        <PreviewProducts
            title={ product.item.title }
            img= { product.item.images[0] }
            price={ formatter.format(product.item.price)}
            id={products.id} /></div>
    ))

    return (
        <div className="home-container">

            <br/>
            <br/>

            <h1 className="header-container">Welcome to Waddle!</h1>

            <div className="category-display">
                <div className="category-buttons">
                <button>Books</button>
                <button>Clothing</button>
                <button>Furniture</button>
                <button>Electronics</button>
                <button>Sports&nbsp;Gear</button>

                </div>
            </div>

            <br/>

            <div className='previews-container'>
                { previewElements }
            </div>



        </div>
    )
}

export default Home
