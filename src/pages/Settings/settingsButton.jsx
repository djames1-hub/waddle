import React from "react";
import { Card, Row, Image } from "react-bootstrap";

const SettingsButton = (props) =>{


    return <a href={props.link} className="settings-a">
            <Row style={{ width: 'fit-content' }}>
                <h3 style={{ width: '5rem', textDecoration: 'none' ,fontSize: 'large', marginTop: 'auto', marginBottom: 'auto'}} className="button-title">{props.title}</h3>
                <Image style={{ width: '5rem' }} src={props.src} />
            </Row>   
        </a>
    
}

export default SettingsButton;