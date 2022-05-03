import React, { useState } from "react";
import Stack from "react-bootstrap/Stack";
import {Card, Row, Button, Col} from "react-bootstrap";

import { useFirebaseAuth } from "./../../hooks";

const Checkout = () => {

    const [shippingAddress, setShippingAddress] = useState({});

    const { address } = useFirebaseAuth(); 

    return(
        <Card>
            <Card.Header>

            </Card.Header>
            <Card.Body>
                <Stack direction="horizontal">
                    <Stack>
                        <Stack direction="horizontal">
                            <Card.Text>Shipping address</Card.Text>
                            <Stack>
                                <Card.Text>{address.town}</Card.Text>
                            </Stack>
                        </Stack>
                        
                    </Stack>
                    <Card>

                    </Card>
                </Stack>
            </Card.Body>
        </Card>
    );
}

export default Checkout;