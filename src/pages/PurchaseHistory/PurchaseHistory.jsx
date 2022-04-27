import React, {useState, useEffect} from "react";

import { auth } from '../../services/firebase/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import { useFirebaseAuth } from "../../hooks";
import PurchasePreview from "./PurchasePreview";
import {getListing} from "../../services/firebase/listings/listings";
import "./PurchaseHistory.css"

const PurchaseHistory = () =>{

    //Hook to get items
    const [previewComps, setPreviewComps] = useState(<div></div>);

    onAuthStateChanged(auth, async (user) => {
        if(user) {
        }else{
            window.location.href = "/login";
        } 
    });
    
    const user = useFirebaseAuth();
    
    //called repetedly
    useEffect(() => {
        console.log(user.purchaseHistory);
        const fetchData = async () => {
            let items = [];
            if(user.purchaseHistory !== undefined){
                for(let item of user.purchaseHistory){
                    let tempItem = await getListing(item);
                    items = [...items, tempItem];
                }
                let purchaseElements = items.map((purchase) => (
                    <PurchasePreview purchase={purchase} />
                ));
                setPreviewComps(purchaseElements);
            }
        }
        return fetchData
    },[user.purchaseHistory])


    return <div>
        {previewComps}
    </div>;
}

export default PurchaseHistory;