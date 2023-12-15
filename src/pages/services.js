import React from 'react';
import NavBar from './navbar';
import ServiceCard from '../components/serviceCard.js';
import compiledData from '../static/compiled.json';
import { useEffect } from "react"

const Services = ({location}) => {
    const provider = location.state?.provider || '';
    const service = location.state?.service || '';

    const filteredData = compiledData.filter(item => 
        item.ServiceType === service && 
        item.Provider.toLowerCase().includes(provider.toLowerCase())
    );
    console.log(filteredData);

    // CSS style for horizontal scrolling
    const horizontalScrollStyle = {
        display: 'flex',
        flexDirection: 'row',
        overflowX: 'auto',
        paddingLeft: '500px', // Increased horizontal padding
        gap: '10px',
        alignItems: 'center', // Ensure cards are aligned centrally vertically
        height: '100%',
};

    function renderTable(data) {
        return (
            <div style={horizontalScrollStyle}>
                {data.map((item, index) => (
                    <ServiceCard 
                    key={index} 
                    service={item.ResourceName} 
                    location={`${item.Street}, ${item.City}, ${item.State} ${item.ZipCode}`} 
                    index={index} />
                ))}
            </div>
        );
    }

    return (
        <div>
            <NavBar />
            {renderTable(filteredData)}
        </div>
    );
};

export default Services;
