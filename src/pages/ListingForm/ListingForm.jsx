import React, { useEffect, useState } from 'react';
import ButtonGroup  from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { useForm } from 'react-hook-form';
import { Timestamp } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';


import { createListing } from './../../services/firebase/listings';
// import './ListingForm.css';

import { useFirebaseAuth } from '../../hooks/useFirebaseAuth';
import { LoadingScreen } from '../../components';
import SingleListingForm from './SingleListingForm';
import BulkListingForm from './BulkListingForm';



const ListingForm = () => {

    const { id, address } = useFirebaseAuth();
    const [form, setForm] = useState(<LoadingScreen />);
    const { register, handleSubmit, reset } = useForm();
    const [radioValue, setRadioValue] = useState(true);

    const handlers = { handleCategoryChange, submitListing, register, handleSubmit }

    useEffect(() => {
        if (id) {
            setForm(<SingleListingForm { ...handlers }/>);
        }
    }, [id]);

    useEffect(() => {
        (radioValue === 1) ? setForm(<SingleListingForm { ...handlers }/>) : setForm(<BulkListingForm { ...handlers }/>);
    }, [radioValue]);


    const submitListing = ({ listingData, itemData }) => {
  
        let listing = {
            listingId: uuidv4(),
            seller: id,
            buyer: "",
            dateBought: new Timestamp.fromDate(new Date()),
            quantity: 1,
            isPurchased: false,
            shippingCost: 0.0,
            item: { itemId: uuidv4(), itemName: itemData.itemName, props: itemData.props },
            shippingFrom: {...address },
            category,
            ...listingData
        };
        
        createListing(listing);
        
    }

    const [category, setCategory] = useState("");

    const handleCategoryChange = (category) => {
        setCategory(category);
    }

    const handleChange = (r) => {
        setRadioValue(r[1]);
        reset({});
    }

    return (
        <>
            <ButtonToolbar className="w-50 mx-auto">
                <ToggleButtonGroup  type="checkbox" value={radioValue} onChange={handleChange} className="mb-3 ms-5 mt-5">
                    <ToggleButton id="tbg-btn-1" value={1}>
                        Single Listing
                    </ToggleButton>
                    <ToggleButton id="tbg-btn-2" value={2}>
                        Bulk Listing
                    </ToggleButton>
                </ToggleButtonGroup>
            </ButtonToolbar>
            {form}
        </>
    );
}

export default ListingForm;
