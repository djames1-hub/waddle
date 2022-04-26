import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FormNavbar } from './../../components/Form';
import Form from 'react-bootstrap/Form';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import ListingInfoForm from '../../components/Form/ListingInfoForm';
import ReviewForm from '../../components/Form/ReviewForm';
import VariationsForm from './VariationsForm';
import { useForm } from 'react-hook-form';

const BulkListing = () => {

    const bookFormGroups = [
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
    ];



    const formGroups = {
        "books": bookFormGroups,
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

    
    

    const submitForm = (data) => {
        console.log(data);
    }


    const nextForm = () => {
        setFormIterator(formIterator + 1);
    }

    const lastForm = () => setFormIterator(formIterator - 1);
    

    const bookOptions = [
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
    ];

    const clothingOptions = [
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
    ];

    const furnitureOptions = [
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
    ];

    const electronicsOptions = [
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
    ];

    const sportsGearOptions = [
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
    ];

    const variationOptions = {
        "books": bookOptions,
        "clothing": clothingOptions,
        "furniture": furnitureOptions,
        "electronics": electronicsOptions,
        "sports-gear": sportsGearOptions
    }


    

    const forms = [
        <ListingInfoForm register={register} formGroups={formGroups[category]} />,
        <VariationsForm register={register} variationOptions={variationOptions[category]}/>,
        <ReviewForm />
    ]

    

    const tabs = [
        { label: "Crucial Info", active: true },
        { label: "Variations", active: false },
        { label: "Review", active: false }
    ];

    

    useEffect(() => {
        console.log(formIterator);
        setForm(forms[formIterator])
        
        
    }, [formIterator]);

    useEffect(() => {
        if (formIterator === forms.length - 1) {
            setIsSubmit(true); 
          
        }
    }, [formIterator]);

    return (
    
        <>
        <FormNavbar tabs={tabs} />
        <Form className="w-50 mx-auto border rounded-3 p-5" onSubmit={handleSubmit(submitForm)}>
            {form}
            <ButtonToolbar className='d-flex justify-content-end'>
                <ButtonGroup>
                    <Button onClick={lastForm}>Back</Button>
                    {!isSubmit ? <Button onClick={nextForm}>Continue</Button> : <Button type='submit'>Submit</Button>} 
                </ButtonGroup>
            </ButtonToolbar>
        </Form>
        </>
    );
};

export default BulkListing;