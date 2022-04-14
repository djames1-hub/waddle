import React, { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { v4 as uuidv4 } from 'uuid';

import { auth } from './../../services/firebase/firebase-config';
import { createListing, Listing, Item, Property } from './../../services/firebase/listings';
import './ListingForm.css';
import ItemPropertiesForm from './ItemPropertiesForm';
import { Timestamp } from 'firebase/firestore';
import { useFirebaseAuth } from '../../hooks/useFirebaseAuth';



const boxCategories = ["books", "clothing", "furniture", "electronics", "sports gear"];

const ListingForm = () => {

    let categories = new Map();
    const user = useFirebaseAuth();
    const userId = user.uid;

    const checkCategory = (category) => {
        if(categories.has(category)){
            categories.delete(category);
        }else{
            categories.set(category, "MEOW");
        }
    }

    const submitItem = () => {
        //TODO: display error message, add create new item function once Dylan's finished up
        let cats = Array.from( categories.keys());
        console.log(properties);
        let validate = validateFields(itemName,cats,price,keyWords,description,delivery,photo);
        if(validate === ""){
            //createNewItem function
            let image = document.getElementById("imageUpload").files[0];
            let listing = {
                listingId: uuidv4(),
                seller: userId,
                buyer: "",
                dateBought: new Timestamp.fromDate(new Date()),
                quantity: 1,
                isPurchased: false,
                shippingCost: 0.0,
                item: {
                    title: "",
                    price,
                    description,
                    category: "",
                    keyWords,
                    images: [],
                    properties
                },
                shippingFrom: {
                    street: "",
                    city: "",
                    apartmentNumber: 0,
                    houseNumber: 0,
                    country: ""
                },
            }
            createListing(listing, image);
        }
        else{

        }
    }

    // create hooks to monitor input changes
    const [itemName, setItemName] = useState("");
    const [price, setPrice] = useState("");
    const [keyWords, setKeyWords] = useState("");
    const [delivery, setDelivery] = useState("");
    const [description, setDescription] = useState("");
    const [photo, setPhoto] = useState("");
    const cats = Array.from( categories.keys());


    const validateFields = (itemName,cats,price,keyWords,delivery,description,photo) => {
        if(itemName.length === 0){
            alert("Please fill out all forms");
        }
        else{
            return "";
        }
    }

    const [properties, setProperties] = useState({});


    return (
        <div className="background">
            <body>
            <h1 className="header-box"><b>Create New Listing</b></h1>
            <div>
                <form className="box" >
                    <div className="form-input">
                        <b>Item Name:</b>
                        <input placeholder="Type Item Name" type="text" className="inputText" onChange={event => setItemName(event.target.value)}/>
                    </div>
                </form>
                <form >
                    <div className="box" >
                        <b>Category:</b>
                        {<ItemPropertiesForm key={setProperties.toString()} onChange={(properties) => { setProperties(properties)}}/>}
                    </div>
                </form>
                <form className="box">
                    <div className="form-input">
                        <b>Price:</b>
                        <input placeholder="Type Price in Dollars" type="text" className="inputText" onChange={event => setPrice(event.target.value)} />
                    </div>
                </form>
                <form className="box">
                    <div className="form-input">

                        <b>Key Words:</b>
                        <input placeholder="Type Keywords for Item" type="text" className="inputText" onChange={event => setKeyWords(event.target.value)} />
                    </div>
                </form>
                <form className="box">
                    <div className="form-input">
                        <b>Preferred Delivery Process:</b>
                        <input placeholder="Type Preferred Delivery Process" type="text" className="inputText" onChange={event => setDelivery(event.target.value)}/>
                    </div>
                </form>
                <form className="box">
                    <div className="form-input">

                        <b>Description:</b>
                        <input placeholder="Type Description" type="text" className="inputText" onChange={event => setDescription(event.target.value)} />
                    </div>
                </form>
                <form className="box">
                    <div className="form-input">
                        <b>Photo:</b>
                        <input
                            placeholder="Select Image" type="file" id="imageUpload" className="inputPhoto" onChange={event => setPhoto(event.target.value)} />
                    </div>
                </form>
            </div>
            <div >
                <div >
                    < input name="submit" className="submit-button" type="button" value="Submit" onClick={() => submitItem()} />
                </div>
            </div>
            </body>
        </div>
    )
}

export default ListingForm;
