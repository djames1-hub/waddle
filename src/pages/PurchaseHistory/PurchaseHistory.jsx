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
    /*
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
    </div>;*/
    return <div>
        <h3 className="purchase-history-title">Your Orders</h3>
        <PurchasePreview price={10} date={new Date(Date.now())} description={"This is a software engineering book"} title={"Notebook"} img={"https://firebasestorage.googleapis.com/v0/b/waddle-35ec3.appspot.com/o/images%2FNotebook.jpg?alt=media&token=b36dede1-cd15-43c1-8fac-8e1adb54a6ce"} />
        <PurchasePreview price={10} date={new Date(Date.now())} description={"This is a software engineering book"} title={"Notebook"} img={"https://firebasestorage.googleapis.com/v0/b/waddle-35ec3.appspot.com/o/images%2FNotebook.jpg?alt=media&token=b36dede1-cd15-43c1-8fac-8e1adb54a6ce"} />
        <PurchasePreview price={10} date={new Date(Date.now())} description={"This is a software engineering book"} title={"Notebook"} img={"https://firebasestorage.googleapis.com/v0/b/waddle-35ec3.appspot.com/o/images%2FNotebook.jpg?alt=media&token=b36dede1-cd15-43c1-8fac-8e1adb54a6ce"} />
        <PurchasePreview price={10} date={new Date(Date.now())} description={"This is a software engineering book"} title={"Notebook"} img={"https://firebasestorage.googleapis.com/v0/b/waddle-35ec3.appspot.com/o/images%2FNotebook.jpg?alt=media&token=b36dede1-cd15-43c1-8fac-8e1adb54a6ce"} />
        <PurchasePreview price={10} date={new Date(Date.now())} description={"This is a software engineering book"} title={"Notebook"} img={"https://firebasestorage.googleapis.com/v0/b/waddle-35ec3.appspot.com/o/images%2FNotebook.jpg?alt=media&token=b36dede1-cd15-43c1-8fac-8e1adb54a6ce"} />
    </div>
}

export default PurchaseHistory;