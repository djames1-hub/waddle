import React from 'react';
import './ListingView.css';
import { Listing, getListing } from './../../objects/listing';

const ListingView = async ({ listingId, title, imageURL, price }) => {
    const listing = await getListing(listingId);
    return (<a className="link" href={"/view-item/"+ listingId}>
            <div className='preview-container'>
                <h2 className='preview-title'>{ title }</h2>
                <img className='preview-image' src={imageURL}/>
                <h3 className='preview-price'>{ price }</h3>
            </div>
        </a>
    )
}

export default ListingView;