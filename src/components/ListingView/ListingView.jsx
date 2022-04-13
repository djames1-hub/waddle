import React from 'react';
import './ListingView.css';


// TODO: add getListing to get all listing information
const ListingView = ({ id, title, imageURL, price }) => {
   
    return (<a className="link" href={"/view-item/" + id}>
            <div className='preview-container'>
                <h2 className='preview-title'>{ title }</h2>
                <img className='preview-image' src={imageURL}/>
                <h3 className='preview-price'>{ price }</h3>
            </div>
        </a>
    );
}

export default ListingView;