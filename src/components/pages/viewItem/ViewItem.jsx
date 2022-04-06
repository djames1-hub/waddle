import React from 'react';

import Item from "../../../objects/item";
import Listing from '../../../objects/listing';
import Property from '../../../objects/property';

import {getListing} from "../../../backend/client/firestore"

function ViewItem(){
    
    var id = window.location.href.slice(-16);
    var listing = getListing(id);
    var item = listing.item;

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'usd'
    })

    return <div>
        <h1 className="item-title">{item.title}</h1>
        <img src={item.images[0]} />
        <h3 className="price">{formatter.format(item.price)}</h3>
        <h3 classname="description" >{item.description}</h3>
    </div>
}

export default ViewItem;