import React from "react";
import Stack from "react-bootstrap/Stack";
import Navbar from 'react-bootstrap/Navbar';

const FormNavbar = ({ tabs }) => {
    return (
        <Navbar  >
        <Stack direction="horizontal" className="mx-auto" gap={4}>
            {tabs.map(tab => (
                <Navbar.Text key={tab.label} className={tab.active ? 'border-4 border-bottom border-primary' : 'border-4 border-bottom border-light'}>{tab.label}</Navbar.Text>
            ))}
        </Stack>
        </Navbar>
    );
}

export default FormNavbar;