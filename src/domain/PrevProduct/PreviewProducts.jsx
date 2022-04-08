import React from 'react';
import './PreviewProducts.css'

function PreviewProducts (props) {
    return (<a className="link" href={"/view-item/"+props.id}>
            <div className='preview-container'>
                <h2 className='preview-title'>{ props.title }</h2>
                <img className='preview-image' src= {props.img}/>
                <h3 className='preview-price'>{ props.price }</h3>
            </div>
        </a>
    )
}

export default PreviewProducts