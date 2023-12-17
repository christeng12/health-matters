import React from 'react';
import NavBar from '../components/navbar.js';
import ServiceCard from '../components/serviceCard.js';
import ServiceMap from '../components/serviceMap.js';
import compiledData from '../static/compiled.json';
import { useEffect } from "react"

const Services = ({location}) => {
    const provider = location.state?.provider || '';
    const service = location.state?.service || '';
    console.log(provider);
    console.log(service);

    const filteredData = compiledData.filter(item => 
        (item.ServiceType === service) && 
        (item.Provider.toLowerCase().includes(provider.toLowerCase()) || item.Provider === "All")
    );
    console.log(filteredData);

    const serviceContainerStyle = {
        position: 'absolute',
        top: '15%', 
        left: '5%',
        width: '100%',
        height: 'auto', 
        overflow: 'auto',
    };
    // CSS style for horizontal scrolling
    const horizontalScrollStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)', // 4 columns with equal width
        gap: '10px', // Space between cards
        justifyContent: 'center', // Center the grid horizontally
        alignItems: 'center', // Center the grid vertically
        width: '100%', // Full width
        height: '80%',
        margin: 'auto' // Center the grid container
    };

    const noServicesStyle = {
        textAlign: 'center', // Center the text
        fontSize: '50px', // Relatively large font size
        fontWeight: 'bold', // Bold text
    };

    function renderTable(data) {
        if (data.length === 0) {
            return <div style={noServicesStyle}>No services found for this provider!</div>;
        }

        return (
            <div style={serviceContainerStyle}>
                <div style={horizontalScrollStyle}>
                    {data.map((item, index) => (
                        <ServiceCard 
                        key={index} 
                        service={item.ResourceName} 
                        location={`${item.Street}, ${item.City}, ${item.State} ${item.ZipCode}`} 
                        index={index} />
                    ))}
                </div>
            </div>
        );
    }

    function renderMap(data) {
        if (data.length === 0) {
            return <div style={noServicesStyle}>No services found for this provider!</div>;
        }

        const locations = data.map(item => ({
            location: `${item.Street}, ${item.City}, ${item.State} ${item.ZipCode}`.trim(),
            service: item.ResourceName
        }));
        return (
            <ServiceMap data={locations} />
        );
    }
        

    return (
        <div>
            <NavBar />
            {/* {renderTable(filteredData)} */}
            {renderMap(filteredData)}

        </div>
    );
};

export default Services;
