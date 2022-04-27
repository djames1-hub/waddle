import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { FormNavbar } from './../../components/Form';
import Form from 'react-bootstrap/Form';
import { Timestamp } from 'firebase/firestore';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { createListing } from '../../services/firebase/listings';
import { useFirebaseAuth } from '../../hooks';
import ItemInfoForm from './ItemInfoForm';

const SingleListing = () => {

    const { id, address } = useFirebaseAuth();
    const { category } = useParams();
    const { register, handleSubmit } = useForm();

    const formGroups = {
        "books": [
            {
                label: "Author",
                type: "text",
                placeholder: "Enter author's name ...",
                controlId: "authorControl",
                value: "author"
            },
            {
                label: "ISBN",
                type: "text",
                placeholder: "Enter ISBN ...",
                controlId: "isbnControl",
                value: "isbn"
            }
        ],
        "clothing": [
            {
                label: "Clothing's color",
                type: "color",
                controlId: "colorControl",
                value: "color"
            }
        ],
        "furniture": [
            {
                label: "Length",
                type: "number",
                placeholder: "Enter length ...",
                controlId: "lengthControl",
                value: "length"
            },
            {
                label: "Width",
                type: "number",
                placeholder: "Enter width ...",
                controlId: "widthControl",
                value: "width"
            },
            {
                label: "height",
                type: "number",
                placeholder: "Enter height ...",
                controlId: "heightControl",
                value: "height"
            }
        ],
        "electronics": [
            {
                label: "Model",
                type: "text",
                placeholder: "Enter model ...",
                controlId: "modelControl",
                value: "model"
            }
        ],
        "sports-gear": [
            {
                label: "Model",
                type: "text",
                placeholder: "Enter model ...",
                controlId: "modelControl",
                value: "model"
            }
        ]
    }
   


    const itemOptions = {
        "books": [
            {
                key: "condition",
                label: "Book's Condition",
                controlId: "conditionControl",
                selectLabel: "Choose book condition",
                options: {
                    "As new": "new",
                    "Fine": "fine",
                    "Fair": "fair",
                    "Poor": "poor"
                }
            }
        ],
        "clothing": [
            {
                key: "size",
                label: "Clothing's size",
                controlId: "sizeControl",
                selectLabel: "Choose size",
                options: {
                    "Extra Small": "xs",
                    "Small": "s",
                    "Medium": "m",
                    "Large": "l",
                    "Extra Large": "xl"
                }
            },
            {
                key: "condition",
                label: "Clothing's condition",
                controlId: "conditionControl",
                selectLabel: "Choose condition",
                options: {
                    "New With Tags (NWT)": "nwt",
                    "Excellent Used Condition": "euc",
                    "Good Used Condition": "guc",
                    "Very Used Condition": "vuc",
                    "Pre-owned": "pre-owned"
                }
            }
        ],
        "furniture": [
            {
                key: "condition",
                label: "Furniture's Conditon",
                controlId: "conditionControl",
                selectLabel: "Choose condition",
                options: {
                    "New Condition": "new",
                    "Used Condition": "used"
                }
            }
        ],
        "electronics": [
            {
                key: "condition",
                label: "Electronic's Condition",
                controlId: "conditionControl",
                selectLabel: "Choose condition",
                options: {
                    "New": "new",
                    "Open box": "open-box",
                    "Used": "used",
                    "Not Working": "nw"
                }
            }
        ],
        "sports-gear": [
            {
                key: "size",
                label: "Sport Gear's size",
                controlId: "sizeControl",
                selectLabel: "Choose size",
                options: {
                    "Extra Small": "xs",
                    "Small": "s",
                    "Medium": "m",
                    "Large": "l",
                    "Extra Large": "xl"
                }
            },
            {
                key: "condition",
                label: "Sport Gear's condition",
                controlId: "conditionControl",
                selectLabel: "Choose condition",
                options: {
                    "New With Tags (NWT)": "nwt",
                    "Excellent Used Condition": "euc",
                    "Good Used Condition": "guc",
                    "Very Used Condition": "vuc",
                    "Pre-owned": "pre-owned"
                }
            }
        ]
    }

    const tabs = [[
        { label: "Vital Info", active: true },
       ]
    ];

    

    const submitListing = ({ listingData, itemData }) => {

        let listing = {
            listingId: uuidv4(),
            seller: id,
            buyer: "",
            dateBought: new Timestamp.fromDate(new Date()),
            quantity: parseInt(listingData.quantity),
            isPurchased: false,
            shippingCost: 0.0,
            item: { ...itemData },
            shippingFrom: {...address },
            shippingTo: {},
            deliveryType: '',
            category,
            ...listingData
        };
        
        createListing(listing);
        
    };


    return (
        <>
        <FormNavbar tabs={tabs[0]} />
        <Form className="w-50 mx-auto border rounded-3 p-5" onSubmit={handleSubmit(submitListing)}>
        <ItemInfoForm register={register} formGroups={formGroups[category]} itemOptions={itemOptions[category]} />
            <ButtonToolbar className='d-flex justify-content-end'>
                <ButtonGroup>
                   <Button type='submit'>Submit</Button>
                </ButtonGroup>
            </ButtonToolbar>
        </Form>
        </>
    );
};

export default SingleListing;