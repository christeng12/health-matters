import React, { useState } from 'react';

const ServiceCard = ({service, location, index}) => {
    const [isOpen, setIsOpen] = useState(false);

    const collapsibleStyle = {
        width: '300px', // Comparable to ProviderCard
        border: '1px solid #ccc',
        borderRadius: '10px',
        margin: '10px',
        padding: '15px',
        textAlign: 'center',
        cursor: 'pointer',
        fontFamily: 'Arial, sans-serif',
        overflow: 'hidden', // Hide content that overflows the container
    };

    const contentStyle = {
        maxHeight: isOpen ? '1000px' : '0', // Set a maximum height that can accommodate the content
        overflow: 'hidden',
        transition: 'max-height 0.5s ease',
        textAlign: 'center',
    };

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div style={collapsibleStyle} onClick={toggleOpen}>
            <h2>{service}</h2>
            <div style={contentStyle}>
                {location}
            </div>
        </div>
    );
};

export default ServiceCard;