import React from "react";
import {Card, Row, Button, Col} from "react-bootstrap";

const PurchasePreview = (props) =>{

    //changes number to current format
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'usd'
    });

    var today = props.date;
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    return <Card style={{ height: '18rem', width: '70rem', marginLeft: 'auto', marginRight: 'auto', marginTop: '2rem' }}>
        <Card.Header>
            <Row>
                <Col>
                    <Card.Title style={{textAlign: 'center'}}>{props.title}</Card.Title>
                    <Card.Subtitle style={{textAlign: 'center'}}>{formatter.format(props.price)}</Card.Subtitle>
                </Col>
                <Col>
                    <Card.Title style={{textAlign: 'center'}} >Purchased On</Card.Title>
                    <Card.Subtitle style={{textAlign: 'center'}} >{today}</Card.Subtitle>
                </Col>
                <Col>
                    <Card.Title style={{textAlign: 'center'}}>Sent To</Card.Title>
                    <Card.Subtitle style={{textAlign: 'center'}} >Address</Card.Subtitle>
                </Col>
            </Row>
        </Card.Header>
        <Card.Body>
            <Row>
                <Col>
                    <Card.Img style={{ height: '10rem', width: 'auto' }} src={props.img} />
                </Col>
                <Col >
                    <Card.Text >{props.description}</Card.Text>
                </Col>
                <Col md={2} >
                    <Button onClick={() => {window.location.href = "/view-item/" + props.listingId}}>View Item</Button>
                </Col>
            </Row>
        </Card.Body>
    </Card>
}

export default PurchasePreview;