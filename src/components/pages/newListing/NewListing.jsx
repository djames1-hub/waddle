import React, { useState } from 'react';
import "./NewListing.css";
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const boxCategories = ["books", "clothing", "furniture", "electronics", "sports gear", "other"]

const NewListing = () => {

    var categories = new Map();
    
    const checkBoxes = boxCategories.map((cat) => (
        <div>
            <input type="checkbox" name="category" className="inputCheckbox" id={cat} value={cat} onChange={() => checkCategory(cat)}/>
            <label >{cat} </label>
        </div>  
    ))

    const checkCategory = (category) => {
        if(categories.has(category)){
            categories.delete(category);
        }else{
            categories.set(category, "MEOW");
        }
    }

    const submitItem = () => {
        //TODO: display error message, add create new item function once Dylan's finished up
        /*let cats = Array.from(categories.keys());
        let validate = validateFields(item);
            if(validate === ""){
                //createNewItem function
            }else{
                //display error
            }*/
    }

    // create hooks to monitor input changes
    //TODO: add hooks for other text inputs
    const [itemName, setItemName] = useState("");
    
    //

    const validateFields = () => {
       /* if(itemName.length === 0 || cats.length === 0){

        }*/
        //TODO: check if fields are empty, check if cats array has a lenght of 0 
        //if any are exmpty, return a string that tells the user to input data in all fields
        //else return empty string
    }

        return (
            <div className="background">
                <body>

                <br/>
                <br/>
                <br/>

                <h1 className="header-box"><b>Create New Listing</b></h1>

                <br/>
                <br/>
                <br/>

                {/* Start of Input  */}
                <div>

                    {/* Item Name */}
                    <form className="box" >

                        <label>

                            <b>
                                Item Name:
                            </b>

                            <br/>
                            <br/>

                            <input
                                placeholder="Type Item Name"
                                name="category"
                                type="text"
                                className="inputText"  
                                onChange={event => setItemName(event.target.value)}                     
                            />
                        </label>

                    </form>
                    <br/>
                    <br/>
                    <br/>


                    {/* Category */}
                    <form >

                            {/* start of checkbox */}
                            <div  className="box" >

                            <b>
                                Category:
                            </b>
                            {checkBoxes}
                            {/* end of category checkbox */}
                            </div>


                    {/* end of category section */}
                    </form>

                    <br/>
                    <br/>
                    <br/>


                    {/* Price */}
                    <form className="box">
                        <label >

                            <b>Price:</b>
                            &nbsp;&nbsp;&nbsp;
                            <br/>
                            <br/>
                            <input
                                placeholder="Type Price in Dollars"
                                type="text"
                                className="inputText"
                            />

                        </label>

                    </form>

                    <br/>
                    <br/>
                    <br/>


                    {/* Key Words */}

                    <form className="box">
                        <label>

                            <b>Key Words:</b>
                            &nbsp;&nbsp;&nbsp;
                            <br/>
                            <br/>

                            <input
                                placeholder="Type Keywords for Item"
                                type="text"
                                className="inputText"
                            />

                        </label>
                    </form>

                    <br/>
                    <br/>
                    <br/>

                    {/* Preferred Delivery Process */}

                    <form className="box">
                        <label>

                            <b>Preferred Delivery Process:</b>
                            &nbsp;&nbsp;&nbsp;
                            <br/>
                            <br/>

                            <input
                                placeholder="Type Preferred Delivery Process"
                                type="text"
                                className="inputText"

                            />

                        </label>
                    </form>

                    <br/>
                    <br/>
                    <br/>

                    {/* Description*/}

                    <form className="box">
                        <label>

                            <b>Description:</b>
                            &nbsp;&nbsp;&nbsp;
                            <br/>
                            <br/>

                            <input
                                placeholder="Type Description"
                                type="text"
                                className="inputText"

                            />
                        </label>
                    </form>

                    <br/>
                    <br/>
                    <br/>

                    {/* Image / Save url  */}
                    <form className="box">
                        <label>

                            <b>Photo:</b>
                            &nbsp;&nbsp;&nbsp;
                            <br/>
                            <br/>

                            <input
                                placeholder="Select Image"
                                type="file"
                                className="inputPhoto"

                            />

                        </label>
                    </form>
                {/* end of all data input */}
                </div>
            {/* end of first div */}
                <br/>
                <br/>
                <br/>


                <div className="icons">
                    {/* icons */}
                    <div >
                        <FaCheck />
                        <input name="submit" className="submit-button" type="button" value="Submit" onClick={() => submitItem()}/>
                        <FaTimes />
                    </div>
                {/* end of icon box*/}
                </div>
                </body>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        )
    }

export default NewListing;
