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
                        <label  >

                            <b>Item Name:&nbsp;&nbsp;&nbsp;</b>
                            <br/>
                            <br/>
                            <input
                                placeholder="Type Item Name"
                                type="text"
                                id="inputText"
                            />

                        </label>
                    </form>

                    <br/>
                    <br/>
                    <br/>

                    {/* Category */}
                    <form >



                            {/* start of checklist */}
                            <div  className="box" >

                                <b >Category:&nbsp;&nbsp;&nbsp;</b>
                                <br/>


                            {/* books */}
                            <br/>
                            <input

                                type="checkbox"
                                id="inputCheckbox"

                            />
                            <label class="container">
                                &nbsp;
                                Book
                                &nbsp;&nbsp;

                            </label>


                            {/* clothing */}
                            <input

                               type="checkbox"
                               id="clothing"
                            />
                            <label htmlFor="clothing">
                                &nbsp;
                                Clothing
                                &nbsp;&nbsp;

                            </label>



                            {/* furniture */}
                            <input

                               type="checkbox"
                               id="furniture"
                                />


                            <label htmlFor="furniture">
                               Furniture
                                &nbsp;&nbsp;
                            </label>


                            {/* electronics */}
                            <input

                                type="checkbox"
                                id="electronics"
                            />
                            <label htmlFor="electronics">
                                Electronics
                                &nbsp;&nbsp;
                            </label>


                            {/* sports gear */}
                            <input

                                type="checkbox"
                                id="sportsGear"
                            />
                            <label htmlFor="sportsGear">
                                Sports Gear
                                &nbsp;&nbsp;
                            </label>



                            {/* other */}

                                <input
                                    type="checkbox"
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
                                id="inputText"
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
                                id="inputText"
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
                                id="inputText"
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
                                id="inputText"

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
                                id="inputPhoto"

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
