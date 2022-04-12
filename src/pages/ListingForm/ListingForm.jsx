import React, { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '../../../backend/server/init-firebase';
import './ListingForm.css';
import { createListing } from '../../../backend/client/firestore';
import Listing from '../../../objects/listing';
import Item from '../../../objects/item';
import { title } from 'process';
import Property from '../../../objects/property';
import User from '../../../objects/user';

const boxCategories = ["books", "clothing", "furniture", "electronics", "sports gear", "other"]

const ListingForm = () => {

    let categories = new Map();
    let userID = "";
    onAuthStateChanged(auth, async (user) => {
        if(user) {
            userID = user.uid;
        } 
    })
    

    const checkBoxes = boxCategories.map(category => (
        <div>
            <input type="checkbox" name="category" className="inputCheckbox" id={cat} value={category} onChange={() => checkCategory(cat)}/>
            <label >{category} </label>
        </div>
    ));

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
        let validate = validateFields(itemName,cats,price,keyWords,description,delivery,photo);
        if(validate === ""){
            //createNewItem function
            var image = document.getElementById("imageUpload").files[0]
            createListing(new Listing("", userID, "", new Date(), 1, false, 0.0, "", new Item(itemName, price, description, "", keyWords, [], new Property(0, 0, 0, 0))), image);
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
                    <div  className="box" >
                        <b>Category:</b>
                        {checkBoxes}
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
