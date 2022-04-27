import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { FormNavbar } from './../../components/Form';
import Form from 'react-bootstrap/Form';
import { Timestamp } from 'firebase/firestore';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import ListingInfoForm from './ListingInfoForm';
import VariationsForm from './VariationsForm';
import { useForm } from 'react-hook-form';
import { createListing } from '../../services/firebase/listings';
import { useFirebaseAuth } from '../../hooks';

const BulkListing = () => {

    const { id, address } = useFirebaseAuth();

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
        "clothing": [],
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
    const { category } = useParams();
    const { register, handleSubmit } = useForm();
    const [form, setForm] = useState(<ListingInfoForm register={register} formGroups={formGroups[category]} />);
    const [formIterator, setFormIterator] = useState(0);
    const [isSubmit, setIsSubmit] = useState(false);
    const [isFirstForm, setIsFirstForm] = useState(true);
    
    const nextForm = () => setFormIterator(formIterator + 1);
    

    const lastForm = () => setFormIterator(formIterator - 1);
   

    const variationOptions = {
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
                key: "color",
                label: "Clothing's color",
                controlId: "colorControl",
                isColor: true,
                options: {
                    "color": "color"
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
    const forms = [
        <ListingInfoForm register={register} formGroups={formGroups[category]} />,
        <VariationsForm register={register} variationOptions={variationOptions[category]}/>
    ]

    const tabs = [[
        { label: "Crucial Info", active: true },
        { label: "Variations", active: false },
       ],
        [
            { label: "Crucial Info", active: false },
            { label: "Variations", active: true },
        ]
    ];

    

    useEffect(() => {
        setForm(forms[formIterator])
    }, [formIterator]);

    useEffect(() => {
        if (formIterator === forms.length - 1) {
            setIsSubmit(true); 
        } else {
            setIsSubmit(false);
        }

        if (formIterator === 0) {
            setIsFirstForm(true);
        } else {
            setIsFirstForm(false);
        }
    }, [formIterator]);

    const submitListing = ({ listingData, itemData }) => {

        const { price } = listingData; 
        const { variations } = itemData;
        const quantity =  variations.reduce((pre, cur) => { return pre + parseInt(cur.quantity) }, 0);
    
        let listing = {
            listingId: uuidv4(),
            seller: id,
            buyer: "",
            dateBought: new Timestamp.fromDate(new Date()),
            quantity,
            isPurchased: false,
            shippingCost: 0.0,
            item: { ...itemData },
            shippingFrom: {...address },
            shippingTo: {},
            deliveryType: '',
            category,
            price: parseInt(price),
            ...listingData
        };
        
        createListing(listing);
        
    };


    return (
        <>
        <FormNavbar tabs={tabs[formIterator]} />
        <Form className="w-50 mx-auto border rounded-3 p-5" onSubmit={handleSubmit(submitListing)}>
            {form}
            <ButtonToolbar className='d-flex justify-content-end'>
                <ButtonGroup>
                    {isFirstForm ? <></> : <Button onClick={lastForm}>Back</Button> }
                    {!isSubmit ? <Button onClick={nextForm}>Continue</Button> : <Button type='submit'>Submit</Button>} 
                </ButtonGroup>
            </ButtonToolbar>
        </Form>
        </>
    );
};

export default BulkListing;