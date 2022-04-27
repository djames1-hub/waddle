import React from "react";
import {Card, Row, Button, Col} from "react-bootstrap";

const ListingPreview = ({ item }) =>{

    //changes number to current format
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'usd'
    });

    return (
        <Card>
            <Card.Header>
                <Row>
                    <Col>
                        <Card.Title>{item.listingTitle}</Card.Title>
                        <Card.Subtitle>{formatter.format(item.price + item.shippingCost)}</Card.Subtitle>
                    </Col>
                </Row>
            </Card.Header>
            <Card.Body>
                <Row>
                    <Col>
                        <Card.Img src={item.photo[0]} />
                    </Col>
                    <Col >
                        <Card.Text >{item.description}</Card.Text>
                    </Col>
                    <Col md={2} >
                        <Button onClick={() => {window.location.href = `/view-item/${item.listingId}`}}>View Item</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default ListingPreview;