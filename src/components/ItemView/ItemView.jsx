import React, {useState} from 'react';
import "./ItemView.css"

import { getListing } from "./../../services/firebase/listings"

function ViewItem(){
    
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);

    var id = window.location.href.slice(-20);
    console.log(id);
    var listing = getListing(id);
    var item = listing.item;

    (async function() {
        let listing = await getListing(id);
        let item = listing.item;
        setTitle(item.title);
        setDescription(item.description);
        setImage(item.images[0]);
        setPrice(item.price);
    }());

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'usd'
    })
    return <div className="item-container">
        <h1 className="item-title">{title}</h1>
        <img src={image} className="item-image"/>
        <h3 className="price">{formatter.format(price)}</h3>
        <h3 classname="description" >{description}</h3>
    </div>
}

export default ViewItem;