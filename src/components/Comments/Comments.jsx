import React from "react"
import { Container, Row, Col, Button } from 'react-bootstrap';

const Comments = () => {
    return (
        <div>
            <Container className="border border-dark">
                <Row>
                    <h1 id="UserName">John Doe</h1>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-md-auto">
                        <h3 id="rating">5/5</h3>
                    </Col>
                    <Col class="col">
                        <h3 id="Title">Greatest notebook ever</h3>
                    </Col>
                </Row>
                <Row>
                    <p id="actual content">⣿⣿⣿⣿⣿⣿⡿⠿⠿⠿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
                                           ⣿⣿⣿⣿⣿⡏⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⣿⣿⠃⠄⠄⠄⠄⠄⠄⠈⣿
                                           ⣿⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄⣿⣿⣿⣿⡄⠄⣿
                                           ⣿⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄⣿⣿⣿⣿⡇⠄⣿
                                           ⣿⣿⣿⣿⣿⣿⣦⣀⠄⠄⠄⣠⣾⣿⣿⣿⣿⣿⣿⣿⡟⠄⠄⣿⣿⣿⣿⡇⠄⣿
                                           ⣿⣿⣿⣿⣿⡿⠿⠿⠄⠄⠄⠿⢿⣿⣿⣿⣿⣿⣿⣿⣇⠄⠄⣿⣿⣿⣿⡇⠄⣿
                                           ⣿⣿⡿⠟⠉⠄⠄⠄⠄⠄⠄⠄⠄⠄⠙⠻⣿⣿⣿⣿⡟⠄⠄⠉⠉⠉⠉⠄⠄⣿
                                           ⣿⣿⣥⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣼⣿⣿⣿⣿⣶⣶⣶⣶⣶⣶⣶⣿⣿</p>
                </Row>
                <Row>
                    <Col>
                        <Button className="btn btn-success">Helpful</Button>
                        <Button className="btn btn-danger">Report</Button>
                    </Col>
                </Row>
            </Container>
            <Container className="border border-dark">
                <Row>
                    <h1 id="UserName">John Doe</h1>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-md-auto">
                        <h3 id="rating">5/5</h3>
                    </Col>
                    <Col class="col">
                        <h3 id="Title">Greatest notebook ever</h3>
                    </Col>
                </Row>
                <Row>
                    <p id="actual content">⣿⣿⣿⣿⣿⣿⡿⠿⠿⠿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
                                           ⣿⣿⣿⣿⣿⡏⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⣿⣿⠃⠄⠄⠄⠄⠄⠄⠈⣿
                                           ⣿⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄⣿⣿⣿⣿⡄⠄⣿
                                           ⣿⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄⣿⣿⣿⣿⡇⠄⣿
                                           ⣿⣿⣿⣿⣿⣿⣦⣀⠄⠄⠄⣠⣾⣿⣿⣿⣿⣿⣿⣿⡟⠄⠄⣿⣿⣿⣿⡇⠄⣿
                                           ⣿⣿⣿⣿⣿⡿⠿⠿⠄⠄⠄⠿⢿⣿⣿⣿⣿⣿⣿⣿⣇⠄⠄⣿⣿⣿⣿⡇⠄⣿
                                           ⣿⣿⡿⠟⠉⠄⠄⠄⠄⠄⠄⠄⠄⠄⠙⠻⣿⣿⣿⣿⡟⠄⠄⠉⠉⠉⠉⠄⠄⣿
                                           ⣿⣿⣥⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣼⣿⣿⣿⣿⣶⣶⣶⣶⣶⣶⣶⣿⣿</p>
                </Row>
                <Row className="justify-content-between">
                    <Col className="4">
                        <p>12 people found this helpful</p>
                    </Col>
                    <Col className="4">
                        <Button className="btn btn-success">Helpful</Button>
                        <Button className="btn btn-danger">Report</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );

}

export default Comments;