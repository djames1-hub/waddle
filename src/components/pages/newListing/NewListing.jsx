import React from 'react';
import "./NewListing.css";
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const NewListing = () => {


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


                            {/* books */}
                            <br/>
                            <br/>

                            <input

                                type="checkbox"
                                name="category"
                                className="inputCheckbox"
                                id="books"
                                value="books"

                            />

                            <label >

                                &nbsp;
                                Book
                                &nbsp;&nbsp;

                            </label>


                            {/* clothing */}
                            <input

                               type="checkbox"
                               name="category"
                               value="clothing"
                               id="clothing"

                            />

                            <label>

                                &nbsp;
                                Clothing
                                &nbsp;&nbsp;

                            </label>



                            {/* furniture */}
                            <input

                               type="checkbox"
                               name="category"
                               value="furniture"
                               id="furniture"

                                />


                            <label >
                               Furniture
                                &nbsp;&nbsp;
                            </label>


                            {/* electronics */}
                            <input

                                type="checkbox"
                                name="category"
                                value="electronics"
                                id="electronics"

                            />

                            <label >
                                Electronics
                                &nbsp;&nbsp;
                            </label>


                            {/* sports gear */}
                            <input

                                type="checkbox"
                                name="category"
                                value="sportsGear"
                                id="sportsGear"

                            />

                            <label >
                                Sports Gear
                                &nbsp;&nbsp;
                            </label>



                            {/* other */}

                                <input
                                    type="checkbox"
                                    name="category"
                                    value="other"
                                    id="other"
                                />
                                <label htmlFor="other" >
                                    Other
                                </label>

                                <br/>
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

                        &nbsp;&nbsp;&nbsp;

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
