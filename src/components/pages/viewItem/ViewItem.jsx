import React from 'react';

import Item from "../../../objects/item";
import Listing from "../../../objects/listing";
import Property from "../../../objects/property";

function ViewItem(){

    var listing = new Listing("Jack", "Matt", new Date(2022, 1, 3, 10, 33, 30, 0), 2,false, 0.0, "New York", new Item("NoteBook", 5.0, "This is a notebook for SSW", "Book",["Book"], ["https://tse2.mm.bing.net/th?id=OIP.7wxtEFZ8R6rlkRPQYfb_MwHaHa&pid=Api"], new Property(2, 2, 2, 2)))
    var item = listing.item;

    return <div>
        <h1 className="item-title">{item.title}</h1>
        <img src={item.images[0]} />
        <h3 className="price">{item.price}</h3>
        <h3 classname="description" >{item.description}</h3>
    </div>
}

export default ViewItem;