import React from "react";
import {Card, Row, Button} from "react-bootstrap";

const PurchasePreview = (props) =>{

    //changes number to current format
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'usd'
    });

    return <Card>
        <Card.Title>{props.purchase.listingTitle}</Card.Title>
        <Card.Subtitle>{formatter.format(props.purchase.price)}</Card.Subtitle>
        <Card.Body>
            <Row>
                <Card.Img src={props.purchase.photo[0]} />
                <Card.Text>{props.description}</Card.Text>
            </Row>
        </Card.Body>
        <Card.Footer>
            <Row>
                <Button >Leave Review</Button>
                <Button onClick={() => {window.location.href = "/view-item/" + props.purchase.listingId}}>View Item</Button>
            </Row>
        </Card.Footer>
    </Card>
}

export default PurchasePreview;