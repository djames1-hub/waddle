import React from "react";
import {Card, Row, Button, Col} from "react-bootstrap";

const PurchasePreview = (props) =>{

    //changes number to current format
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'usd'
    });

    const displayDate = (date) => {
        var today = props.purchase.dateBought;
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        return mm + '/' + dd + '/' + yyyy;
    }

    const displayAddress = (address) => {
        let apartment = "";
        if(address.apartment !== 0){
            apartment = " #" + address.apartment.toString() + " ";
        }
        return address.houseNumber + " " + address.street + apartment + ", " + address.town + ", " + address.state + ", " + address.country;
    }

    return (
        <Card style={{ height: '18rem', width: '70rem', marginLeft: 'auto', marginRight: 'auto', marginTop: '2rem' }}>
            <Card.Header>
                <Row>
                    <Col>
                        <Card.Title style={{textAlign: 'center'}}>{props.purchase.listingTitle}</Card.Title>
                        <Card.Subtitle style={{textAlign: 'center'}}>{formatter.format(props.purchase.price + props.purchase.shippingCost)}</Card.Subtitle>
                    </Col>
                    <Col>
                        <Card.Title style={{textAlign: 'center'}} >Purchased On</Card.Title>
                        <Card.Subtitle style={{textAlign: 'center'}} >{displayDate(props.product.dateBought)}</Card.Subtitle>
                    </Col>
                    <Col>
                        <Card.Title style={{textAlign: 'center'}}>Sent To</Card.Title>
                        <Card.Subtitle style={{textAlign: 'center'}} >{displayAddress(props.purchase.shippingTo)}</Card.Subtitle>
                    </Col>
                </Row>
            </Card.Header>
            <Card.Body>
                <Row>
                    <Col>
                        <Card.Img style={{ height: '10rem', width: 'auto' }} src={props.purchase.photo[0]} />
                    </Col>
                    <Col >
                        <Card.Text >{props.description}</Card.Text>
                    </Col>
                    <Col md={2} >
                        <Button onClick={() => {window.location.href = "/view-item/" + props.purchase.listingId}}>View Item</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default PurchasePreview;