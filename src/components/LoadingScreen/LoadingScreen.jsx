import React from "react";
import Spinner from 'react-bootstrap/Spinner';
import './LoadingScreen.css';

const LoadingScreen = () => {
    return (
     <div className="full-width d-flex justify-content-center align-items-center">
        <Spinner animation="border" role="status" size="lg" className="spinner-size spinner-color">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
     </div>
    );
}

export default LoadingScreen;