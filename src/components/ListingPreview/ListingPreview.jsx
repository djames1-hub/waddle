import React from "react";
import {Card, Row, Button, Col} from "react-bootstrap";
import "./ListingPreview.css"

const ListingPreview = ({ item }) =>{

    //changes number to current format
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'usd'
    });

    return (
        <Card>
            <Card.Header>
                    <Col>
                        <Card.Title>{item.listingTitle}</Card.Title>
                        <Card.Subtitle>{formatter.format(parseFloat(item.price) + item.shippingCost)}</Card.Subtitle>
                    </Col>
            </Card.Header>
            <Card.Body>
                <Row md={3}>
                    <Col>
                        <Card.Img src={item.photo[0]} className="Image-img"/>
                    </Col>
                    <Col>
                        <Card.Text >{item.description}</Card.Text>
                    </Col>
                    <Col md={2} >
                        <Button style={{marginTop : '0.3rem'}} onClick={() => {window.location.href = `/view-item/${item.listingId}`}} className="btn-primary custom">View Item</Button>
                        <Button style={{marginTop : '0.3rem'}} className="btn-primary custom">Add to WishList</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default ListingPreview;